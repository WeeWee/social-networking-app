import { Form, type FormProps } from "@remix-run/react";
import React from "react";
type FormComponentProps = {
  children: React.ReactNode;
} & Omit<FormProps & React.RefAttributes<HTMLFormElement>, "classname">;
export const FormComponent = ({ children, ...props }: FormComponentProps) => {
  return (
    <Form className="flex flex-col max-w-sm mx-auto gap-2" {...props}>
      {children}
    </Form>
  );
};
