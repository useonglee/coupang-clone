import cartService from "@services/cart.service";
import { useMutation, useQueryClient } from "react-query";
import queryKey from "../constants/queryKey";
import { ICartItemListData } from "../types/cart.type";
import useCartItemList from "./useCartItemList";
import { useSetRecoilState } from "recoil";
import { spinnerAtom } from "@recoil/spinner";

interface IUseDeleteCartItem {
  deleteCartItem: (cartId: number) => void;
  isLoading: boolean;
}

const useDeleteCartItem = (): IUseDeleteCartItem => {
  const queryClient = useQueryClient();

  const setCartSpinner = useSetRecoilState(spinnerAtom);
  const { cartItemList, updateCartItemList } = useCartItemList();

  const { mutate: deleteCartItem, isLoading } = useMutation(
    (cartId: number) => cartService.fetchDeleteCartItem(cartId),
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
      onSettled: () => {
        setCartSpinner(false);
      },
    }
  );

  return { deleteCartItem, isLoading };
};

export default useDeleteCartItem;
