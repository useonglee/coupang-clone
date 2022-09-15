import { memo, useEffect } from "react";
import dynamic from "next/dynamic";
import BundlePrice from "../BundlePrice/BundlePrice";
import useBundlePrice from "../hooks/useBundlePrice";
import { ICartItemListData } from "../types/cart.type";
import * as Style from "../CartTable/CartTable.style";
import { useSetRecoilState } from "recoil";
import { RocketProductTotalPriceAtom } from "../recoil/totalPrice";

const CartItem = dynamic(() => import("../CartItem/CartItem"), {
  ssr: false,
});

interface IRocketProductProps {
  cartItemList: ICartItemListData[];
}

const RocketProduct = ({ cartItemList }: IRocketProductProps) => {
  const setRocketTotalPrice = useSetRecoilState(RocketProductTotalPriceAtom);
  const rocketCartItemTotalPrice = useBundlePrice(cartItemList);

  if (cartItemList.length === 0) {
    return <></>;
  }

  return (
    <tbody>
      <tr>
        <Style.CartBundleTitle colSpan={5}>
          <h2>로켓배송 상품</h2>
          <Style.RocketDeliveryInfo>
            무료 배송 <span>(19,800원 이상 구매가능)</span>
          </Style.RocketDeliveryInfo>
        </Style.CartBundleTitle>
      </tr>
      {cartItemList?.map(({ id, product, quantity }, index) => (
        <CartItem
          key={id}
          cartId={id}
          deliveryDate={product.expectedDeliveryDate}
          isAssured={product.isAssured}
          imageUrl={product.imageUrl}
          title={product.name}
          price={product.salePrice}
          rocketType={product.rocketType}
          maxPoint={product.maxPoint}
          quantity={quantity}
          count={cartItemList.length}
          isFirstItem={index === 0}
        />
      ))}
      <BundlePrice totalPrice={rocketCartItemTotalPrice} isRocket />
    </tbody>
  );
};

export default memo(RocketProduct);
