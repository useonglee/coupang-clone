import dynamic from "next/dynamic";
import useCartItemList from "@components/Cart/hooks/useCartItemList";
import * as Style from "./CartTable.style";

const CartItem = dynamic(() => import("../CartItem/CartItem"), {
  ssr: false,
});

const CartTable = () => {
  const cartItemListData = useCartItemList();
  console.log(cartItemListData);

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
          <th scope="col">전체선택</th>
          <th scope="colgroup" colSpan={2}>
            상품정보
          </th>
          <th scope="col">상품금액</th>
          <th scope="col">배송비</th>
        </Style.CartTableHeaderRow>
      </thead>
      <tbody>
        <tr>
          <Style.CartBundleTitle colSpan={5}>
            <h2>로켓배송 상품</h2>
            <Style.RocketDeliveryInfo>
              무료 배송 <span>(19,800원 이상 구매가능)</span>
            </Style.RocketDeliveryInfo>
          </Style.CartBundleTitle>
        </tr>
        {cartItemListData?.map(({ id, product }, index) => (
          <CartItem
            key={id}
            cartId={product.id}
            deliveryDate={product.expectedDeliveryDate}
            isAssured={product.isAssured}
            imageUrl={product.imageUrl}
            title={product.name}
            price={product.salePrice}
            rocketType={product.rocketType}
            maxPoint={product.maxPoint}
            isFirstItem={index === 0}
          />
        ))}
      </tbody>
    </Style.CartTableContainer>
  );
};

export default CartTable;
