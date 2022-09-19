import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const CartNoItemContainer = styled.div`
  ${({ theme }) => {
    const { gray } = theme.color;

    return css`
      padding: 6rem 0;
      text-align: center;
      color: ${gray["88"]};

      & > p {
        color: ${gray["55"]};
        font-size: 1.4rem;
        font-weight: 700;
      }
    `;
  }}
`;

export const CartItemResetButton = styled.button`
  ${({ theme }) => {
    const { primary } = theme.color;

    return css`
      width: 10rem;
      height: 2.3rem;
      margin-top: 1rem;
      color: ${primary};
      border: 1px solid ${primary};
      border-radius: 0.2rem;
    `;
  }}
`;

export const TodayProduct = styled.div`
  height: 18.5rem;
  background: url("https://img1a.coupangcdn.com/image/static/product/cart/img_nonebasket4.jpg");

  & > a {
    cursor: pointer;
    position: relative;
    top: 9.2rem;
    display: block;
    width: 22.7rem;
    height: 5.4rem;
    margin: 0 auto;
  }
`;

export const CartLoginArea = styled.div`
  ${({ theme }) => {
    const { black } = theme.color;

    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1.2rem;
      color: ${black};
      font-size: 1.2rem;
      line-height: 2.3rem;
    `;
  }}
`;

export const CartPageLoginButton = styled.button`
  width: 8rem;
  height: 2.3rem;
  margin-left: 0.5rem;
  background: url("https://img1a.coupangcdn.com/image/static/product/cart/btn_cart_login.gif");
`;
