import cartService from "@services/cart.service";
import { useMutation, useQueryClient } from "react-query";
import queryKey from "../constants/queryKey";
import {
  ICartItemListData,
  IUpdateCartItemRequestBody,
} from "../types/cart.type";
import useCartItemList from "./useCartItemList";
import { useSetRecoilState } from "recoil";
import { cartSpinnerAtom } from "@components/Cart/recoil/spinner";

interface IUseDeleteCartItem {
  updateCartItem: (cartInfo: IUpdateCartItemRequestBody) => void;
  isLoading: boolean;
}

const useUpdateCartItem = (): IUseDeleteCartItem => {
  const queryClient = useQueryClient();

  const setCartSpinner = useSetRecoilState(cartSpinnerAtom);
  const { cartItemList, updateCartItemList } = useCartItemList();

  const { mutate: updateCartItem, isLoading } = useMutation(
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
      onSettled: () => {
        setCartSpinner(false);
      },
    }
  );

  return { updateCartItem, isLoading };
};

export default useUpdateCartItem;
