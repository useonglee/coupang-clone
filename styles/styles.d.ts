import "@emotion/react";

declare module "@emotion/react" {
  export interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
      grayCC: string;
      grayFA: string;
      lightGray: string;
      basicGray: string;
      darkGray: string;
      priceColor: string;
      boxShadow: string;
      black: string;
      black300: string;
      starRating: string;
      white: string;
    };
  }
}
