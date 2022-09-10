import "@emotion/react";

declare module "@emotion/react" {
  export interface DefaultTheme {
    color: {
      primary: string;
      black: string;
      white: string;
      gray: {
        "55": string;
        "8A": string;
        "88": string;
      };
      background: {
        dark: string;
        light: string;
      };
      emphasis: string;
    };
  }
}
