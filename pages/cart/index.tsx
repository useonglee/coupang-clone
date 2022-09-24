import { useMemo, useState } from "react";
import { GetServerSideProps } from "next";
import nextCookie from "next-cookies";
import {
  CartTable,
  CartTotalPrice,
  CartNoItem,
  Spinner,
} from "@components/Cart";
import { CustomSuspense } from "@components/@shared";
import CartPageLayout from "./layout";
import { useRecoilValue } from "recoil";
import {
  rocketPriceAtom,
  sellerPriceAtom,
} from "@components/Cart/recoil/totalPrice";
import useCartItemList from "@components/Cart/hooks/useCartItemList";

interface ICartPageProps {
  authToken: string;
}

const CartPage = ({ authToken }: ICartPageProps) => {
  const [isUserLogin, setIsUserLogin] = useState<boolean>(!!authToken);

  const { cartItemList } = useCartItemList();

  const rocketTotalPrice = useRecoilValue(rocketPriceAtom);
  const sellerTotalPrice = useRecoilValue(sellerPriceAtom);

  const cartItemTotalPrice = useMemo(() => {
    const totalPrice = rocketTotalPrice + sellerTotalPrice;

    return totalPrice.toLocaleString();
  }, [rocketTotalPrice, sellerTotalPrice]);

  return (
    <CustomSuspense fallback={<Spinner.Beat />}>
      <CartPageLayout>
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
      </CartPageLayout>
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

export default CartPage;
