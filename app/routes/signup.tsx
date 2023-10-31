import { useActionData } from "@remix-run/react";
import {
  unstable_createMemoryUploadHandler,
  unstable_parseMultipartFormData,
  type ActionFunctionArgs,
} from "@remix-run/node";
import { signUp } from "~/lib/auth.server";
import { FormComponent, InputComponent } from "~/components";
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
        <InputComponent name="username" placeholder="username" />
        <InputComponent name="firstname" placeholder="firstname" />
        <InputComponent name="lastname" placeholder="lastname" />
        <InputComponent name="email" type="email" placeholder="email" />
        <InputComponent name="phone" type="tel" placeholder="phone" />
        <InputComponent
          name="password"
          type="password"
          placeholder="password"
        />
        <button>Signup</button>
      </FormComponent>
      {actionData?.user?.confirmation_sent_at && (
        <p>Email Confirmation sent to {actionData?.user.email}</p>
      )}
    </div>
  );
}
