import cn from "classnames";
type InputComponentProps = {
  classname?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "classname">;
export const InputComponent = ({
  classname,
  ...props
}: InputComponentProps) => {
  return <input className={cn("border rounded-sm", classname)} {...props} />;
};
