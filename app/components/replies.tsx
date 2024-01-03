import { SupabaseClient } from "@supabase/supabase-js";
import dayjs from "dayjs";
import { TComments } from "~/types";
import { Comment, Reply } from ".";
import { useState } from "react";
import { MinusIcon } from "@heroicons/react/24/outline";

export function Replies({
	replies,
	/* supabase, */
	setComment,
	setParentId,
}: {
	replies: TComments[] | undefined;
	/* supabase: SupabaseClient<any, "public", any>; */
	setComment: React.Dispatch<React.SetStateAction<string>>;
	setParentId: React.Dispatch<React.SetStateAction<string>>;
}) {
	const [showReplies, setShowReplies] = useState(false);
	return (
		<div>
			{replies && replies.length > 0 ? (
				<div className="flex items-center gap-4">
					<span className="bg-neutral w-10 h-px" />
					<button
						className="text-sm"
						onClick={() => setShowReplies((prev) => !prev)}
					>
						{showReplies
							? `Hide all replies`
							: `View all ${replies?.length} replies`}
					</button>
				</div>
			) : (
				<></>
			)}

			{showReplies &&
				replies?.map((reply) => {
					
						
					return (
						<div className="ml-14" key={reply.comment.id}>
							<Comment
								isReply
								setParentId={setParentId}
								setComment={setComment}
								comment={reply}
							/>
						</div>
					);
				})}
		</div>
	);
}
