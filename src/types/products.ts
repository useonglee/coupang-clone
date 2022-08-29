export type IProductList = IProductData[];

export interface IProductData {
  expectedDeliveryDate: string;
  id: number;
  imageUrl: string;
  isAssured: boolean;
  isEarlyDelivery: boolean;
  isMdRecommended: boolean;
  isRecommended: boolean;
  isSoldout: boolean;
  maxPoint: number;
  name: string;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  rocketType: string | null;
  salePrice: number;
  shippinFee: number;
  weight: string | null;
  wowPrice: number;
}
