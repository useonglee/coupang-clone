import { useMemo, useState } from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import nextCookie from "next-cookies";
import {
  CartTable,
  CartTotalPrice,
  CartNoItem,
  Spinner,
} from "@components/Cart";
import { Button, CustomSuspense, Layout } from "@components/@shared";
import useCartItemList from "@components/Cart/hooks/useCartItemList";
import useUser from "@hooks/useUser";
import { useRecoilValue } from "recoil";
import { rocketPriceAtom, sellerPriceAtom } from "@recoil/totalPrice";
import styled from "@emotion/styled";

interface ICartPageProps {
  authToken: string;
}

const CartPage = ({ authToken }: ICartPageProps) => {
  const [isUserLogin, setIsUserLogin] = useState<boolean>(!!authToken);

  const { cartItemList } = useCartItemList();
  const userInfo = useUser();

  const rocketTotalPrice = useRecoilValue(rocketPriceAtom);
  const sellerTotalPrice = useRecoilValue(sellerPriceAtom);

  const cartItemTotalPrice = useMemo(() => {
    const totalPrice = rocketTotalPrice + sellerTotalPrice;

    return totalPrice.toLocaleString();
  }, [rocketTotalPrice, sellerTotalPrice]);

  return (
    <CustomSuspense fallback={<Spinner.Beat />}>
      <PageLayout title="쿠팡! | 장바구니">
        <section>
          <CartTable cartItemList={cartItemList} />
        </section>
        {cartItemList.length > 0 ? (
          <CartTotalPrice totalPrice={cartItemTotalPrice} />
        ) : (
          <CartNoItem
            isUserLogin={isUserLogin}
            setIsUserLogin={setIsUserLogin}
          />
        )}
        <GoAnotherPageButtonArea>
          <Link href="https://www.coupang.com/">
            <a>
              <Button variant="outlined" size="medium" shape="round">
                계속 쇼핑하기
              </Button>
            </a>
          </Link>
          <Link href={`cart/checkout/${userInfo?.id}`}>
            <a>
              <Button variant="primary" size="medium" shape="round">
                구매하기
              </Button>
            </a>
          </Link>
        </GoAnotherPageButtonArea>
      </PageLayout>
    </CustomSuspense>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { accessToken } = nextCookie(context);
  const authToken = JSON.parse(JSON.stringify(accessToken || ""));

  return {
    props: { authToken },
  };
};

const PageLayout = styled(Layout)`
  width: 89.8rem;
  margin: 0 auto;
`;

const GoAnotherPageButtonArea = styled.div`
  margin-top: 5rem;
  text-align: center;

  & > a:nth-of-type(1) {
    margin-right: 2rem;
  }
`;

export default CartPage;
