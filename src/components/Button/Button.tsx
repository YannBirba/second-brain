import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { buttonClass } from "./Button.css";

export type ButtonPropsOmit = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "className" | "type" | "name" | "aria-label" | "title" | "disabled"
>;

export type ButtonProps = PropsWithChildren<{
  variant: keyof typeof buttonClass;
  type: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  name: string;
  disabled?: boolean;
}> &
  ButtonPropsOmit;

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  type = "button",
  name,
  disabled,
  ...props
}) => {
  return (
    <button
      type={type}
      {...props}
      className={buttonClass[variant]}
      name={name}
      aria-label={name}
      title={name}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
};
