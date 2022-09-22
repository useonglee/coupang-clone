import * as Style from "./ProductRating.style";

interface IProductRatingProps {
  rating: number;
  reviewCount: number;
}

const ProductRating = ({ rating, reviewCount }: IProductRatingProps) => {
  const TOTAL_SCORE = 5;
  const RATING_PERCENTAGE = Math.floor((rating / TOTAL_SCORE) * 100);

  const StarIcons = () => {
    return <span>{Array(TOTAL_SCORE).fill("★")}</span>;
  };

  return (
    <Style.ProductRatingContainer>
      <Style.StarRatingWrapper>
        <Style.StarRatingFill fill={RATING_PERCENTAGE}>
          <StarIcons />
        </Style.StarRatingFill>
        <Style.StarRatingBase>
          <StarIcons />
        </Style.StarRatingBase>
      </Style.StarRatingWrapper>
      <Style.ProductReviewCount>{`(${reviewCount})`}</Style.ProductReviewCount>
    </Style.ProductRatingContainer>
  );
};

export default ProductRating;
