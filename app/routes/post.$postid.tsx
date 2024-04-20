import {
	ActionFunctionArgs,
	json,
	redirect,
	type LoaderFunctionArgs,
} from "@remix-run/node";
import { type MetaFunction, useLoaderData } from "@remix-run/react";
import { PostCard } from "~/components";
import { getUser } from "~/lib/auth.server";
import {
	addComment,
	getCommentsByPostId,
	getPostById,
	hasLikedPost,
	likePost,
	unLikePost,
} from "~/lib/database.server";
import type { TComments, TPost, TUser } from "~/types";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};
export async function loader({ request, params }: LoaderFunctionArgs) {
	const { postid } = params;
	const response = new Response();
	const currentUser = (await getUser(request, response))?.user;
	if (!currentUser) return redirect("/login");
	const post = await getPostById(request, response, postid as string);
	const comments = await getCommentsByPostId(
		request,
		response,
		postid as string
	);
	return json(
		{
			currentUser,
			post,
			comments,
			supabase_url: process.env.SUPABASE_URL!,
			supabase_api_key: process.env.SUPABASE_API_KEY!,
		},
		{ headers: response.headers }
	);
}

export async function action({ request }: ActionFunctionArgs) {
	const response = new Response();
	const formData = await request.formData();
	const _action = formData.get("_action");
	const parentId = formData.get("parent_id") as string;
	const comment = formData.get("comment") as string;
	const currentUser = (await getUser(request, response))?.user;
	if (_action === "comment") {
		await addComment(
			request,
			response,
			comment as string,
			formData.get("post_id") as string,
			parentId.length > 0 ? parentId : null,
			currentUser?.id as string
		);
	}
	if (_action === "like") {
		const hasLiked = await hasLikedPost(
			request,
			response,
			currentUser?.id as string,
			formData.get("post_id") as string
		);
		if (hasLiked) {
			await unLikePost(
				request,
				response,
				currentUser?.id as string,
				formData.get("post_id") as string
			);
		} else {
			await likePost(
				request,
				response,
				currentUser?.id as string,
				formData.get("post_id") as string
			);
		}
	}
	return json(null, { headers: response.headers });
}
export default function Post() {
	const { currentUser, post, comments } = useLoaderData<typeof loader>();
	return (
		<div>
			{post ? (
				<PostCard
					currentUser={currentUser as TUser}
					post={post as TPost}
					comments={comments as TComments[]}
				/>
			) : (
				<h1>Post could not be found</h1>
			)}
		</div>
	);
}
