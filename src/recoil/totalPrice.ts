import { atom } from "recoil";

export const rocketPriceAtom = atom({
  key: "rocketPrice",
  default: 0,
});

export const sellerPriceAtom = atom({
  key: "sellerPrice",
  default: 0,
});
