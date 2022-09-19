import cartService from "@services/cart.service";
import { useMutation, useQueryClient } from "react-query";
import queryKey from "../constants/queryKey";

const useResetCartItem = () => {
  const queryClient = useQueryClient();

  const { mutate: resetCartItem } = useMutation(
    () => cartService.fetchResetCartItem(),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKey.cart]);
      },
    }
  );

  return resetCartItem;
};

export default useResetCartItem;
