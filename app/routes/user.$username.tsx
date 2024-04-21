import {
	type ActionFunctionArgs,
	json,
	type LoaderFunctionArgs,
	MetaFunction,
	redirect,
} from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { ProfileCard } from "~/components";
import { getUser, getUserByUsername } from "~/lib/auth.server";
import {
	addComment,
	followUser,
	isFollowing,
	unfollowUser,
} from "~/lib/database.server";
import cn from "classnames";
import type { TPost } from "~/types";
export const meta: MetaFunction<typeof loader> = ({ data }) => {
	return [
		{
			title: data?.user
				? `@Connect | ${data.user.username}`
				: `@Connect | User not found`,
		},
		{
			name: "description",
			content: "Welcome to @Connect, a social media platform built for you.",
		},
	];
};
export const loader = async ({ request, params }: LoaderFunctionArgs) => {
	const { username } = params;
	const response = new Response();
	const currentUser = await getUser(request, response);
	if (!currentUser?.user) return redirect("/login");
	const userData = await getUserByUsername(request, response, username!);
	const is_following = await isFollowing(
		request,
		response,
		currentUser?.user.id as string,
		userData?.user.id as string
	);
	return json(
		{
			currentUser: currentUser?.user,
			is_following,
			user: userData?.user,
			posts: userData?.posts,
		},
		{ headers: response.headers }
	);
};
export const action = async ({ request, params }: ActionFunctionArgs) => {
	const { username } = params;
	const response = new Response();
	const currentUser = await getUser(request, response);
	const userToFollow = await getUserByUsername(request, response, username!);
	const formData = await request.formData();
	const _action = formData.get("_action");
	if (_action === "follow") {
		await followUser(
			request,
			response,
			currentUser?.user.id as string,
			userToFollow?.user.id as string
		);
	}
	if (_action === "unfollow") {
		await unfollowUser(
			request,
			response,
			currentUser?.user.id as string,
			userToFollow?.user.id as string
		);
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
	}
	return json(null, { headers: response.headers });
};
export default function User() {
	const { currentUser, user, posts, is_following } =
		useLoaderData<typeof loader>();

	return (
		<div className="flex flex-col w-full">
			<section className="flex gap-24 ">
				{user?.avatar_name ? (
					<img
						src={user?.avatar}
						alt={user?.username}
						loading="lazy"
						className="rounded-full object-cover h-48 w-48"
					/>
				) : (
					<div className="avatar placeholder">
						<div className="bg-neutral-focus text-neutral-content rounded-full w-32 ">
							<span className="text-4xl capitalize">
								{user?.username?.charAt(0)}
							</span>
						</div>
					</div>
				)}
				<div className="flex flex-col gap-4">
					<div className="flex gap-4 items-center text-center">
						<h1 className="text-2xl ">{user?.username}</h1>
						{currentUser?.id === user?.id && (
							<button className="btn btn-outline btn-sm">Edit Profile</button>
						)}
					</div>
					<div className="flex gap-4">
						<p>
							<span className="font-semibold">{posts?.length}</span> posts
						</p>
						<p>
							<span className="font-semibold">{user?.followers?.length}</span>{" "}
							followers
						</p>
						<p>
							<span className="font-semibold">{user?.following.length}</span>{" "}
							following
						</p>
					</div>
					<p className="font-semibold capitalize">
						{user?.first_name} {user?.last_name}
					</p>
					{currentUser?.id !== user?.id && (
						<div>
							<Form method="post">
								<button
									name="_action"
									value={!is_following ? "follow" : "unfollow"}
									className={cn(
										{ "rounded-md px-4 p-2  text-white": true },
										{ "bg-blue-400": !is_following },
										{ "bg-red-400": is_following }
									)}
								>
									{!is_following ? "Follow" : "Unfollow"}
								</button>
							</Form>
						</div>
					)}
				</div>
			</section>
			<div className="divider"></div>
			<div className="">
				<div className=" grid grid-cols-3 gap-4 mx-auto">
					{posts && user ? (
						posts?.map((post) => (
							<ProfileCard key={post.id} post={post as TPost} />
						))
					) : (
						<p>User could not be found.</p>
					)}
				</div>
			</div>
		</div>
	);
}
