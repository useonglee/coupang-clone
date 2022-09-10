import CartService from "@services/cart.service";
import { useQuery } from "react-query";
import cookies from "js-cookie";

const useCartList = () => {
  const { data: cartListData } = useQuery(
    ["cart-list", "test"],
    () => CartService.fetchCartList(),
    {
      enabled: !!cookies.get("accessToken"),
    }
  );

  return cartListData;
};

export default useCartList;
