import styled from "@emotion/styled";
import theme from "@styles/theme";

export const ProductPriceContainer = styled.div`
  padding-top: 0.8rem;
`;

export const ProductDiscountInfo = styled.div`
  font-size: 1.2rem;
  line-height: 1.4rem;

  & > span {
    display: inline-block;
    margin-right: 0.2rem;
  }

  & > del {
    color: ${theme.color.darkGray};
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
`;

export const PriceValue = styled.p`
  margin-right: 0.4rem;
  color: ${theme.color.priceColor};
  line-height: 2rem;

  & > strong {
    font-size: 16px;
    font-family: Tahoma, sans-serif;
    font-weight: bold;
  }
`;

export const RocketBadge = styled.span`
  display: inline-block;
  width: 7.2rem;
  height: 1.6rem;
  vertical-align: middle;
`;

export const PricePerWeight = styled.p`
  color: ${theme.color.priceColor};
  font-size: 1.1rem;
  margin: 0.2rem 0rem 0.4rem;
`;
