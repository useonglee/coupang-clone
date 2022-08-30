import { PropsWithChildren } from "react";
import * as Style from "./Layout.style";

interface ILayoutProps {
  isScrolling: boolean;
}

const Layout = ({ isScrolling, children }: PropsWithChildren<ILayoutProps>) => {
  return (
    <Style.LayoutContainer isScrolling={isScrolling}>
      {children}
    </Style.LayoutContainer>
  );
};

export default Layout;
