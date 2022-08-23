import { css } from "@emotion/react";
import styled from "@emotion/styled";
import theme from "@styles/theme";

export const DeliveryDateStyle = styled.p<{ isAssured?: boolean }>`
  ${({ isAssured }) => {
    const { secondary, black } = theme.color;

    return css`
      padding-top: 0.3rem;
      color: ${isAssured ? secondary : black};
      font-size: 1.4rem;
    `;
  }}
`;
