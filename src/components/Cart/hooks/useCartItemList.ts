import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import CartService from "@services/cart.service";
import { ICartItemListData } from "@components/Cart/types/cart.type";
import queryKey from "../constants/queryKey";
import cookies from "js-cookie";

interface IUseCartItemList {
  cartItemList: ICartItemListData[];
  updateCartItemList: (cartItemList: any) => void;
}

const useCartItemList = (): IUseCartItemList => {
  const queryClient = useQueryClient();
  const [cartItemList, setCartItemList] = useState<ICartItemListData[]>([]);

  const { data = [] } = useQuery(
    [queryKey.cart],
    ({ signal }) => CartService.fetchCartList(signal),
    {
      enabled: !!cookies.get("accessToken"),
      onSuccess: (data) => {
        const processProductPrice = data.map((product: ICartItemListData) => {
          const { salePrice, maxPoint } = product.product;

          product.product.salePrice = salePrice.toLocaleString();
          product.product.maxPoint = maxPoint.toLocaleString();
        });

        return processProductPrice;
      },
    }
  );

  const updateCartItemList = (cartItemList: ICartItemListData[]) => {
    setCartItemList(cartItemList);
    queryClient.setQueryData([queryKey.cart], cartItemList);
  };

  useEffect(() => {
    if (data.length > 0) {
      setCartItemList(data);
    }
  }, [data, cartItemList]);

  return { cartItemList, updateCartItemList };
};

export default useCartItemList;
