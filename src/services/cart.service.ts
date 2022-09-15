import axiosInstance from "@api/axiosInstance";

class CartService {
  async fetchCartList() {
    const { data } = await axiosInstance.get("/cart");

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
