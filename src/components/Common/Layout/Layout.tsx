import Head from "next/head";
import { PropsWithChildren } from "react";
import * as Style from "./Layout.style";

interface ILayoutProps {
  isScrolling: boolean;
}

const Layout = ({ isScrolling, children }: PropsWithChildren<ILayoutProps>) => {
  return (
    <>
      <Head>
        <title>쿠팡!</title>
      </Head>
      <Style.LayoutContainer isScrolling={isScrolling}>
        {children}
      </Style.LayoutContainer>
    </>
  );
};

export default Layout;
