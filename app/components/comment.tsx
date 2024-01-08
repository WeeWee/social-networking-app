import { Link } from "@remix-run/react";
import dayjs from "dayjs";
import { TComments } from "~/types";

export function Comment({
	comment,

	children,
	setComment,
	setParentId,
	isReply,
}: {
	comment: TComments;
	children?: React.ReactNode;
	setComment: React.Dispatch<React.SetStateAction<string>>;
	setParentId: React.Dispatch<React.SetStateAction<string>>;
	isReply: boolean;
}) {
	let splitComment = "";
	let username = "";
	let newComment = comment.comment.text;
	if (isReply) {
		splitComment = comment.comment.text.split(" ")[0];
		newComment = comment.comment.text.replace(splitComment, "");
		newComment.trimStart();
		username = splitComment.replace("@", "");
	}
	return (
		<div className="my-2">
			<div className="flex  items-center justify-center gap-1">
				<Link to={`/user/${comment.user.username}`}>
					<img
						className="w-8 h-8 rounded-full object-cover"
						src={comment.user.avatar}
					/>
				</Link>
				<p className=" inline-block max-w-fit">{comment.user.username}</p>
				<p className="text-sm text-gray-500">
					{dayjs(comment.comment.created_at).fromNow()}
				</p>
			</div>
			<div className="ml-9 text-sm flex gap-1">
				{isReply && (
					<Link className="font-semibold" to={`/user/${username}`}>
						{splitComment}
					</Link>
				)}
				<p>{newComment}</p>
			</div>
			<button
				onClick={() => {
					setComment(`@${comment.user.username}`);
					if (isReply) {
						setParentId(comment.parent_comment!.id);
					} else {
						setParentId(comment.comment.id);
					}
				}}
				className="text-sm "
			>
				reply
			</button>
			{children}
		</div>
	);
}
