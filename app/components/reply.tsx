import dayjs from "dayjs";
import { TComments } from "~/types";

export function Reply({
	replyAvatar,
	reply,
}: {
	replyAvatar: string;
	reply: TComments;
}) {
	return (
		<>
			<div className="flex  items-center justify-center gap-1">
				<img className="w-8 h-8 rounded-full object-cover" src={replyAvatar} />
				<p className=" inline-block max-w-fit">{reply.user.username}</p>
				<p className="text-sm text-gray-500">
					{dayjs(reply.comment.created_at).fromNow()}
				</p>
			</div>
			<p className="ml-9 text-sm">{reply.comment.text}</p>
		</>
	);
}
