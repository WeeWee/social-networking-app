import { Link } from "@remix-run/react";

export function Footer() {
	return (
		<footer className="footer footer-center p-10 rounded">
			<nav className="grid grid-flow-col gap-4">
				<Link to="https://www.adamkindberg.com/" className="link link-hover">
					Portfolio
				</Link>
				<Link
					to="https://adam-kindberg-shop-shopify.vercel.app"
					className="link link-hover"
				>
					Shopify project
				</Link>
			</nav>
			<nav>
				<div className="grid grid-flow-col gap-4">
					<Link to="https://www.linkedin.com/in/adam-kindberg/">
						<svg
							className="fill-white"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="inherit"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.762 24 24 21.761 24 19V5C24 2.239 21.762 0 19 0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 3.994 5.534 3.204 6.5 3.204C7.466 3.204 8.25 3.994 8.25 4.968C8.25 5.942 7.467 6.732 6.5 6.732ZM20 19H17V13.396C17 10.028 13 10.283 13 13.396V19H10V8H13V9.765C14.396 7.179 20 6.988 20 12.241V19Z"
								fill="inherit"
							/>
						</svg>
					</Link>
					<Link to="https://github.com/WeeWee">
						<svg
							className="fill-white"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="inherit"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 0C5.374 0 0 5.50883 0 12.3034C0 17.7394 3.438 22.3511 8.207 23.9782C8.806 24.092 9 23.7106 9 23.3866V21.0962C5.662 21.8405 4.967 19.6444 4.967 19.6444C4.421 18.2223 3.634 17.844 3.634 17.844C2.545 17.0801 3.717 17.0965 3.717 17.0965C4.922 17.1827 5.556 18.3648 5.556 18.3648C6.626 20.2452 8.363 19.7018 9.048 19.387C9.155 18.5924 9.466 18.049 9.81 17.7425C7.145 17.4298 4.343 16.3748 4.343 11.6615C4.343 10.3174 4.812 9.22035 5.579 8.35911C5.455 8.04845 5.044 6.79658 5.696 5.10282C5.696 5.10282 6.704 4.77268 8.997 6.36391C9.954 6.09119 10.98 5.95483 12 5.9497C13.02 5.95483 14.047 6.09119 15.006 6.36391C17.297 4.77268 18.303 5.10282 18.303 5.10282C18.956 6.79761 18.545 8.04948 18.421 8.35911C19.191 9.22035 19.656 10.3184 19.656 11.6615C19.656 16.3871 16.849 17.4277 14.177 17.7322C14.607 18.1136 15 18.8621 15 20.0104V23.3866C15 23.7137 15.192 24.0982 15.801 23.9772C20.566 22.348 24 17.7374 24 12.3034C24 5.50883 18.627 0 12 0Z"
								fill="inherit"
							/>
						</svg>
					</Link>
				</div>
			</nav>
			<aside>
				<p>@Connect made by Adam Kindberg</p>
			</aside>
		</footer>
	);
}
