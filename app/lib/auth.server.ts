import { type PostgrestError, type Provider } from "@supabase/supabase-js";
import { getAvatar, getPostsByUserId, supabase } from "./database.server";
import { json, redirect } from "@remix-run/node";
import type { TFollow, TUser } from "~/types";
const getSession = async (request: Request, response: Response) => {
  const session = await supabase(request, response).auth.getSession();
  if (session.error) {
    console.error(session.error);
    return null;
  }
  return session.data.session;
};
const isAuthenticated = async (request: Request, response: Response) => {
  const session = await getSession(request, response);
  if (!session?.user) return redirect("/login", { headers: response.headers });
  return json(session.user, { headers: response.headers });
};
const getUserById = async (
  request: Request,
  response: Response,
  id: string
) => {
  const { data, error }: { data: TUser | null; error: PostgrestError | null } =
    await supabase(request, response)
      .from("users")
      .select(`*`)
      .eq("id", id)
      .single();

  if (error) {
    console.error(error);
    return null;
  }
  const followersData = await supabase(request, response)
    .from("followers")
    .select(`id, user:users!followers_follower_id_fkey(*)`)
    .eq("following_id", id);
  const followingData = await supabase(request, response)
    .from("followers")
    .select(`id, user:users!followers_following_id_fkey(*)`)
    .eq("follower_id", id);
  if (followersData.error) {
    console.error(followersData.error);
    return null;
  }
  if (followingData.error) {
    console.error(followingData.error);
    return null;
  }
  const avatar = getAvatar(request, response, data!);
  const posts = await getPostsByUserId(request, response, data?.id as string);
  return {
    user: {
      ...data,
      following: followingData.data as TFollow[],
      followers: followersData.data as TFollow[],
      avatar: avatar.data.publicUrl,
    },
    posts,
  };
};
const getUser = async (request: Request, response: Response) => {
  const { data, error } = await supabase(request, response).auth.getSession();
  if (error) {
    console.error(error);
    return null;
  }
  return await getUserById(request, response, data.session?.user.id as string);
};
const getUserId = async (request: Request, response: Response) => {
  const { data, error } = await supabase(request, response).auth.getSession();
  if (error) {
    console.error(error);
    return null;
  }
  return data.session?.user.id;
};
const getUserByUsername = async (
  request: Request,
  response: Response,
  username: string
) => {
  const { data, error }: { data: TUser | null; error: PostgrestError | null } =
    await supabase(request, response)
      .from("users")
      .select(`*`)
      .eq("username", username)
      .single();
  if (error) {
    console.error("user error ", error);
    return null;
  }
  const followersData = await supabase(request, response)
    .from("followers")
    .select(`user:users!followers_follower_id_fkey(*)`)
    .eq("following_id", data?.id);

  const followingData = await supabase(request, response)
    .from("followers")
    .select(`user:users!followers_following_id_fkey(*)`)
    .eq("follower_id", data?.id);
  if (followersData.error) {
    console.error(followersData.error);
    return null;
  }
  if (followingData.error) {
    console.error(followingData.error);
    return null;
  }
  const avatar = getAvatar(request, response, data!);
  const posts = await getPostsByUserId(request, response, data?.id as string);
  return {
    user: {
      ...data,
      following: followingData.data,
      followers: followersData.data,
      avatar: avatar.data.publicUrl,
    },
    posts,
  };
};
const signUp = async (
  request: Request,
  response: Response,
  email: string,
  password: string,
  phone: string,
  username: string,
  first_name: string,
  last_name: string,
  image: File
) => {
  const uploadedAvatar = await supabase(request, response)
    .storage.from("avatars")
    .upload(image.name, image);
  if (uploadedAvatar.error) {
    console.error("upload avatar ", uploadedAvatar.error);
    return null;
  }
  const { data, error } = await supabase(request, response).auth.signUp({
    email,
    password,
    phone,
    options: {
      data: {
        username,
        first_name,
        last_name,
        avatar_bucket_id: "avatars",
        avatar_name: uploadedAvatar.data.path,
      },
      emailRedirectTo:
        (process.env.NEXT_PUBLIC_VERCEL_URL ?? "http://localhost:3000/") +
        "login?email_confirmed=true",
    },
  });
  if (error) {
    console.error("signup error ", error);
    return null;
  }
  return json(
    { user: data.user, session: data.session },
    { headers: response.headers }
  );
};
const Logout = async (request: Request, response: Response) => {
  await supabase(request, response).auth.signOut();
  return redirect("/", { headers: response.headers });
};
const LoginWPassword = async (
  request: Request,
  response: Response,
  email: string,
  password: string
) => {
  const { data, error } = await supabase(
    request,
    response
  ).auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    console.error(error);
    return json(error.message);
  }
  const userData = await getUserById(request, response, data.user.id);
  return redirect(`/user/${userData?.user.id}`, { headers: response.headers });
};
const LoginOAuth = async (
  request: Request,
  response: Response,
  provider: Provider
) => {
  const { error } = await supabase(request, response).auth.signInWithOAuth({
    provider: provider,
    options: { redirectTo: "http://localhost:3000/auth/callback" },
  });
  if (error) {
    console.error(error);
    return json(error);
  }
  return null;
};
export {
  signUp,
  getSession,
  LoginWPassword,
  LoginOAuth,
  isAuthenticated,
  Logout,
  getUserByUsername,
  getUser,
  getUserId,
  getUserById
};
