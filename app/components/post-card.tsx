import { TComments, TPost, TUser } from "~/types";
import dayjs from "dayjs";
import { CommentSection, ImageComponent } from ".";

export function PostCard({
	post,
	currentUser,
	comments,
}: {
	post: TPost;
	currentUser: TUser;
	comments: TComments[];
}) {
	return (
		<div className="card card-side bg-base-100 shadow-xl">
			<ImageComponent
				className="max-w-xl max-h-[36rem]"
				src={post.image}
				alt={post.title}
			/>
			<div className="card-body pb-4">
				<h2 className="card-title">{post.title}</h2>
				<div className="flex gap-4 my-6 items-center">
					<img
						className="rounded-full w-14 h-14 object-cover"
						src={post.user?.avatar!}
						alt={post.user?.username!}
					/>
					<div>
						<p className=" font-bold capitalize text-sm">
							{post.user?.username}
						</p>
						<p className="text-sm">{post.user?.followers?.length} followers</p>
					</div>
				</div>
				<CommentSection
					currentUser={currentUser}
					post={post}
					comments={comments}
				/>
			</div>
		</div>
	);
}
