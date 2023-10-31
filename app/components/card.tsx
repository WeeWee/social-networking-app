import {
  ChatBubbleOvalLeftIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import type { TPost } from "~/types";
import { ImageComponent } from ".";
import { Form } from "@remix-run/react";
import { useState } from "react";
export function Card({
  post,

  profilePage,
}: {
  post: TPost;

  profilePage?: boolean;
}) {
  const [showComments, setShowComments] = useState(false);
  return (
    <div className=" aspect-[4/5] max-w-sm rounded-sm border text-base-content  border-neutral  ">
      <ImageComponent
        src={post.image}
        className="w-full h-full"
        alt={post.title}
      />
      <div className="mx-2">
        <section className="flex gap-2 my-1 text-neutral-content">
          <HeartIcon className="w-8 h-8" />
          <Form method="post">
            <button name="_action" value="comment">
              <input type="hidden" name="post_id" value={post.id} />
              <ChatBubbleOvalLeftIcon className="w-8 h-8" />
            </button>
          </Form>
          <PaperAirplaneIcon className="w-8 h-8" />
        </section>

        {!profilePage && (
          <p className="text-lg font-semibold">
            {post?.user && post.user[0].username}
          </p>
        )}
        <p>{post.title}</p>
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
