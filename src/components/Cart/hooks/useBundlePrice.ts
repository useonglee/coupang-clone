import { useMemo } from "react";
import { ICartItemListData } from "../types/cart.type";

const useBundlePrice = (cartItemList: ICartItemListData[]): string => {
  const INIT_PRICE = 0;

  const cartItemTotalPrice = useMemo(() => {
    const totalPrice = cartItemList
      .map(({ product, quantity }) => {
        product.wowPrice = product.wowPrice * quantity;

        return product.wowPrice;
      })
      .reduce((total, itemTotalPrice) => total + itemTotalPrice, INIT_PRICE);

    return totalPrice.toLocaleString();
  }, [cartItemList]);

  return cartItemTotalPrice;
};

export default useBundlePrice;
