import axiosInstance from "@api/axiosInstance";

class CartService {
  async fetchCartList() {
    const { data } = await axiosInstance.get("/cart");

    return data;
  }

  async fetchDeleteCartItem(cartId: number) {
    const { data } = await axiosInstance.delete(`/cart-items/${cartId}`);

    return data;
  }
}

export default new CartService();
