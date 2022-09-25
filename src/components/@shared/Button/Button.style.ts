import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { IButtonProps } from "./Button";

export const Button = styled.button<IButtonProps>`
  ${({ theme, variant, shape, size }) => {
    return css`
      ${generateVariant(variant, theme)};
      ${generateShape(shape)};
      ${generateSize(size)};
    `;
  }}
`;

const generateVariant = (variant: string, theme: Theme) => {
  const { primary, black, white, gray } = theme.color;

  switch (variant) {
    case "primary":
      return css`
        color: ${white};
        background-color: ${primary};
      `;
    case "outlined":
      return css`
        color: ${primary};
        border: 1px solid ${primary};
      `;
    default:
      return css`
        color: ${black};
        border: 1px solid ${gray["CC"]};
        background-color: ${white};
      `;
  }
};

const generateShape = (shape?: string) => {
  switch (shape) {
    case "round":
      return css`
        border-radius: 0.4rem;
      `;
    case "circle":
      return css`
        border-radius: 50%;
      `;
  }
};

const generateSize = (size?: string) => {
  switch (size) {
    case "x-small":
      return css`
        height: 2.35rem;
      `;
    case "small":
      return css`
        height: 2.65rem;
      `;
    case "medium":
      return css`
        width: 22rem;
        height: 6.3rem;
        font-size: 2.2rem;
        font-weight: 700;
      `;
    case "large":
      return css`
        width: 26rem;
        height: 6rem;
        font-size: 2.2rem;
        font-weight: 700;
      `;
    default:
      return;
  }
};
