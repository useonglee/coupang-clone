import cartService from "@services/cart.service";
import { useMutation, useQueryClient } from "react-query";
import { IUpdateCartItemRequestBody } from "../types/cart.type";

const useUpdateCartItem = () => {
  const queryClient = useQueryClient();

  const { mutate: updateCartItem } = useMutation(
    ({ cartId, cartQuantity }: IUpdateCartItemRequestBody) =>
      cartService.fetchUpdateCartItem(cartId, cartQuantity),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["cart-list"]);
      },
    }
  );

  return updateCartItem;
};

export default useUpdateCartItem;
