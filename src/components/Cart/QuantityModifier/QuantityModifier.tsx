import { memo, useCallback, useEffect, useState } from "react";
import useUpdateCartItem from "../hooks/useUpdateCartItem";
import * as Style from "./QuantityModifier.style";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";
import useDebounce from "@hooks/useDebounce";

interface IQuantityModifierProps {
  cartId: number;
  cartQuantity: number;
}

const QuantityModifier = ({ cartId, cartQuantity }: IQuantityModifierProps) => {
  const updateCartItem = useUpdateCartItem();
  const DEBOUNCE_WAIT = 200;

  const handleDecreaseModifierDebounce = useDebounce(() => {
    if (cartQuantity === 0) {
      return;
    }

    updateCartItem({ cartId, cartQuantity: cartQuantity - 1 });
  }, DEBOUNCE_WAIT);

  const handleIncreaseModifierDebounce = useDebounce(() => {
    updateCartItem({ cartId, cartQuantity: cartQuantity + 1 });
  }, DEBOUNCE_WAIT);

  return (
    <Style.ModifierContainer>
      <Style.ModifiedButton
        type="button"
        onClick={handleDecreaseModifierDebounce}
      >
        <HiOutlineMinus />
      </Style.ModifiedButton>
      <Style.ContentArea>{cartQuantity}</Style.ContentArea>
      <Style.ModifiedButton
        type="button"
        onClick={handleIncreaseModifierDebounce}
      >
        <HiOutlinePlus />
      </Style.ModifiedButton>
    </Style.ModifierContainer>
  );
};

export default memo(QuantityModifier);
