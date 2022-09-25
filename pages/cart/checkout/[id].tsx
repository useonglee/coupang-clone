import Image from "next/image";
import { Layout } from "@components/@shared";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const CheckoutPage = () => {
  return (
    <Layout title="쿠팡! - COLOR OF YOUR DAYS!">
      <HeaderLogo>
        <Image
          src="/assets/images/coupang_logo.png"
          alt="쿠팡 로고"
          width={174}
          height={40}
        />
      </HeaderLogo>
      <PageTitle>주문/결제</PageTitle>
    </Layout>
  );
};

const HeaderLogo = styled.div`
  ${({ theme }) => {
    const { gray } = theme.color;

    return css`
      padding: 1rem 0;
      border-bottom: 1px solid ${gray["E7"]};
    `;
  }}
`;

const PageTitle = styled.h1`
  ${({ theme }) => {
    const { black, gray } = theme.color;

    return css`
      float: left;
      width: 100%;
      line-height: 7rem;
      color: ${black};
      font-size: 3rem;
      font-weight: bold;
      font-family: "돋움", Dotum, sans-serif;
      border-bottom: 0.3rem solid ${gray["77"]};
    `;
  }}
`;

export default CheckoutPage;
