import { ReactNode } from "react";
import Head from "next/head";
import styled from "@emotion/styled";

interface ICartPageLayoutProps {
  children: ReactNode;
}

const CartPageLayout = ({ children }: ICartPageLayoutProps) => {
  return (
    <>
      <Head>
        <title>쿠팡! | 장바구니</title>
      </Head>
      <CartPageLayoutStyle>{children}</CartPageLayoutStyle>
    </>
  );
};

export const CartPageLayoutStyle = styled.main`
  width: 89.8rem;
  margin: 0 auto;
`;

export default CartPageLayout;
