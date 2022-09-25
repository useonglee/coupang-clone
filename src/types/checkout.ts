import { IProductList } from "./products";

export interface IOrdersheetData {
  address: IUserAddress;
  buyer: ICheckoutBuyer;
  coupangCash: number;
  coupangMoney: number;
  coupons: string[];
  orderItems: {
    product: IProductList;
    quantity: number;
  };
}

export interface IUserAddress {
  base: string;
  detail: string;
  id: number;
  isFreshAvailable: boolean;
  isWowAAvailable: boolean;
  phoneNumber: string;
  receiver: string;
}

export interface ICheckoutBuyer {
  email: string;
  name: string;
  phoneNumber: string;
}
