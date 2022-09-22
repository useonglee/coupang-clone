import styled from "@emotion/styled";
import theme from "@styles/theme";

export const CoupangBadgeContainer = styled.div`
  padding: 1.6rem 0rem 0.5rem;
`;

export const ShippnFeeBadgeStyle = styled.p`
  color: ${theme.color.basicGray};
  font-size: 1.2rem;
  line-height: 1.6rem;
`;

export const BenefitBadgeContainer = styled.div`
  display: inline-block;
  height: 2rem;
  margin-top: 1.2rem;
  padding: 0 0.8rem;
  border: 1px solid ${theme.color.grayCC};
  border-radius: 10px;
  box-sizing: border-box;

  & > span:nth-of-type(1) {
    display: inline-block;
    margin-top: 0.2rem !important;
  }

  & > span {
    display: inline-block;
    margin-left: 0.4rem;
    vertical-align: top;
    color: ${theme.color.black300};
    font-size: 1.2rem;
    line-height: 1.8rem;
  }
`;
