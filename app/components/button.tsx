import cn from "classnames";

export enum ButtonType {
	Primary = "btn-primary",
	Secondary = "btn-secondary",
	Neutral = "btn-neutral",
	Accent = "btn-accent",
	Light = "btn-light",
	Ghost = "btn-ghost",
	Link = "btn-link",
}
type ButtonProps = {
	classname?: string;
	children: React.ReactNode;
	buttonType?: ButtonType;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "classname">;
export function Button({
	classname,
	children,
	buttonType = ButtonType.Primary,
	...props
}: ButtonProps) {
	return (
		<button
			className={cn("btn btn-sm md:btn-md", buttonType, classname)}
			{...props}
		>
			{children}
		</button>
	);
}
