import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import {
	Button,
	ButtonType,
	FormComponent,
	InputComponent,
} from "~/components";
import { LoginOAuth, LoginWPassword } from "~/lib/auth.server";
export async function action({ request }: ActionFunctionArgs) {
	const formData = await request.formData();
	const _action = formData.get("_action");
	const response = new Response();

	if (_action === "email") {
		console.log("email action");
		return await LoginWPassword(
			request,
			response,
			formData.get("email") as string,
			formData.get("password") as string
		);
	}
	if (_action === "google") {
		console.log("google action");
		return await LoginOAuth(request, response, "google");
	}
}
export async function loader({ request }: LoaderFunctionArgs) {
	const url = new URL(request.url);
	const email_confirmed = url.searchParams.get("email_confirmed");

	if (email_confirmed) return { message: "Email Confirmed, you can now login" };
	return null;
}
export default function Login() {
	const error = useActionData<typeof action>();
	const email_confirmed = useLoaderData<typeof loader>();
	return (
		<div>
			<FormComponent method="post">
				{email_confirmed && (
					<p className="mx-auto font-bold">{email_confirmed.message}</p>
				)}
				<InputComponent type="hidden" value="email" name="_action" />
				<InputComponent
					icon={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							className="w-4 h-4 opacity-70"
						>
							<path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
							<path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
						</svg>
					}
					placeholder="email"
					name="email"
					type="email"
				/>
				<InputComponent
					icon={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							className="w-4 h-4 opacity-70"
						>
							<path
								fillRule="evenodd"
								d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
								clipRule="evenodd"
							/>
						</svg>
					}
					placeholder="password"
					name="password"
					type="password"
				/>

				<Button buttonType={ButtonType.Accent}>Login</Button>
				{error ? <p className="mx-auto">{error.toString()}</p> : <></>}
			</FormComponent>

			<FormComponent method="post">
				<InputComponent type="hidden" value="google" name="_action" />
				<Button buttonType={ButtonType.Ghost}>Login with Google</Button>
			</FormComponent>
		</div>
	);
}
