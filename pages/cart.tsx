import { useEffect } from "react";
import { CartTable } from "@components/Cart";
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

  return (
    <div>
      <CartTable />
    </div>
  );
};

export default CartPage;
