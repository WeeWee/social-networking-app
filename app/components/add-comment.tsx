import { Form } from "@remix-run/react";
import { forwardRef, useState } from "react";
import { TComments } from "~/types";

export const AddCommentInput = forwardRef<
	HTMLInputElement,
	{
		parentId: string;
		post_id: string;
		commentInput: string;
		setCommentInput: React.Dispatch<React.SetStateAction<string>>;
		comments: TComments[];
	}
>(({ commentInput, setCommentInput, parentId, post_id, comments }, ref) => {
	return (
		<Form
			onSubmit={() => setCommentInput("")}
			method="post"
			encType="multipart/form-data"
			className="flex"
		>
			<input type="hidden" name="parent_id" value={parentId} />
			<input
				ref={ref}
				name="comment"
				onChange={(e) => setCommentInput(e.target.value)}
				value={commentInput}
				type="text"
				placeholder={
					comments?.length! > 0
						? "Add a comment..."
						: "Be the first to comment!"
				}
				className="text-sm bg-inherit focus:border-0 focus:outline-none w-full max-w-xs"
			/>
			<input type="hidden" name="post_id" value={post_id} />
			{commentInput.length > 0 ? (
				<button className="text-sm" name="_action" value="comment">
					Post
				</button>
			) : (
				<></>
			)}
		</Form>
	);
});
