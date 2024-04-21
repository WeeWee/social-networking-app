import { TComments, TPost, TUser } from "~/types";
import { AddCommentInput, Comment, Replies } from ".";
import {
	HeartIcon,
	ChatBubbleOvalLeftIcon,
	PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { Form } from "@remix-run/react";
import dayjs from "dayjs";
import { useRef, useState } from "react";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
export function CommentSection({
	comments,
	post,
	currentUser,
}: {
	comments: TComments[];
	post: TPost;
	currentUser: TUser;
}) {
	const [comment, setComment] = useState("");
	const [parentId, setParentId] = useState("");
	const commentInputRef = useRef<HTMLInputElement>(null);
	return (
		<div className="flex flex-col flex-1">
			<div className="flex flex-col flex-1 overflow-y-auto max-h-[248px]">
				{comments
					?.filter((comment) => comment.parent_comment === null)
					.map((comment) => {
						const replies = comments?.filter(
							(child) => comment.comment.id === child.parent_comment?.id
						);
						return (
							<div key={comment.comment.id}>
								<Comment
									isReply={false}
									setComment={setComment}
									setParentId={setParentId}
									data={comment}
								>
									<Replies
										setParentId={setParentId}
										setComment={setComment}
										replies={replies}
									/>
								</Comment>
							</div>
						);
					})}
			</div>
			<div>
				<section className="flex gap-2 my-1 text-neutral-content">
					<Form method="post" className="w-7 h-7">
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
				<p>{post.likes.length} likes</p>
				<p className="text-xs">
					{dayjs().diff(post.created_at, "week") > 0
						? dayjs(post.created_at).format("[the] DD MMMM")
						: dayjs(post.created_at).fromNow()}
				</p>
				<div className="mt-6 flex gap-2">
					<img
						className="rounded-full w-9 h-9 object-cover"
						src={currentUser.avatar}
						alt={currentUser.username}
					/>
					<AddCommentInput
						ref={commentInputRef}
						commentInput={comment}
						setCommentInput={setComment}
						comments={comments}
						parentId={parentId}
						post_id={post.id}
					/>
				</div>
			</div>
		</div>
	);
}
