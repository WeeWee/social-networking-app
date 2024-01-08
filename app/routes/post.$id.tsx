import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Card } from "~/components";
import { getPostById } from "~/lib/database.server";
import type { TPost } from "~/types";
export async function loader({ request, params }: LoaderFunctionArgs) {
  const { id } = params;
  const response = new Response();
  const post = await getPostById(request, response, id as string);

  return json({ post }, { headers: response.headers });
}
export default function Post() {
  const { post } = useLoaderData() as { post: TPost };
  return (
    <div className="mx-auto w-max h-max">
      <Card post={post} />
    </div>
  );
}
