import { useEffect, useMemo } from "react";
import { CartTable, CartTotalPrice } from "@components/Cart";
import CartPageLayout from "./layout";
import useAuth from "@hooks/useAuth";
import cookies from "js-cookie";
import { useRecoilValue } from "recoil";
import {
  rocketPriceAtom,
  sellerPriceAtom,
} from "@components/Cart/recoil/totalPrice";

const CartPage = () => {
  const getAuthTokens = useAuth();

  const rocketTotalPrice = useRecoilValue(rocketPriceAtom);
  const sellerTotalPrice = useRecoilValue(sellerPriceAtom);

  const cartItemTotalPrice = useMemo(() => {
    const totalPrice = rocketTotalPrice + sellerTotalPrice;

    return totalPrice.toLocaleString();
  }, [rocketTotalPrice, sellerTotalPrice]);

  useEffect(() => {
    if (cookies.get("accessToken")) {
      return;
    }

    getAuthTokens({ email: "useong0830@naver.com", password: "1234" });
  }, []);

  return (
    <CartPageLayout>
      <section>
        <CartTable />
      </section>
      {(rocketTotalPrice !== 0 || sellerTotalPrice !== 0) && (
        <CartTotalPrice totalPrice={cartItemTotalPrice} />
      )}
    </CartPageLayout>
  );
};

export default CartPage;
