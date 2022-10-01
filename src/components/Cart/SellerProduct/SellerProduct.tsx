import { memo, useEffect } from "react";
import dynamic from "next/dynamic";
import BundlePrice from "../BundlePrice/BundlePrice";
import useBundlePrice from "../hooks/useBundlePrice";
import { ICartItemListData } from "../types/cart.type";
import * as Style from "../CartTable/CartTable.style";
import { useSetRecoilState } from "recoil";
import { sellerPriceAtom } from "@recoil/totalPrice";

const CartItem = dynamic(() => import("../CartItem/CartItem"), {
  ssr: false,
});

interface ISellerProductProps {
  cartItemList: ICartItemListData[];
}

const SellerProduct = ({ cartItemList }: ISellerProductProps) => {
  const sellerCartItemTotalPrice = useBundlePrice(cartItemList);
  const setSellerTotalPrice = useSetRecoilState(sellerPriceAtom);

  useEffect(() => {
    setSellerTotalPrice(sellerCartItemTotalPrice);
  }, [sellerCartItemTotalPrice, setSellerTotalPrice]);

  if (cartItemList.length === 0) {
    return <></>;
  }

  return (
    <tbody>
      <tr>
        <Style.CartBundleTitle colSpan={5}>
          <h2>판매자배송 상품</h2>
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
      <BundlePrice totalPrice={sellerCartItemTotalPrice} />
    </tbody>
  );
};

export default memo(SellerProduct);
