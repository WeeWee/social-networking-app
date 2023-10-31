import {
  type MetaFunction,
  type LoaderFunction,
  type ActionFunction,
  unstable_createMemoryUploadHandler,
  unstable_parseMultipartFormData,
  json,
} from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { Card } from "~/components";
import { getUser, getUserId } from "~/lib/auth.server";
import { addComment, addPost, getPosts } from "~/lib/database.server";
import type { TPost } from "~/types";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
export const loader: LoaderFunction = async ({ request }) => {
  const response = new Response();
  const posts = await getPosts(request, response);
  return posts;
};
export const action: ActionFunction = async ({ request }) => {
  const uploadHandler = unstable_createMemoryUploadHandler();
  const formData = await unstable_parseMultipartFormData(
    request,
    uploadHandler
  );
  const _action = formData.get("_action");
  const response = new Response();
  const currentUser = await getUser(request, response);
  if (_action === "add-post") {
    const image = formData.get("image") as File;
    const title = formData.get("title") as string;
    const userId = await getUserId(request, response);
    await addPost(request, response, image, title, userId!);
    return json(null, { headers: response.headers });
  }
  if (_action === "comment") {
    await addComment(
      request,
      response,
      "test",
      formData.get("post_id") as string,
      null,
      currentUser?.user.id as string
    );
  }
};
export default function Index() {
  const posts = useLoaderData() as TPost[];

  return (
    <div className=" ">
      <Form method="post" encType="multipart/form-data">
        <input name="image" type="file" accept="image/png, image/jpeg" />
        <input name="title" />
        <button>Add Post</button>
      </Form>
      <div className="grid max-w-lg mx-auto">
        {posts &&
          posts.map((post) => {
            if (post?.user)
              return (
                <Link key={post.id} to={`/user/${post?.user[0].username}`}>
                  <Card post={post} />
                </Link>
              );
            else return <></>;
          })}
      </div>
    </div>
  );
}

