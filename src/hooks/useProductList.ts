import { useQuery } from "react-query";
import ProductService from "@service/product.service";
import { IProductList } from "@/types/products";

const useProductList = (queryString: string): IProductList => {
  const { data: productListData } = useQuery(
    ["product-list", queryString],
    () => ProductService.fetchProductData(queryString),
    {
      keepPreviousData: true,
      enabled: !!queryString,
    }
  );

  return productListData;
};

export default useProductList;
