import {
  ChatBubbleOvalLeftIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import type { TPost } from "~/types";
import { ImageComponent } from ".";
import { Form } from "@remix-run/react";
import { useState } from "react";
export function Card({ post }: { post: TPost }) {
  const [showComments, setShowComments] = useState(false);
  return (
    <div className="card lg:card-side max-w-lg  lg:max-w-2xl lg:max-h-[600px] bg-base-100 shadow-xl card-compact ">
      <ImageComponent
        src={post.image}
        className="w-full h-full max-w-[256px] lg:max-w-[336px]"
        alt={post.title}
      />
      <div className="card-body">
        <section className="card-title flex gap-2 my-1 text-neutral-content">
          <HeartIcon className="w-8 h-8" />
          <Form method="post">
            <button name="_action" value="comment">
              <input type="hidden" name="post_id" value={post.id} />
              <ChatBubbleOvalLeftIcon className="w-8 h-8" />
            </button>
          </Form>
          <PaperAirplaneIcon className="w-8 h-8" />
        </section>

        <p>
          <span className="text-lg font-semibold mr-1">
            {post?.user && post.user[0].username}
          </span>
          {post.title}
        </p>
        <div>
          <button onClick={() => setShowComments(true)}>
            Show Comments...
          </button>
          {showComments &&
            post?.comments?.map((comment) => (
              <div key={comment.comment.id} className="rounded-md border">
                <div className="p-1">
                  <p>{comment.comment.text}</p>
                  <p>{comment.user.username}</p>
                  <p>{comment.comment.created_at}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
