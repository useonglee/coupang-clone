import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      primary: string;
      secondary: string;
      black: string;
      white: string;
      gray: {
        "33": string;
        "55": string;
        "8A": string;
        "88": string;
        CC: string;
        C8: string;
        DD: string;
        E5: string;
        E7: string;
        FA: string;
      };
      background: {
        dark: string;
        light: string;
      };
      emphasis: string;
      grayCC: string;
      grayFA: string;
      grayEE: string;
      lightGray: string;
      basicGray: string;
      darkGray: string;
      priceColor: string;
      boxShadow: string;
      black300: string;
      starRating: string;
    };
  }
}
