import axiosInstance from "@api/axiosInstance";

class CheckoutService {
  async getOrderSheet(userId: string) {
    const { data } = await axiosInstance.get(`/ordersheet/${userId}`);

    return data;
  }
}

export default new CheckoutService();
