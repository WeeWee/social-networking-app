import type { TPost } from "~/types";
import { ImageComponent } from ".";
import { ChatBubbleOvalLeftIcon, HeartIcon } from "@heroicons/react/24/solid";
import { Link } from "@remix-run/react";

export const ProfileCard = ({ post }: { post: TPost }) => {
	return (
		<Link to={`/post/${post.id}`} className="group relative">
			<div className="w-full h-full bg-gray-700 bg-opacity-20 hidden group-hover:flex items-center justify-center z-1 absolute gap-4 inset-0 ">
				<div className="flex gap-1 items-center">
					<HeartIcon className="w-5 h-5" />
					<p className="font-semibold text-lg">{post.likes.length}</p>
				</div>
				<div className="flex gap-1 items-center">
					<ChatBubbleOvalLeftIcon className="w-5 h-5" />
					<p className="font-semibold text-lg">{post.comments?.length}</p>
				</div>
			</div>
			<img
				className="w-full h-full object-center"
				src={post.image}
				alt={post.title}
			/>
		</Link>
	);
};
