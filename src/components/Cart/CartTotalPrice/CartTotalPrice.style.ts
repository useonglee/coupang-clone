import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const CartTotalPriceContainer = styled.div`
  ${({ theme }) => {
    const { gray } = theme.color;

    return css`
      margin-top: 4rem;
      padding: 2rem 1.5rem 1.8rem;
      text-align: center;
      line-height: 1.7rem;
      color: ${gray["55"]};
      font-size: 1.4rem;
      border: 0.4rem solid ${gray["C8"]};
    `;
  }}
`;

export const FinalTotalPrice = styled.strong`
  ${({ theme }) => {
    const { black } = theme.color;

    return css`
      padding: 0 0.4rem;
      color: ${black};
      font: 700 1.7rem tahoma;
    `;
  }}
`;

export const FinalOrderTotalPrice = styled.strong`
  ${({ theme }) => {
    const { emphasis } = theme.color;

    return css`
      padding: 0 0.4rem;
      color: ${emphasis};
      font-size: 2rem;
      font: 700 1.7rem tahoma;
    `;
  }}
`;

export const IconImageCommonStyle = styled.span`
  display: inline-block;
  width: 1.8rem;
  height: 1.8rem;
  margin: 0 1rem;
  vertical-align: -0.4rem;
`;

export const PlusIconImage = styled(IconImageCommonStyle)`
  background: url("https://img1a.coupangcdn.com/image/www/newBuy/img_plus_2.gif")
    no-repeat;
`;

export const EqualIconImage = styled(IconImageCommonStyle)`
  background: url("https://img1a.coupangcdn.com/image/www/newBuy/img_equals_2.gif")
    no-repeat;
`;
