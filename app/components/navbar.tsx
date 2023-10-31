import { Form, Link } from "@remix-run/react";
import classNames from "classnames";

import type { TUser } from "~/types";

export function Navbar({ user }: { user: TUser }) {
  return (
    <nav className="navbar rounded-md bg-secondary text-secondary-content">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Home
        </Link>
      </div>
      <div className="flex-none gap-2">
        {!user && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
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
                  <Form method="post" action="/logout">
                    <button>Logout</button>
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
