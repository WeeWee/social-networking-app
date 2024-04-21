import { Link } from "@remix-run/react";
import dayjs from "dayjs";
import { TComments } from "~/types";

export function Comment({
	data,
	children,
	setComment,
	setParentId,
	isReply,
}: {
	data: TComments;
	children?: React.ReactNode;
	setComment: React.Dispatch<React.SetStateAction<string>>;
	setParentId: React.Dispatch<React.SetStateAction<string>>;
	isReply: boolean;
}) {

	let splitComment = "";
	let username = "";
	let newComment = data.comment.text;
	//" "Testing
	//@username Testing
	if (newComment.includes("@")) {
		newComment.trimStart();
		splitComment = data.comment.text.split(" ")[0];
		newComment = data.comment.text.replace(splitComment, "");
		newComment.trimStart();
		username = splitComment.replace("@", "");
	}

	return (
		<div className="my-2">
			<div className="flex  items-center justify-center gap-1">
				<Link to={`/user/${data.user.username}`}>
					<img
						className="w-8 h-8 rounded-full object-cover"
						src={data.user.avatar}
					/>
				</Link>
				<p className=" inline-block max-w-fit">{data.user.username}</p>
				<p className="text-sm text-gray-500">
					{dayjs(data.comment.created_at).fromNow()}
				</p>
			</div>
			<div className="ml-9 text-sm flex gap-1">
				{username && (
					<Link className="font-semibold" to={`/user/${username}`}>
						{splitComment}
					</Link>
				)}
				<p>{newComment}</p>
			</div>
			<button
				onClick={() => {
					setComment(`@${data.user.username}`);
					if (isReply) {
						setParentId(data.parent_comment!.id);
					} else {
						setParentId(data.comment.id);
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
