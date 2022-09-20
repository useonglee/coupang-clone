import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const CartTableContainer = styled.table`
  width: 89.8rem;
  margin: 0 auto;
`;

export const CartTableHeaderRow = styled.tr`
  ${({ theme }) => {
    const { black, gray } = theme.color;

    return css`
      height: 4rem;
      color: ${black};
      line-height: 4rem;
      font-size: 1.3rem;
      font-weight: bold;
      border-top: 1px solid ${gray["DD"]};
      border-bottom: 1px solid ${gray["DD"]};
      background-color: ${gray["FA"]};
    `;
  }}
`;

export const AllCheckItemTh = styled.th`
  width: 10.5rem;
  padding: 0 1rem;
  text-align: left;

  & > label {
    display: inline-block;
    margin-left: 0.5rem;
  }
`;

export const CartBundleTitle = styled.td`
  ${({ theme }) => {
    const { gray } = theme.color;

    return css`
      padding: 2.6rem 2.2rem 2.4rem;
      text-align: left;
      line-height: 1.6rem;
      border-bottom: 1px solid ${gray["DD"]};

      & > h2 {
        float: left;
        line-height: 1.6rem;
        font-size: 1.6rem;
        font-weight: 700;
        letter-spacing: -0.5px;
      }
    `;
  }}
`;

export const RocketDeliveryInfo = styled.p`
  ${({ theme }) => {
    const { gray } = theme.color;

    return css`
      float: left;
      margin-left: 2rem;
      line-height: 1.6rem;
      font-size: 1.2rem;
      font-weight: 700;

      & > span {
        color: ${gray["88"]};
      }
    `;
  }}
`;
