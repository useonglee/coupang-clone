import { useQuery } from "react-query";
import ProductService from "@service/product.service";

function useProductList(queryString: string) {
  const { data: productListData } = useQuery(
    ["product-list", queryString],
    () => ProductService.fetchProductData(queryString),
    {
      keepPreviousData: true,
      enabled: !!queryString,
    }
  );

  return productListData;
}

export default useProductList;
