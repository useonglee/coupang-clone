import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const CartItemContainer = styled.tr`
  ${({ theme }) => {
    const { gray } = theme.color;

    return css`
      border-bottom: 1px solid ${gray["DD"]};
    `;
  }}
`;

export const CartItemCheckboxWrapper = styled.td`
  text-align: center;
  vertical-align: middle;
`;

export const CartItemImageWrapper = styled.td`
  vertical-align: middle;

  & > div {
    padding: 1rem 0;
  }
`;

export const CartItemInfoWrapper = styled.td`
  padding: 1rem 0.5rem 1rem 1.5rem;
  text-align: left;
  vertical-align: top;
`;

export const CartItemTitle = styled.div`
  ${({ theme }) => {
    const { gray } = theme.color;

    return css`
      height: 4.1rem;
      padding-bottom: 0.5rem;
      letter-spacing: -1px;
      border-bottom: 1px solid ${gray["E5"]};

      & > p {
        color: ${gray["55"]};
        line-height: 3.5rem;
        font-weight: 700;
        font-size: 1.4rem;
      }
    `;
  }}
`;

export const CartItemOptionInfoWrapper = styled.div`
  padding-top: 1rem;

  & > div:nth-of-type(1) {
    display: flex;
    justify-content: space-between;
  }

  & > div:nth-last-of-type(1) {
    float: right;
  }
`;

export const OptionPricePart = styled.div`
  ${({ theme }) => {
    const { gray } = theme.color;

    return css`
      line-height: 2.4rem;
      color: ${gray["88"]};
      font-size: 1.2rem;

      & > span:nth-of-type(3) {
        display: inline-block;
        width: 7rem;
        margin-right: 0.5rem;
        text-align: right;
      }
    `;
  }}
`;

export const CartItemDeleteButton = styled.button`
  ${({ theme }) => {
    const { gray } = theme.color;

    return css`
      width: 1.8rem;
      height: 1.8rem;
      margin-bottom: 0.2rem;
      border: 1px solid ${gray["88"]};

      & > svg {
        height: 1.6rem;
        color: ${gray["88"]};
      }
    `;
  }}
`;

export const CartItemTotalPrice = styled.td`
  ${({ theme }) => {
    const { black, gray } = theme.color;

    return css`
      text-align: center;
      vertical-align: middle;
      font-size: 1.2rem;
      border-left: 1px solid ${gray["DD"]};

      & > div {
        color: ${black};
      }
    `;
  }}
`;

export const CartItemDeliveryFree = styled.td`
  ${({ theme }) => {
    const { gray } = theme.color;

    return css`
      text-align: center;
      vertical-align: middle;
      font-size: 1.2rem;
      border-left: 1px solid ${gray["DD"]};
    `;
  }}
`;
