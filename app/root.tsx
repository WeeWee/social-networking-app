import { cssBundleHref } from "@remix-run/css-bundle";
import {
  json,
  type LinksFunction,
  type LoaderFunctionArgs,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import styles from "./tailwind.css";
import { Navbar } from "./components";
import { getUser } from "./lib/auth.server";
import type { TPost, TUser } from "./types";
export const links: LinksFunction = () => [
  ...(cssBundleHref
    ? [{ rel: "stylesheet", href: cssBundleHref }]
    : [{ rel: "stylesheet", href: styles }]),
];
export const loader = async ({ request }: LoaderFunctionArgs) => {
  const response = new Response();
  const data = await getUser(request, response);
  return json(data, { headers: response.headers });
};
export default function App() {
  const loaderData = useLoaderData<{ user: TUser; posts: TPost[] }>();
  return (
    <html lang="en" data-theme="dracula">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className=" md:max-w-5xl mx-auto">
        <Navbar user={loaderData?.user} />
        <main className=" mt-4">
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

