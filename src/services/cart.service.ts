import axiosInstance from "@api/axiosInstance";
import { ICartItemListData } from "@components/Cart/types/cart.type";

class CartService {
  async fetchCartList(signal?: AbortSignal): Promise<ICartItemListData[]> {
    const { data } = await axiosInstance.get("/cart", { signal });

    return data;
  }

  async fetchUpdateCartItem(cartId: number, cartQuantity: number) {
    const { data } = await axiosInstance.patch(`/cart-items/${cartId}`, {
      quantity: cartQuantity,
    });

    return data;
  }

  async fetchDeleteCartItem(cartId: number) {
    const { data } = await axiosInstance.delete(`/cart-items/${cartId}`);

    return data;
  }
}

export default new CartService();
