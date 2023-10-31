export interface TPostData {
  id: string;
  title: string;
  created_at?: string;
  image_bucket_id: string;
  image_name: string;
  user?: TUser[];
  comments?: TComments[];
}
export interface TPost {
  id: string;
  title: string;
  image: string;
  user?: TUser[];
  comments: TComments[] | undefined;
}
export interface TComments {
  comment: TComment;
  parent_comment: TComment | null;
  user: TUser;
}
export interface TComment {
  id: string;
  text: string;
  created_at: string;
}
export interface TUser {
  id?: string;
  username?: string;
  email?: string;
  created_at?: string;
  first_name?: string;
  last_name?: string;
  avatar?: string;
  avatar_bucket_id?: string;
  avatar_name?: string;
  followers?: TFollow[];
  following?: TFollow[];
}
export interface TFollow {
  id: string;
  user: TUser;
}
