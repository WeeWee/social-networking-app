import type { TPost } from "~/types";
import { ImageComponent } from ".";
import { ChatBubbleOvalLeftIcon, HeartIcon } from "@heroicons/react/24/solid";
import { Link } from "@remix-run/react";

export const ProfileCard = ({ post }: { post: TPost }) => {
  return (
    <Link
      to={`/post/${post.id}`}
      className="card bg-base-100 group shadow-xl relative rounded-box overflow-hidden"
    >
      <figure className="group-hover:opacity-60">
        <ImageComponent src={post.image} alt={post.title} />
      </figure>
      <div className="hidden group-hover:flex gap-8 justify-center items-center absolute inset-0">
        <div className="flex flex-col justify-center items-center text-center">
          <HeartIcon className="w-10 h-10" />
          <p>295 k</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <ChatBubbleOvalLeftIcon className="w-10 h-10" />
          <p>1 k</p>
        </div>
      </div>
    </Link>
  );
};
