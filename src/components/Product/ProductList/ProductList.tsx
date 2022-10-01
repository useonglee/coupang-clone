import ProductCard from "../ProductCard/ProductCard";
import { IProductList } from "@/types/products";
import * as Style from "./ProductList.style";

interface IProductListProps {
  productListData: IProductList;
}

const ProductList = ({ productListData }: IProductListProps) => {
  return (
    <Style.ProductListContainer>
      {productListData?.map((product) => (
        <ProductCard key={product.id} productData={product} />
      ))}
    </Style.ProductListContainer>
  );
};

export default ProductList;
