import { css } from "@emotion/react";
import styled from "@emotion/styled";
<<<<<<< HEAD

export const DeliveryDateStyle = styled.p<{ isAssured?: boolean }>`
  ${({ theme, isAssured }) => {
    const { secondary, black } = theme.color;

    return css`
      color: ${isAssured ? secondary : black};
      line-height: 1.5rem;
      letter-spacing: -0.5px;
      font-size: 1.3rem;
    `;
  }}
`;

export const DeliveryAssuredText = styled.span`
  ${({ theme }) => {
    const { gray } = theme.color;

    return css`
      margin-left: 0.5rem;
      color: ${gray["88"]};
      letter-spacing: normal;
      font-size: 1.2rem;
=======
import theme from "@styles/theme";

export const DeliveryDateStyle = styled.p<{ isAssured?: boolean }>`
  ${({ isAssured }) => {
    const { secondary, black } = theme.color;

    return css`
      padding-top: 0.3rem;
      color: ${isAssured ? secondary : black};
      font-size: 1.4rem;
>>>>>>> 3464d01 (#2 feat: 상품 배송 도착 UI 컴포넌트 구현)
    `;
  }}
`;
