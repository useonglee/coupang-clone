import { css } from "@emotion/react";
import styled from "@emotion/styled";
import theme from "@styles/theme";

export const PaginationContainer = styled.nav<{ isFixed?: boolean }>`
  ${({ isFixed }) => {
    return css`
      position: ${isFixed ? "fixed" : "static"};
      left: 0;
      bottom: 0;
      z-index: 100;
      width: 100%;
      margin-top: 2rem;
      padding: 1rem 0;
      text-align: center;
      box-shadow: ${isFixed && "0 -3px 3px rgb(0 0 0 / 5%)"};
      background-color: ${isFixed && "rgba(255, 255, 255, 0.9)"};
    `;
  }}
`;

export const PageButtonStyle = styled.button`
  width: 2.9rem;
  height: 2.9rem;
  color: ${theme.color.basicGray};
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;

  &:hover {
    color: ${theme.color.starRating};
  }
`;

export const PaginationButton = styled(PageButtonStyle)<{ selected: boolean }>`
  ${({ selected }) => {
    const { primary } = theme.color;

    return css`
      color: ${selected && primary};
      border: ${selected ? `1px solid ${primary}` : null};

      &:hover {
        color: ${selected && primary};
        text-decoration: underline;
      }
    `;
  }}
`;

export const ArrowButton = styled(PageButtonStyle)<{
  direction: string;
  disabled: boolean;
}>`
  ${({ direction, disabled }) => {
    const { lightGray } = theme.color;

    return css`
      cursor: ${disabled && "not-allowed"};
      margin-right: ${direction === "left" && "0.8rem"};
      margin-left: ${direction === "right" && "0.8rem"};
      color: ${disabled && lightGray};
      border: 1.5px solid ${lightGray};

      &:hover {
        color: ${disabled && lightGray};
      }

      & > svg {
        height: 100%;
        font-size: 2.6rem;
      }
    `;
  }}
`;
