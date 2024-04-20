import { createServerClient } from "@supabase/auth-helpers-remix";
import type { TComments, TPost, TPostData, TUser } from "./../types";
import type { PostgrestError } from "@supabase/supabase-js";
import { getUserById } from "./auth.server";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_API_KEY!;
const supabase = (request: Request, response: Response) =>
	createServerClient(supabaseUrl, supabaseKey, { request, response });

const getPosts = async (
	request: Request,
	response: Response,
	userId: string
) => {
	const { data: postsData, error: postsError } = await supabase(
		request,
		response
	)
		.from("posts")
		.select(
			`
    id, title, image_bucket_id, image_name, created_at,
    user:users(id, username, avatar_name, avatar_bucket_id),
	likes:post_like(id, user:users!post_like_user_id_fkey(id, username))
  `
		)
		.order("created_at", { ascending: false })
		.returns<TPostData[]>();

	if (postsError) {
		console.error(postsError);
		return null;
	}

	const { data: followedUsers, error: followedUsersError } = await supabase(
		request,
		response
	)
		.from("followers")
		.select("following_id")
		.eq("follower_id", userId);

	const filteredPosts = postsData?.sort((a: TPostData, b: TPostData) => {
		const isFollowedA = followedUsers?.some(
			(user) => user.following_id === a.user?.id
		);
		const isFollowedB = followedUsers?.some(
			(user) => user.following_id === b.user?.id
		);

		if (isFollowedA && !isFollowedB) return -1;
		if (!isFollowedA && isFollowedB) return 1;
		return b?.created_at?.localeCompare(a?.created_at as string) || 0;
	});

	if (followedUsersError) {
		console.error(followedUsersError);
		return null;
	}
	const postsWithImages = await Promise.all(
		filteredPosts.map(async (post) => {
			const image = getImage(request, response, post as TPostData);
			const avatar = getAvatar(request, response, post.user!);
			const { avatar_name, avatar_bucket_id, ...restUser } = post.user!;
			const newUser = { avatar: avatar.data.publicUrl, ...restUser };
			const { image_name, image_bucket_id, user, ...restPost } = post;
			return { user: newUser, image: image.data.publicUrl, ...restPost };
		})
	);
	console.log(postsWithImages[0].likes);
	return postsWithImages as TPost[];
};
const getImage = (request: Request, response: Response, post: TPostData) => {
	return supabase(request, response)
		.storage.from(post.image_bucket_id)
		.getPublicUrl(post.image_name);
};
const getAvatar = (request: Request, response: Response, user: TUser) => {
	return supabase(request, response)
		.storage.from(user.avatar_bucket_id!)
		.getPublicUrl(user.avatar_name!);
};
const getComments = async (request: Request, response: Response) => {
	const { data, error } = (await supabase(request, response)
		.from("post_comment")
		.select(
			"post_id, comment:comments!post_comment_comment_id_fkey(id,text,created_at), parent_comment:comments!post_comment_parent_comment_id_fkey(id, text, created_at), user:users!post_comment_user_id_fkey(id, username, avatar_name, avatar_bucket_id)"
		)) as {
		data: TComments[] | null;
		error: PostgrestError | null;
	};
	console.log(data);
	if (error) {
		console.error("get comments ", error);
		return [];
	}
	const commentsWithAvatar = await Promise.all(
		// @ts-ignore
		data.map(async (comment) => {
			const userAvatar = getAvatar(request, response, comment.user as TUser);
			const { avatar_bucket_id, avatar_name, ...restUser } = comment.user;
			return {
				user: { avatar: userAvatar.data.publicUrl, ...restUser },
				parent_comment: comment.parent_comment,
				comment: comment.comment,
				post_id: comment.post_id,
			};
		})
	);
	return commentsWithAvatar;
};
const getPostsByUserId = async (
	request: Request,
	response: Response,
	id: string
) => {
	const { data, error } = await supabase(request, response)
		.from("posts")
		.select(
			`id, title, image_name, image_bucket_id, created_at, user:users!inner(id, username),likes:post_like(id, user:users!post_like_user_id_fkey(id, username, avatar_name, avatar_bucket_id)), comments:post_comment(id)`
		)
		.eq("user.id", id);

	if (error) {
		console.error("post by user id ", error);
		return null;
	}

	const postsWithImages = await Promise.all(
		// @ts-ignore
		data.map(async (post: TPostData) => {
			const image = getImage(request, response, post);

			const { created_at, image_bucket_id, image_name, ...restPost } = post;

			return { ...restPost, image: image.data.publicUrl };
		})
	);

	return postsWithImages;
};
const getPostById = async (
	request: Request,
	response: Response,
	id: string
) => {
	const {
		data,
		error,
	}: { data: TPostData | null; error: PostgrestError | null } = await supabase(
		request,
		response
	)
		.from("posts")
		.select(
			`id, title, image_name, image_bucket_id, created_at, user:users!inner(id, username, avatar_bucket_id, avatar_name), likes:post_like(id, user:users!post_like_user_id_fkey(id, username, avatar_name, avatar_bucket_id))`
		)
		.eq("id", id)
		.single();
	if (error) {
		console.error("post by id ", error);
		return null;
	}
	const image = getImage(request, response, data!);

	const { image_bucket_id, image_name, user, ...restPost } = data!;
	const userWAvatar = await getUserById(request, response, user?.id as string);
	return {
		user: userWAvatar?.user,
		...restPost,
		image: image.data.publicUrl,
	} as TPost;
};
const getCommentsByPostId = async (
	request: Request,
	response: Response,
	post_id: string
) => {
	const { data, error } = (await supabase(request, response)
		.from("post_comment")
		.select(
			"comment:comments!post_comment_comment_id_fkey(id,text,created_at), parent_comment:comments!post_comment_parent_comment_id_fkey(id, text, created_at), user:users!post_comment_user_id_fkey(id, username, avatar_name, avatar_bucket_id)"
		)
		.eq("post_id", post_id)) as {
		data: TComments[] | null;
		error: PostgrestError | null;
	};
	if (error) {
		console.error(error);
		return null;
	}
	const commentsWithAvatar = await Promise.all(
		// @ts-ignore
		data.map(async (comment) => {
			const userAvatar = getAvatar(request, response, comment.user as TUser);
			const { avatar_bucket_id, avatar_name, ...restUser } = comment.user;
			return {
				user: { avatar: userAvatar.data.publicUrl, ...restUser },
				parent_comment: comment.parent_comment,
				comment: comment.comment,
			};
		})
	);
	return commentsWithAvatar;
};
const likePost = async (
	request: Request,
	response: Response,
	user_id: string,
	post_to_like_id: string
) => {
	const isPostLiked = await hasLikedPost(
		request,
		response,
		user_id,
		post_to_like_id
	);
	if (!isPostLiked) {
		const likepost = await supabase(request, response)
			.from("post_like")
			.insert({ user_id, post_id: post_to_like_id })
			.select();
		if (likepost.error) {
			console.error("like post ", likepost.error);
		}
	}
	return null;
};
const unLikePost = async (
	request: Request,
	response: Response,
	user_id: string,
	post_to_remove_id: string
) => {
	const removeLike = await supabase(request, response)
		.from("post_like")
		.delete()
		.eq("user_id", user_id)
		.eq("post_id", post_to_remove_id)
		.select();
	if (removeLike.error) {
		console.error("remove like ", removeLike.error);
	}

	return null;
};
const hasLikedPost = async (
	request: Request,
	response: Response,
	user_id: string,
	liked_post_id: string
) => {
	const isPostLiked = await supabase(request, response)
		.from("post_like")
		.select()
		.eq("user_id", user_id)
		.eq("post_id", liked_post_id);
	return isPostLiked.data && isPostLiked.data.length > 0;
};
const followUser = async (
	request: Request,
	response: Response,
	user_id: string,
	user_to_follow_id: string
) => {
	const follower = await supabase(request, response)
		.from("followers")
		.insert({ follower_id: user_id, following_id: user_to_follow_id })
		.select();

	if (follower.error) {
		console.error("follow user ", follower.error);
		return null;
	}
	return null;
};
const unfollowUser = async (
	request: Request,
	response: Response,
	user_id: string,
	user_to_unfollow_id: string
) => {
	const follower = await supabase(request, response)
		.from("followers")
		.delete()
		.eq("follower_id", user_id)
		.eq("following_id", user_to_unfollow_id)
		.select();
	if (follower.error) {
		console.error("unfollow user ", follower.error);
		return null;
	}
	return null;
};
const isFollowing = async (
	request: Request,
	response: Response,
	user_id: string,
	target_user_id: string
) => {
	const { data, error } = await supabase(request, response)
		.from("followers")
		.select("*")
		.eq("follower_id", user_id)
		.eq("following_id", target_user_id);
	if (error) {
		console.error("is following ", error);
		return false;
	}

	return data.length > 0 ? true : false;
};
const addPost = async (
	request: Request,
	response: Response,
	image: File,
	title: string,
	user_id: string
) => {
	const { error } = await supabase(request, response)
		.storage.from("images")
		.download(image.name);

	let uploadedImage;

	if (error) {
		// The image doesn't exist, so upload the new image
		uploadedImage = await supabase(request, response)
			.storage.from("images")
			.upload(image.name, image);

		if (uploadedImage.error) {
			console.error(uploadedImage.error);
			return null;
		}
	}

	// Use the appropriate image path
	const finalImagePath = uploadedImage ? uploadedImage.data.path : image.name;
	const post = await supabase(request, response)
		.from("posts")
		.insert({
			title,
			image_bucket_id: "images",
			image_name: finalImagePath,
			user_id,
		})
		.select()
		.single();
	if (post.error) {
		console.error(post.error);
		return null;
	}
	return post.data as TPost;
};
const addComment = async (
	request: Request,
	response: Response,
	text: string,
	post_id: string,

	parent_comment_id: string | null,
	user_id: string
) => {
	const { data, error } = await supabase(request, response)
		.from("comments")
		.insert({ text })
		.select("id")
		.single();
	if (error) {
		console.error(error);
		return null;
	}
	const postComment = await supabase(request, response)
		.from("post_comment")
		.insert({ post_id, comment_id: data.id, parent_comment_id, user_id })
		.select()
		.single();
	if (postComment.error) {
		console.error(error);
		return null;
	}
	return null;
};

export {
	supabase,
	getPosts,
	getPostById,
	addPost,
	getPostsByUserId,
	getCommentsByPostId,
	getComments,
	getImage,
	getAvatar,
	followUser,
	unfollowUser,
	isFollowing,
	addComment,
	likePost,
	hasLikedPost,
	unLikePost,
};
