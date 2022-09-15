import cartService from "@services/cart.service";
import { useMutation, useQueryClient } from "react-query";

const useDeleteCartItem = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteCartItem } = useMutation(
    (cartId: number) => cartService.fetchDeleteCartItem(cartId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["cart-list"]);
      },
    }
  );

  return deleteCartItem;
};

export default useDeleteCartItem;
