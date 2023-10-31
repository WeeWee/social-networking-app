import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import { FormComponent, InputComponent } from "~/components";
import { LoginOAuth, LoginWPassword } from "~/lib/auth.server";
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const _action = formData.get("_action");
  const response = new Response();

  if (_action === "email") {
    return await LoginWPassword(
      request,
      response,
      formData.get("email") as string,
      formData.get("password") as string
    );
  }
  if (_action === "google") {
    return await LoginOAuth(request, response, "google");
  }
}
export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const email_confirmed = url.searchParams.get("email_confirmed");

  if (email_confirmed) return { message: "Email Confirmed!" };
  return null;
}
export default function Login() {
  const error = useActionData<typeof action>();
  const email_confirmed = useLoaderData<typeof loader>();
  return (
    <div>
      {email_confirmed ? <p>{email_confirmed.message}</p> : <></>}
      <FormComponent method="post">
        <InputComponent type="hidden" value="email" name="_action" />
        <InputComponent placeholder="email" name="email" type="email" />
        <InputComponent
          placeholder="password"
          name="password"
          type="password"
        />
        <button>Login</button>
        {error ? <p>{error.toString()}</p> : <></>}
      </FormComponent>
      <FormComponent method="post">
        <InputComponent type="hidden" value="google" name="_action" />
        <button>Login w Google</button>
      </FormComponent>
    </div>
  );
}
