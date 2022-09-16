import { useMemo } from "react";
import { ICartItemListData } from "../types/cart.type";

const useBundlePrice = (cartItemList: ICartItemListData[]): number => {
  const INIT_PRICE = 0;

  const cartItemTotalPrice = useMemo(() => {
    const totalPrice = cartItemList
      .map(({ product, quantity }) => {
        product.wowPrice = product.wowPrice * quantity;

        return product.wowPrice;
      })
      .reduce((acc, productPrice) => acc + productPrice, INIT_PRICE);

    return totalPrice;
  }, [cartItemList]);

  return cartItemTotalPrice;
};

export default useBundlePrice;
