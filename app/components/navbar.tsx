import { Form, Link, useNavigation } from "@remix-run/react";
import classNames from "classnames";

import type { TUser } from "~/types";
import { InputComponent } from "./input";
import { Button, ButtonType } from "./button";
import { useEffect, useRef } from "react";

export function Navbar({ user }: { user: TUser }) {
	const transition = useNavigation();
	const addingPost =
		transition.state === "submitting" &&
		transition?.formData?.get("_action") === "addPost";
	const addPostRef = useRef<HTMLFormElement | null>(null);
	useEffect(() => {
		addPostRef.current?.reset();
	}, [addingPost]);
	return (
		<nav className="navbar rounded-md bg-secondary ">
			<div className="flex-1">
				<Link to="/" className="btn btn-ghost normal-case text-xl">
					@Connect
				</Link>
			</div>
			<div className="flex-none gap-2">
				{!user && (
					<>
						<Link className="btn btn-ghost" to="/login">
							Login
						</Link>
						<Link className="btn btn-ghost" to="/signup">
							Signup
						</Link>
					</>
				)}
				{user && (
					<Form
						ref={addPostRef}
						className="flex items-center gap-2"
						method="post"
						action="/?index"
						encType="multipart/form-data"
					>
						<InputComponent
							className="file-input-sm max-w-52"
							name="image"
							type="file"
							accept="image/png, image/jpeg"
						/>
						<InputComponent
							className="input-sm"
							type="text"
							name="title"
							placeholder="Title"
						/>
						<Button
							name="_action"
							value="addPost"
							buttonType={ButtonType.Ghost}
						>
							Add Post
						</Button>
					</Form>
				)}
				<div className="dropdown dropdown-end">
					{user && (
						<>
							<label
								tabIndex={0}
								className={classNames(
									{ "btn btn-ghost btn-circle avatar": true },
									{ "placeholder ": !user.avatar_bucket_id }
								)}
							>
								{user.avatar_bucket_id ? (
									<div className="w-10  rounded-full">
										<img src={user?.avatar} loading="lazy" alt="Account" />
									</div>
								) : (
									<div className="bg-neutral-focus text-neutral-content rounded-full w-10 ">
										<span className="text-lg">{user?.username?.charAt(0)}</span>
									</div>
								)}
							</label>
							<ul
								tabIndex={0}
								className={
									"mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-secondary text-secondary-content rounded-box w-52"
								}
							>
								<li>
									<Link to={`/user/${user.username}`}>Profile</Link>
								</li>
								<li>
									<Link to={`/settings`}>Settings</Link>
								</li>
								<li>
									<Form method="post" className="flex" action="/logout">
										<button className="w-full text-start">Logout</button>
									</Form>
								</li>
							</ul>
						</>
					)}
				</div>
			</div>
		</nav>
	);
}
