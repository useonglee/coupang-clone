import useProductList from "@hooks/useProductList";

export default function ProductListPage() {
  const productListData = useProductList("offset=0&limit=20&sorter=bestAsc");

  console.log("productListData: ", productListData);

  return <>상품 목록 페이지입니다.</>;
}
