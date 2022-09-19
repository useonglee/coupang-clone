import { useMemo } from "react";
import { RocketProduct, SellerProduct } from "@components/Cart";
import { ICartItemListData } from "../types/cart.type";
import * as Style from "./CartTable.style";

interface ICartTableProps {
  cartItemList: ICartItemListData[];
}

const CartTable = ({ cartItemList }: ICartTableProps) => {
  const cart = useMemo(() => {
    const rocketProductList: ICartItemListData[] = [];
    const sellerProductList: ICartItemListData[] = [];

    cartItemList?.map((cartItem) => {
      if (cartItem.product.rocketType === "fresh") {
        rocketProductList.push(cartItem);
      } else {
        sellerProductList.push(cartItem);
      }
    });

    return { rocketProductList, sellerProductList };
  }, [cartItemList]);

  return (
    <Style.CartTableContainer>
      <caption>장바구니</caption>
      <colgroup>
        <col width="50" />
        <col width="80" />
        <col width="*" />
        <col width="90" />
        <col width="90" />
      </colgroup>
      <thead>
        <Style.CartTableHeaderRow>
          <th scope="col">{cartItemList.length > 0 && "전체선택"}</th>
          <th scope="colgroup" colSpan={2}>
            상품정보
          </th>
          <th scope="col">상품금액</th>
          <th scope="col">배송비</th>
        </Style.CartTableHeaderRow>
      </thead>
      <RocketProduct cartItemList={cart.rocketProductList} />
      <SellerProduct cartItemList={cart.sellerProductList} />
    </Style.CartTableContainer>
  );
};

export default CartTable;
