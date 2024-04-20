import { redirect } from "@remix-run/node";
import { createServerClient } from "@supabase/auth-helpers-remix";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { supabase } from "~/lib/database.server";
import { getUser } from "~/lib/auth.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
	const response = new Response();
	const url = new URL(request.url);
	const code = url.searchParams.get("code");

	if (code) {
		await supabase(request, response).auth.exchangeCodeForSession(code);
		const data = await getUser(request, response);
		return redirect(`/user/${data?.user.username}`, {
			headers: response.headers,
		});
	}
};
