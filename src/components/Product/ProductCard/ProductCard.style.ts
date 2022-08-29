import styled from "@emotion/styled";
import theme from "@styles/theme";

export const ProductCardContainer = styled.li`
  width: 27.5rem;
  padding: 2rem;
  border-bottom: 1px solid ${theme.color.lightGray};
`;

export const ProductCardInnerStyle = styled.div`
  height: 46.5rem;
  padding: 1rem;

  &:hover {
    cursor: pointer;
    box-shadow: ${theme.color.boxShadow};
  }
`;

export const CardContentWrapper = styled.div``;

export const ProductTitle = styled.p`
  overflow: hidden;
  font-size: 1.2rem;
  line-height: 1.6rem;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  word-wrap: break-word;
`;
