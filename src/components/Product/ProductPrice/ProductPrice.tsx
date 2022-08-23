import { useMemo } from "react";
import Image from "next/image";
import * as Style from "./ProductPrice.style";

interface IProductPriceProps {
  originalPrice: number;
  salePrice: number;
  wowPrice: number;
  roketType: string | null;
  weight: string | null;
}

const ProductPrice = ({
  originalPrice,
  salePrice,
  wowPrice,
  roketType,
  weight,
}: IProductPriceProps) => {
  const salePercent = useMemo(() => {
    if (originalPrice === salePrice) {
      return;
    }

    return 100 - Math.floor((salePrice / originalPrice) * 100);
  }, [salePrice, originalPrice]);

  const testPrice = useMemo(() => {
    if (!weight) {
      return;
    }

    return Math.round((salePrice / Number(weight)) * 100);
  }, [weight]);

  return (
    <Style.ProductPriceContainer>
      {salePercent && (
        <Style.ProductDiscountInfo>
          <span>{salePercent}%</span>
          <del>{originalPrice.toLocaleString()}</del>
        </Style.ProductDiscountInfo>
      )}
      <Style.PriceWrapper>
        <Style.PriceValue>
          <strong>{salePrice.toLocaleString()}</strong>원
        </Style.PriceValue>
        {roketType === "fresh" && (
          <Style.RocketBadge>
            <Image
              src="https://image6.coupangcdn.com/image/badges/falcon/v1/web/rocket-fresh@2x.png"
              alt="로켓 프레시 상품"
              width={72}
              height={16}
            />
          </Style.RocketBadge>
        )}
      </Style.PriceWrapper>
      {testPrice && (
        <Style.PricePerWeight>{`(100g당 ${testPrice}원)`}</Style.PricePerWeight>
      )}
    </Style.ProductPriceContainer>
  );
};

export default ProductPrice;
