import { useContext, useEffect } from "react";
import useDeleteCartItem from "@components/Cart/hooks/useDeleteCartItem";
import { Checkbox } from "@components/Common";
import { CheckBoxContext } from "@components/Common/Checkbox/CheckboxGroup";
import * as Style from "./OrderFoot.style";
import { useSetRecoilState } from "recoil";
import { cartSpinnerAtom } from "@components/Cart/recoil/spinner";

interface IOrderFootProps {
  cartIdList: number[];
  cartItemCount: number;
}

const OrderFoot = ({ cartIdList, cartItemCount }: IOrderFootProps) => {
  const setCartSpinner = useSetRecoilState(cartSpinnerAtom);
  const context = useContext(CheckBoxContext);

  const { deleteCartItem, isLoading } = useDeleteCartItem();

  const handleDeleteAllItemClick = () => {
    if (!context) return;

    context.checkedAllItem.map((cartId) => deleteCartItem(cartId));
  };

  useEffect(() => {
    setCartSpinner(isLoading);
  }, [isLoading]);

  return (
    <tbody>
      <tr>
        <td>
          <Style.AllItemCheckboxWrapper>
            <Checkbox.AllCheckItem label="전체선택" list={cartIdList} />
            <span>
              ( <strong>{context?.checkedAllItem.length}</strong> /
              {cartItemCount} )
            </span>
          </Style.AllItemCheckboxWrapper>
        </td>
        <td>
          <Style.DeleteAllItemButton
            type="button"
            onClick={handleDeleteAllItemClick}
          >
            {context?.checkedAllItem.length === cartItemCount ? "전체" : "선택"}
            삭제
          </Style.DeleteAllItemButton>
        </td>
      </tr>
    </tbody>
  );
};

export default OrderFoot;
