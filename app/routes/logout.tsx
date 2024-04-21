import type { ActionFunctionArgs } from "@remix-run/node";
import { Logout } from "~/lib/auth.server";

export const action = async ({ request }: ActionFunctionArgs) => {
	const response = new Response();
	return await Logout(request, response);
};

export default function LogoutRoute() {
	return <div></div>;
}
