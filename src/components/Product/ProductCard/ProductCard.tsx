import Image from "next/image";
import {
  CoupangBadge,
  DeliveryDate,
  ProductPrice,
  ProductRating,
} from "@components/Product";
import { IProductData } from "@/types/products";
import * as Style from "./ProductCard.style";

interface IProductCardProps {
  productData: IProductData;
}

const ProductCard = ({ productData }: IProductCardProps) => {
  return (
    <Style.ProductCardContainer>
      <Style.ProductCardInnerStyle>
        {/* 상품 이미지 */}
        <Image
          src={productData.imageUrl}
          alt={productData.name}
          width={215}
          height={215}
        />

        <Style.CardContentWrapper>
          {/* 쿠팡 뱃지 */}
          <CoupangBadge.Recommended
            isRecommended={productData.isRecommended}
            shippinFee={productData.shippinFee}
          />

          {/* 상품 제목 */}
          <Style.ProductTitle>{productData.name}</Style.ProductTitle>

          {/* 상품 가격 */}
          <ProductPrice
            originalPrice={productData.originalPrice}
            salePrice={productData.salePrice}
            wowPrice={productData.wowPrice}
            roketType={productData.rocketType}
            weight={productData.weight}
          />

          {/* 배송 도착 날짜 */}
          <DeliveryDate
            date={productData.expectedDeliveryDate}
            isAssured={productData.isAssured}
          />

          {/* 상품 평점 */}
          <ProductRating
            rating={productData.rating}
            reviewCount={productData.reviewCount}
          />

          {/* 상품 포인트 적립 뱃지 */}
          <CoupangBadge.Benefit maxPoint={productData.maxPoint} />
        </Style.CardContentWrapper>
      </Style.ProductCardInnerStyle>
    </Style.ProductCardContainer>
  );
};

export default ProductCard;
