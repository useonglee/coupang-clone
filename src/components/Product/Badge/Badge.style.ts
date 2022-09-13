import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const BadgeContainer = styled.div`
  ${({ theme }) => {
    const { black, gray } = theme.color;

    return css`
      display: inline-block;
      height: 2rem;
      margin-top: 1rem;
      padding: 0 0.8rem;
      border: 1px solid ${gray["CC"]};
      border-radius: 10px;
      box-sizing: border-box;

      & > span:nth-of-type(1) {
        display: inline-block;
        margin-top: 0.2rem !important;
      }

      & > span {
        display: inline-block;
        margin-left: 0.4rem;
        vertical-align: top;
        color: ${gray["33"]};
        font-size: 1.2rem;
        line-height: 2rem;
      }
    `;
  }}
`;
