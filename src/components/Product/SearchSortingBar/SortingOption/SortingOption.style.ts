import styled from "@emotion/styled";
import theme from "@styles/theme";

// react icon
import { GoCheck } from "react-icons/go";
import { BiInfoCircle } from "react-icons/bi";

export const SortingOptionContainer = styled.ul`
  display: flex;
  align-items: center;

  & > li:not(:nth-last-of-type(1)) {
    border-right: 1px solid ${theme.color.grayEE};
  }
`;

export const SortingOptionWrapper = styled.li`
  position: relative;
  padding: 0 1rem;
  line-height: 2rem;
  color: ${theme.color.basicGray};
  font-size: 1.2rem;

  & > label {
    &:hover {
      cursor: pointer;
      color: ${theme.color.primary};
    }
  }

  & > input[type="radio"] {
    display: none;
  }

  & > input[type="radio"]:checked + label {
    color: ${theme.color.primary};
    font-weight: bold;
  }
`;

export const CheckedIcon = styled(GoCheck)`
  margin-top: -0.4rem;
  margin-right: 0.5rem;
  vertical-align: middle;
  color: ${theme.color.primary};
  font-size: 1.6rem;
`;

export const HelpInfoContainer = styled.span``;

export const HelpInfoIcon = styled(BiInfoCircle)`
  margin-top: -0.4rem;
  margin-left: 0.5rem;
  vertical-align: middle;
  font-size: 1.4rem;

  &:hover {
    cursor: help;
    color: ${theme.color.basicGray};
  }

  &:hover + span {
    opacity: 1;
    visibility: visible;
  }
`;

export const SpeechBubbleStyle = styled.span`
  position: absolute;
  top: 2.4rem;
  left: 0;
  z-index: 100;
  visibility: hidden;
  opacity: 0;
  width: 22rem;
  padding: 1rem;
  white-space: pre-wrap;
  line-height: 1.5;
  color: ${theme.color.white};
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.7);
  transition: 0.5s;
`;
