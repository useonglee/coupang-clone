import { css } from "@emotion/react";
import styled from "@emotion/styled";
import theme from "@styles/theme";

// react-icon
import { RiArrowDropDownLine } from "react-icons/ri";

export const SelectContainer = styled.div`
  position: relative;
  z-index: 10;
  width: 10.5rem;
  height: 100%;
`;

export const SelectOpenButton = styled.button<{ open: boolean }>`
  ${({ open }) => {
    const { basicGray, grayFA, white } = theme.color;

    return css`
      width: 10.5rem;
      height: 3.2rem;
      color: ${basicGray};
      background-color: ${open && white};

      &:hover {
        background-color: ${grayFA};
      }

      & > span {
        display: inline-block;
        float: left;
        width: 7rem;
        margin-right: 1rem;
        line-height: 3.2rem;
        font-size: 1.2rem;
        font-weight: bold;
      }
    `;
  }}
`;

export const ArrowDownIcon = styled(RiArrowDropDownLine)<{ open: boolean }>`
  height: 100%;
  margin-top: -0.2rem;
  font-size: 2.5rem;
  transform: ${({ open }) => open && "rotate(-180deg)"};
`;

export const SelectItemWrapper = styled.li<{ open: boolean }>`
  width: 100%;
  height: 3.2rem;

  &:hover {
    background-color: ${theme.color.grayFA};
  }
`;

export const SelectItem = styled.button`
  width: 100%;
  height: 100%;

  color: ${theme.color.basicGray};
  font-size: 1.2rem;

  & > span:nth-of-type(1) {
    display: block;
    float: left;
    width: 7rem;
  }

  & > span:nth-of-type(2) {
    display: inline-block;
    visibility: hidden;
    width: 2.5rem;
  }
`;
