import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const AllItemCheckboxWrapper = styled.div`
  ${({ theme }) => {
    const { gray } = theme.color;

    return css`
      margin-top: 2rem;
      font-size: 1.2rem;

      & > label {
        margin-left: 0.5rem;
      }

      & > span {
        color: ${gray["88"]};

        & > strong {
          color: ${gray["55"]};
        }
      }
    `;
  }}
`;

export const DeleteAllItemButton = styled.button`
  ${({ theme }) => {
    const { black, gray } = theme.color;

    return css`
      padding: 0.5rem 0.6rem;
      margin-left: 1rem;
      text-align: center;
      color: ${black};
      font-size: 1.2rem;
      border: 1px solid ${gray["CC"]};
    `;
  }}
`;
