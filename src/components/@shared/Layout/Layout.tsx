import { ReactNode } from "react";
import Head from "next/head";
import { Spinner } from "@components/Cart";
import { useRecoilValue } from "recoil";
import { spinnerAtom } from "@recoil/spinner";

interface ILayoutProps {
  title: string;
  children: ReactNode;
}

const Layout = ({ title, children }: ILayoutProps) => {
  const cartSpinner = useRecoilValue(spinnerAtom);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>{children}</main>
      {cartSpinner && <Spinner.Clip />}
    </>
  );
};

export default Layout;
