import axiosInstance from "@api/axiosInstance";

class CartService {
  async fetchCartList() {
    const { data } = await axiosInstance.get("/cart");

    return data;
  }
}

export default new CartService();
