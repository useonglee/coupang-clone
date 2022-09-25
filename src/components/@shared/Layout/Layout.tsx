import { ReactNode } from "react";
import Head from "next/head";
import { Spinner } from "@components/Cart";
import { useRecoilValue } from "recoil";
import { spinnerAtom } from "@recoil/spinner";
import * as Style from "./Layout.style";

interface ILayoutProps {
  title: string;
  isScrolling?: boolean;
  children: ReactNode;
}

const Layout = ({ title, isScrolling, children }: ILayoutProps) => {
  const cartSpinner = useRecoilValue(spinnerAtom);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Style.LayoutContainer>{children}</Style.LayoutContainer>
      {cartSpinner && <Spinner.Clip />}
    </>
  );
};

export default Layout;
