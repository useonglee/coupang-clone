import { Theme } from "@emotion/react";

const color = {
  primary: "#0073E9",
  secondary: "#00891A",
  black: "#111111",
  white: "#FFFFFF",
  gray: {
    "33": "#333333",
    "55": "#555555",
    "8A": "#8A8A8A",
    "88": "#888888",
    CC: "#CCCCCC",
    C8: "#C8C8C8",
    DD: "#DDDDDD",
    E5: "#E5E5E7",
    E7: "#F7F7F7",
    FA: "#FAFAFA",
  },
  background: {
    dark: "rgb(138, 138, 138)",
    light: "rgb(247, 247, 247)",
  },
  emphasis: "#E52528",
  grayCC: "#CCCCCC",
  grayFA: "#FAFAFA",
  lightGray: "#DDDDDD",
  basicGray: "#555555",
  darkGray: "#888888",
  priceColor: "#AE0000",
  boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.2)",
  black300: "#333333",
  starRating: "#FF9603",
};

const theme: Theme = {
  color,
};

export default theme;
