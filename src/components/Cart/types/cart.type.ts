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
  maxPoint: string;
  name: string;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  rocketType: string | null;
  salePrice: string;
  shippinFee: number;
  weight: number;
  wowPrice: number;
}

export interface IUpdateCartItemRequestBody {
  cartId: number;
  cartQuantity: number;
}
