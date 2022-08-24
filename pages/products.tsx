import { CustomSuspense } from "@components/Common";
import { ProductList } from "@components/Product";
import useProductList from "@hooks/useProductList";

const ProductListPage = () => {
  const productListData = useProductList("offset=2&limit=20&sorter=bestAsc");

  return (
    <CustomSuspense fallback={<div>Loading...</div>}>
      <ProductList productListData={productListData} />
    </CustomSuspense>
  );
};

export default ProductListPage;
