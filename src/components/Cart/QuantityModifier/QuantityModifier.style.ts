import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ModifierContainer = styled.span`
  ${({ theme }) => {
    const { gray } = theme.color;

    return css`
      display: inline-block;
      height: 2.4rem;
      margin-left: 0.5rem;
      vertical-align: middle;
      background-color: ${gray["E5"]};
    `;
  }}
`;

export const ContentArea = styled.span`
  ${({ theme }) => {
    const { white } = theme.color;

    return css`
      display: inline-block;
      width: 2.4rem;
      height: 2.2rem;
      margin: 0.1rem 0;
      text-align: center;
      background-color: ${white};
    `;
  }}
`;

export const ModifiedButton = styled.button`
  width: 2.4rem;
  height: 100%;
  line-height: 2.6rem;
`;
