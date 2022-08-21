import { CustomSuspense } from "@components/Common";
import useProductList from "@hooks/useProductList";

const ProductListPage = () => {
  const productListData = useProductList("offset=0&limit=20&sorter=bestAsc");

  return (
    <CustomSuspense fallback={<div>Loading...</div>}>
      상품 목록 페이지입니다.
    </CustomSuspense>
  );
};

export default ProductListPage;
