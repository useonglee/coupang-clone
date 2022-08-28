import styled from "@emotion/styled";
import theme from "@styles/theme";

export const ProductRatingContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 0.6rem;
`;

export const ProductReviewCount = styled.span`
  display: inline-block;
  margin-left: 0.4rem;
  color: ${theme.color.darkGray};
  font-size: 11px;
  font-family: Tahoma, sans-serif;
`;

export const StarRatingWrapper = styled.div`
  position: relative;
  width: max-content;
`;

export const StarRatingFill = styled.div<{ fill: number }>`
  color: ${theme.color.starRating};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  overflow: hidden;
  width: ${({ fill }) => fill}%;
`;

export const StarRatingBase = styled.div`
  color: ${theme.color.grayCC};
`;
