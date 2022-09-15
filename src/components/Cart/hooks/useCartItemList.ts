import { useQuery } from "react-query";
import CartService from "@services/cart.service";
import { ICartItemListData } from "@components/Cart/types/cart.type";
import cookies from "js-cookie";

const useCartItemList = (): ICartItemListData[] => {
  const { data: cartItemListData } = useQuery(
    ["cart-list"],
    () => CartService.fetchCartList(),
    {
      enabled: !!cookies.get("accessToken"),
      select: (data) => {
        const processProductPrice = data.map((product: ICartItemListData) => {
          const { salePrice, maxPoint } = product.product;

          product.product.salePrice = salePrice.toLocaleString();
          product.product.maxPoint = maxPoint.toLocaleString();

          return product;
        });

        return processProductPrice;
      },
    }
  );

  return cartItemListData;
};

export default useCartItemList;
