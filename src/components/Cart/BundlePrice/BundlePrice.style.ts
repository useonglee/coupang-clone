import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const BundlePriceContainer = styled.tr`
  ${({ theme }) => {
    const { gray } = theme.color;

    return css`
      border-bottom: 1px solid ${gray["DD"]};
      background: ${gray["E7"]};
    `;
  }}
`;

export const BundlePriceTotalTd = styled.td`
  position: relative;
  padding: 2rem 3.5rem 1.6rem;
  line-height: 2.9rem;
  text-align: right;
  font-size: 1.2rem;
`;

export const RocketTooltip = styled.div`
  ${({ theme }) => {
    const { primary, secondary, white, gray } = theme.color;

    return css`
      position: absolute;
      top: 1.7rem;
      right: 39.5rem;
      z-index: 100;
      padding: 0.9rem 1.5rem 0.7rem;
      text-align: left;
      line-height: 1.5rem;
      border: 1px solid ${gray["88"]};
      background: ${white};

      & > span:nth-of-type(1) {
        color: ${primary};
      }

      & > span:nth-of-type(2) {
        color: ${secondary};
      }
    `;
  }}
`;

export const RocketTooltipArrow = styled.div`
  position: absolute;
  top: 1.2rem;
  right: -0.6rem;
  width: 100%;
  height: 1rem;
  background: url("https://img1a.coupangcdn.com/image/order/bundle-tooltip-direction-right.png")
    no-repeat 100% 0; ;
`;

export const ProductTotalPriceArea = styled.span`
  ${({ theme }) => {
    const { black } = theme.color;

    return css`
      display: inline-block;
      vertical-align: middle;
      line-height: 2.9rem;
      color: ${black};
      font-size: 1.2rem;
    `;
  }}
`;

export const IconCommonStyle = styled.span`
  display: inline-block;
  width: 1.8rem;
  height: 1.8rem;
  margin: 0 0.8rem;
  vertical-align: -0.5rem;
  background: url("https://img1a.coupangcdn.com/image/order/mathematics-symbol.png");
`;

export const PlusIcon = styled(IconCommonStyle)`
  background-position: 0 0;
`;

export const EqualIcon = styled(IconCommonStyle)`
  background-position: -3.6rem 0;
`;

export const TotalPriceCommonStyle = styled.span`
  ${({ theme }) => {
    const { black } = theme.color;

    return css`
      display: inline-block;
      margin-left: 0.5rem;
      color: ${black};
      font: normal 1.5rem tahoma;
    `;
  }}
`;

export const ProductTotalPrice = styled(TotalPriceCommonStyle)`
  font-weight: 400;
`;

export const TotalOrderPrice = styled(TotalPriceCommonStyle)`
  font-weight: 700;
`;

export const DeliveryCarge = styled.strong`
  ${({ theme }) => {
    const { black } = theme.color;

    return css`
      display: inline-block;
      margin-left: 0.5rem;
      color: ${black};
      font-family: Dotum;
      font-weight: bold;
    `;
  }}
`;
