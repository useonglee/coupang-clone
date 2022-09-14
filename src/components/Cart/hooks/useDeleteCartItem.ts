import cartService from "@services/cart.service";
import { useMutation } from "react-query";

const useDeleteCartItem = () => {
  const { mutate: deleteCartItem } = useMutation((cartId: number) =>
    cartService.fetchDeleteCartItem(cartId)
  );

  return deleteCartItem;
};

export default useDeleteCartItem;
