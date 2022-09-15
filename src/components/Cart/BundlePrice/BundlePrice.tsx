import { memo } from "react";
import * as Style from "./BundlePrice.style";

interface IBundlePrice {
  totalPrice: string;
  isRocket?: boolean;
}

const BundlePrice = ({ totalPrice, isRocket }: IBundlePrice) => {
  return (
    <Style.BundlePriceContainer>
      <Style.BundlePriceTotalTd colSpan={5}>
        {isRocket && (
          <Style.RocketTooltip>
            다른 <span>로켓배송 상품 (로켓와우 포함)</span>을 추가해도 함께
            <span>무료배송</span> 가능!
            <Style.RocketTooltipArrow />
          </Style.RocketTooltip>
        )}
        <Style.ProductTotalPriceArea>
          <span>
            상품가격
            <Style.ProductTotalPrice>{totalPrice}</Style.ProductTotalPrice>원
          </span>
          <Style.PlusIcon />
          <span>
            배송비
            {isRocket ? (
              <Style.DeliveryCarge>무료</Style.DeliveryCarge>
            ) : (
              <Style.ProductTotalPrice>0</Style.ProductTotalPrice>
            )}
            {!isRocket && "원"}
          </span>
          <Style.EqualIcon />
          <span>
            주문금액
            <Style.TotalOrderPrice>{totalPrice}</Style.TotalOrderPrice>원
          </span>
        </Style.ProductTotalPriceArea>
      </Style.BundlePriceTotalTd>
    </Style.BundlePriceContainer>
  );
};

export default memo(BundlePrice);
