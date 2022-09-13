export interface ICartItemListData {
  id: number;
  quantity: number;
  product: ICartItemData;
}

export interface ICartItemData {
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
  weight: number;
  wowPrice: number;
}
