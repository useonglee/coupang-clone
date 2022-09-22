import "@emotion/react";

declare module "@emotion/react" {
  export interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
      grayCC: string;
      lightGray: string;
      basicGray: string;
      darkGray: string;
      priceColor: string;
      boxShadow: string;
      black: string;
      black300: string;
    };
  }
}
