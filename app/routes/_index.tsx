import {
	type MetaFunction,
	type LoaderFunction,
	type ActionFunction,
	unstable_createMemoryUploadHandler,
	unstable_parseMultipartFormData,
	json,
	redirect,
} from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { Card } from "~/components";
import { getUser, getUserId } from "~/lib/auth.server";
import {
	addComment,
	addPost,
	getComments,
	getPosts,
	hasLikedPost,
	likePost,
	unLikePost,
} from "~/lib/database.server";
import type { TComments, TPost, TUser } from "~/types";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	return [
		{
			title: data.user
				? data.posts.length > 0
					? `@Connect | ${data.posts.length} post(s)`
					: `@Connect | No posts yet`
				: "@Connect | Login to view posts",
		},
		{
			name: "description",
			content: "Welcome to @Connect, a social media platform built for you.",
		},
	];
};
export const loader: LoaderFunction = async ({ request }) => {
	const response = new Response();
	const data = await getUser(request, response);
	if (!data?.user) return redirect("/login");
	const posts = await getPosts(request, response, data.user?.id as string);
	const comments = await getComments(request, response);
	return { user: data.user, posts, comments };
};
export const action: ActionFunction = async ({ request }) => {
	const uploadHandler = unstable_createMemoryUploadHandler();
	const formData = await unstable_parseMultipartFormData(
		request,
		uploadHandler
	);
	const _action = formData.get("_action");
	const response = new Response();
	const currentUser = await getUser(request, response);
	if (_action === "addPost") {
		const image = formData.get("image") as File;
		const title = formData.get("title") as string;
		const userId = await getUserId(request, response);
		await addPost(request, response, image, title, userId!);
		return json(null, { headers: response.headers });
	}
	if (_action === "comment") {
		await addComment(
			request,
			response,
			"test",
			formData.get("post_id") as string,
			null,
			currentUser?.user.id as string
		);
		return json(null, { headers: response.headers });
	}
	if (_action === "like") {
		const hasLiked = await hasLikedPost(
			request,
			response,
			currentUser?.user.id as string,
			formData.get("post_id") as string
		);
		if (hasLiked) {
			await unLikePost(
				request,
				response,
				currentUser?.user.id as string,
				formData.get("post_id") as string
			);
		} else {
			await likePost(
				request,
				response,
				currentUser?.user.id as string,
				formData.get("post_id") as string
			);
		}
		return json(null, { headers: response.headers });
	}
};
export default function Index() {
	const { user, posts, comments } = useLoaderData() as {
		user: TUser;
		posts: TPost[];
		comments: TComments[];
	};
	console.log(posts);
	return (
		<div className=" ">
			<div className="grid max-w-lg mx-auto">
				{posts &&
					posts.map((post) => {
						if (post?.user)
							return (
								<Card
									post={post}
									link
									href={`/user/${post.user.username}`}
									key={post.id}
									currentUser={user}
									comments={comments}
								/>
							);
						else return <div key={post.id}></div>;
					})}
			</div>
		</div>
	);
}
