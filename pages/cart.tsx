import { useEffect } from "react";
import useAuth from "@hooks/useAuth";
import cookies from "js-cookie";
import CartList from "@components/Cart/CartList/CartList";

const CartPage = () => {
  const getAuthTokens = useAuth();

  useEffect(() => {
    if (cookies.get("accessToken")) {
      return;
    }

    getAuthTokens({ email: "useong0830@naver.com", password: "1234" });
  }, []);

  return <CartList />;
};

export default CartPage;
