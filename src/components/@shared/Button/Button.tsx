import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import * as Style from "./Button.style";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "default" | "primary" | "outlined";
  shape?: "round" | "circle";
  size?: "small" | "medium" | "large";
}

const Button = (props: PropsWithChildren<IButtonProps>) => {
  const { children, ...rest } = props;

  return <Style.Button {...rest}>{children}</Style.Button>;
};

Button.defaultProps = {
  type: "button",
  variant: "default",
};

export default Button;
