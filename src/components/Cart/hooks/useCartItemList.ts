import { useQuery } from "react-query";
import CartService from "@services/cart.service";
import { ICartItemListData } from "@components/Cart/types/cart.type";
import cookies from "js-cookie";

const useCartItemList = (): ICartItemListData[] => {
  const { data: cartItemListData } = useQuery(
    ["cart-list", "test"],
    () => CartService.fetchCartList(),
    {
      enabled: !!cookies.get("accessToken"),
    }
  );

  return cartItemListData;
};

export default useCartItemList;
