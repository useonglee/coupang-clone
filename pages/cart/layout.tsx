import { ReactNode } from "react";
import Head from "next/head";
import { Spinner } from "@components/Cart";
import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { cartSpinnerAtom } from "@components/Cart/recoil/spinner";

interface ICartPageLayoutProps {
  children: ReactNode;
}

const CartPageLayout = ({ children }: ICartPageLayoutProps) => {
  const cartSpinner = useRecoilValue(cartSpinnerAtom);

  return (
    <>
      <Head>
        <title>쿠팡! | 장바구니</title>
      </Head>
      <CartPageLayoutStyle>{children}</CartPageLayoutStyle>
      {cartSpinner && <Spinner.Clip />}
    </>
  );
};

export const CartPageLayoutStyle = styled.main`
  width: 89.8rem;
  margin: 0 auto;
`;

export default CartPageLayout;
