import cartService from "@services/cart.service";
import { useMutation, useQueryClient } from "react-query";
import queryKey from "../constants/queryKey";
import {
  ICartItemListData,
  IUpdateCartItemRequestBody,
} from "../types/cart.type";
import useCartItemList from "./useCartItemList";

const useUpdateCartItem = () => {
  const queryClient = useQueryClient();
  const { cartItemList, updateCartItemList } = useCartItemList();

  const { mutate: updateCartItem } = useMutation(
    ({ cartId, cartQuantity }: IUpdateCartItemRequestBody) =>
      cartService.fetchUpdateCartItem(cartId, cartQuantity),
    {
      onMutate: () => {
        queryClient.cancelQueries([queryKey.cart]);

        const previousCartItemList: ICartItemListData[] | null =
          queryClient.getQueryData([queryKey.cart]) || null;

        updateCartItemList(cartItemList);

        return { previousCartItemList };
      },
      onError: (error, data, context) => {
        if (context) {
          updateCartItemList(context.previousCartItemList);
          alert("네트워크 오류입니다. 다시 시도해 주세요.");
        }
      },
      onSuccess: () => {
        queryClient.invalidateQueries([queryKey.cart]);
      },
    }
  );

  return updateCartItem;
};

export default useUpdateCartItem;
