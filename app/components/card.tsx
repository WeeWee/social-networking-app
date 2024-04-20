import {
	ChatBubbleOvalLeftIcon,
	HeartIcon,
	PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import type { TComments, TPost, TUser } from "~/types";
import { AddCommentInput, ImageComponent } from ".";
import { Form, Link } from "@remix-run/react";
import { useRef, useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
export function Card({
	post,
	link,
	href,
	currentUser,
	comments,
}: {
	link?: boolean;
	href?: string;
	post: TPost;
	currentUser: TUser;
	comments: TComments[];
}) {
	const currentPostComments = comments.filter(
		(comment) => comment.post_id! === post.id
	);
	const [comment, setComment] = useState("");
	const commentInputRef = useRef<HTMLInputElement>(null);
	return (
		<div className="mx-auto my-1 aspect-[4/5] max-w-sm rounded-sm  text-base-content">
			<div className="flex gap-2 my-2 items-center">
				<Link to={`/user/${post.user?.username}`} className="avatar">
					<div className="w-9 h-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
						<img src={post.user?.avatar} alt="" />
					</div>
				</Link>
				<Link to={`/user/${post.user?.username}`}>
					<p>{post.user?.username}</p>
				</Link>
				<div
					className="tooltip tooltip-bottom"
					data-tip={dayjs(post.created_at).format("MMMM, D YYYY")}
				>
					<p className="text-gray-400">
						{dayjs().diff(post.created_at, "week")}w
					</p>
				</div>
			</div>

			<ImageComponent
				src={post.image}
				className=" mt-3 mb-2 w-full h-full border border-neutral"
				alt={post.title}
			/>

			<div className=" pb-4 border-b border-b-neutral">
				<div className="">
					<section className="flex gap-2 items-center my-1 text-neutral-content">
						<Form
							method="post"
							encType="multipart/form-data"
							className="flex items-center"
						>
							<input type="hidden" name="post_id" value={post.id} />
							<button name="_action" value="like">
								{post.likes.find((like) => like.user.id === currentUser.id) ? (
									<HeartIconSolid className="w-7 h-7" />
								) : (
									<HeartIcon className="w-7 h-7" />
								)}
							</button>
						</Form>
						<button onClick={() => commentInputRef.current?.focus()}>
							<ChatBubbleOvalLeftIcon className="w-7 h-7" />
						</button>
						<PaperAirplaneIcon className="w-7 h-7" />
					</section>

					<p className="text-sm font-semibold">{post.likes.length} likes</p>
					<div className="flex gap-1">
						<Link to={`/user/${post.user?.username}`} className="font-semibold">
							{post.user?.username}
						</Link>
						<p>{post.title}</p>
					</div>
					<Link to={`/post/${post.id}`} className="text-sm text-gray-400">
						View all {currentPostComments.length} comments
					</Link>
					<div className="flex gap-1">
						<Link
							to={`/user/${
								currentPostComments[comments.length - 1]?.user.username
							}`}
							className="font-semibold"
						>
							{currentPostComments[comments.length - 1]?.user.username}
						</Link>
						<p>{currentPostComments[comments.length - 1]?.comment.text}</p>
					</div>
					<AddCommentInput
						ref={commentInputRef}
						commentInput={comment}
						comments={comments}
						parentId=""
						post_id={post.id}
						setCommentInput={setComment}
					/>
				</div>
			</div>
		</div>
	);
}
