import { useQuery } from "react-query";
import ProductService from "@service/product.service";
import createQueryString from "@utils/createQueryString";
import { IProductList } from "@/types/products";
import { IPaginationState } from "@/types/pagination";

const useProductList = (queries: IPaginationState): IProductList => {
  const { data: productListData } = useQuery(
    ["product-list", createQueryString(queries)],
    () => ProductService.fetchProductData(createQueryString(queries)),
    {
      keepPreviousData: true,
      enabled: !!createQueryString(queries),
    }
  );

  return productListData;
};

export default useProductList;
