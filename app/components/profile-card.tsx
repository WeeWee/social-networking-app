import type { TPost } from "~/types";
import { ImageComponent } from ".";
import { HeartIcon } from "@heroicons/react/24/solid";

export const ProfileCard = ({ post }: { post: TPost }) => {
  return (
    <div className="card bg-base-100 shadow-xl image-full">
      <figure>
        <ImageComponent src={post.image} alt={post.title} />
      </figure>
      <div className="card-body">
        <div>
          <HeartIcon className="w-10 h-10" />
          <p>295 k</p>
        </div>
      </div>
    </div>
  );
};
