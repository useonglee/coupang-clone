import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      primary: string;
      black: string;
      white: string;
      gray: {
        "55": string;
        "8A": string;
        "88": string;
        DD: string;
        FA: string;
      };
      background: {
        dark: string;
        light: string;
      };
      emphasis: string;
    };
  }
}
