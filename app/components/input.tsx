import cn from "classnames";
type InputComponentProps = {
	className?: string;
	icon?: React.ReactNode;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "className">;
export const InputComponent = ({
	className,
	icon,
	...props
}: InputComponentProps) => {
	return (
		<label
			className={cn(
				{
					"input input-bordered  flex items-center gap-2":
						props.type !== "hidden" && props.type !== "file",
				},
				props.type !== "file" && className
			)}
		>
			{icon}
			<input
				{...props}
				className={cn(
					{
						grow: props.type !== "hidden" && props.type !== "file",
						"file-input file-input-bordered w-full": props.type === "file",
					},
					props.type === "file" && className
				)}
			/>
		</label>
	);
};
