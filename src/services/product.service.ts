import axios from "axios";

class ProductService {
  async fetchProductData(queryString: string) {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_HOST}/products?${queryString}`
    );

    return data;
  }
}

export default new ProductService();
