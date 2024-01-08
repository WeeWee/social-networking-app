import { createServerClient } from "@supabase/auth-helpers-remix";
import type { TPost, TPostData, TUser } from "./../types";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_API_KEY!;
const supabase = (request: Request, response: Response) =>
  createServerClient(supabaseUrl, supabaseKey, { request, response });

const getPosts = async (request: Request, response: Response) => {
  const { data, error } = await supabase(request, response)
    .from("posts")
    .select(`id, title, image_bucket_id, image_name, user:users(id, username)`);
  if (error) {
    console.error(error);
    return null;
  }
  const postsWithImages = await Promise.all(
    data.map(async (post: TPostData) => {
      const image = getImage(
        request,
        response,
        post.image_bucket_id,
        post.image_name
      );

      return { ...post, image: image.data.publicUrl };
    })
  );
  return postsWithImages as TPost[];
};
const getImage = (
  request: Request,
  response: Response,
  image_bucket_id: string,
  image_name: string
) => {
  return supabase(request, response)
    .storage.from(image_bucket_id)
    .getPublicUrl(image_name);
};
const getAvatar = (request: Request, response: Response, user: TUser) => {
  return supabase(request, response)
    .storage.from(user.avatar_bucket_id!)
    .getPublicUrl(user.avatar_name!);
};

const getPostsByUserId = async (
  request: Request,
  response: Response,
  id: string
) => {
  const { data, error } = await supabase(request, response)
    .from("posts")
    .select(
      `id, title, image_name, image_bucket_id, created_at, user:users!inner(id, username), comments:post_comment(comment:comments!post_comment_comment_id_fkey(id,text,created_at),parent_comment:comments!post_comment_parent_comment_id_fkey(id,text,created_at), user:users!post_comment_user_id_fkey(id, username))`
    )
    .eq("user.id", id);
  if (error) {
    console.error(error);
    return null;
  }
  /* console.log("posts data: ", data); */
  const postsWithImages = await Promise.all(
    // @ts-ignore
    data.map(async (post: TPostData) => {
      const image = getImage(
        request,
        response,
        post.image_bucket_id,
        post.image_name
      );
      const { created_at, image_bucket_id, image_name, ...restPost } = post;

      console.log(post.comments);
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
  const { data, error } = await supabase(request, response)
    .from("posts")
    .select(
      `id, title, image_name, image_bucket_id, created_at, user:users!inner(id, username), comments:post_comment(comment:comments!post_comment_comment_id_fkey(id,text,created_at),parent_comment:comments!post_comment_parent_comment_id_fkey(id,text,created_at), user:users!post_comment_user_id_fkey(id, username))`
    )
    .eq("id", id)
    .single();
  if (error) {
    console.error("postId err", error);
    return null;
  }
  const { image_name, image_bucket_id, ...post } = data;
  const image = getImage(request, response, image_bucket_id, image_name).data
    .publicUrl;
  return { ...post, image };
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
    console.error(follower.error);
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
    console.error(follower.error);
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
    console.error(error);
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
    })
    .select()
    .single();
  if (post.error) {
    console.error(post.error);
    return null;
  }
  await supabase(request, response)
    .from("post_user")
    .insert({ user_id, post_id: post.data.id });
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
  addPost,
  getPostsByUserId,
  getImage,
  getAvatar,
  followUser,
  unfollowUser,
  isFollowing,
  addComment,
  getPostById,
};
