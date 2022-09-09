import { useEffect } from "react";
import useAuth from "@hooks/useAuth";
import cookies from "js-cookie";

const CartPage = () => {
  const getAuthTokens = useAuth();

  useEffect(() => {
    if (cookies.get("accessToken")) {
      return;
    }

    getAuthTokens({ email: "useong0830@naver.com", password: "1234" });
  }, []);

  return <div>cart</div>;
};

export default CartPage;
