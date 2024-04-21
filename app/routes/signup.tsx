import { useActionData } from "@remix-run/react";
import {
	MetaFunction,
	unstable_createMemoryUploadHandler,
	unstable_parseMultipartFormData,
	type ActionFunctionArgs,
} from "@remix-run/node";
import { signUp } from "~/lib/auth.server";
import {
	Button,
	ButtonType,
	FormComponent,
	InputComponent,
} from "~/components";
export const meta: MetaFunction = () => {
	return [
		{
			title: "@Connect | Signup here",
		},
		{
			name: "description",
			content: "Welcome to @Connect, a social media platform built for you.",
		},
	];
};
export async function action({ request }: ActionFunctionArgs) {
	const uploadHandler = unstable_createMemoryUploadHandler();
	const formData = await unstable_parseMultipartFormData(
		request,
		uploadHandler
	);
	const response = new Response();
	return await signUp(
		request,
		response,
		formData.get("email") as string,
		formData.get("password") as string,
		formData.get("phone") as string,
		formData.get("username") as string,
		formData.get("firstname") as string,
		formData.get("lastname") as string,
		formData.get("image") as File
	);
}
export default function Signup() {
	const actionData = useActionData<typeof action>();

	return (
		<div>
			<FormComponent method="post" encType="multipart/form-data">
				<InputComponent
					name="image"
					type="file"
					accept="image/png, image/jpeg"
				/>
				<InputComponent
					icon={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							className="w-4 h-4 opacity-70"
						>
							<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
						</svg>
					}
					name="username"
					placeholder="Username"
				/>
				<InputComponent name="firstname" placeholder="First name" />
				<InputComponent name="lastname" placeholder="Last name" />
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
					name="email"
					type="email"
					placeholder="Email"
				/>
				<InputComponent
					icon={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-4 h-4 opacity-70"
						>
							<path
								fillRule="evenodd"
								d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
								clipRule="evenodd"
							/>
						</svg>
					}
					name="phone"
					type="tel"
					placeholder="Phone"
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
					name="password"
					type="password"
					placeholder="Password"
				/>
				<Button buttonType={ButtonType.Accent}>Signup</Button>
				{actionData?.user?.confirmation_sent_at && (
					<p>Email Confirmation sent to {actionData?.user.email}</p>
				)}
			</FormComponent>
		</div>
	);
}
