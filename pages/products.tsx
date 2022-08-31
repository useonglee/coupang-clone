import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Layout, CustomSuspense, Pagination } from "@components/Common";
import { ProductList } from "@components/Product";
import usePaginationReducer from "@hooks/usePaginationReducer";
import useProductList from "@hooks/useProductList";
import { IPaginationState } from "@/types/pagination";

const ProductListPage = () => {
  const router = useRouter();
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [scrollThrottle, setScrollThrottle] = useState<boolean>(false);

  const { paginationState, dispatch } = usePaginationReducer();

  const productListData = useProductList(
    router.query as unknown as IPaginationState
  );

  const handleScrollEventCallback = () => {
    const { scrollY, innerHeight } = window;
    const scrollHeight = document.documentElement.scrollHeight;

    if (scrollY + innerHeight >= scrollHeight - 169) {
      setIsScrolling(false);
      return;
    }

    setIsScrolling(scrollY > 0);
  };

  const handleScrollEventThrottle = () => {
    if (scrollThrottle) return;
    else {
      setScrollThrottle(true);

      setTimeout(() => {
        handleScrollEventCallback();
        setScrollThrottle(false);
      }, 200);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", handleScrollEventThrottle);

    return () => {
      window.removeEventListener("scroll", handleScrollEventThrottle);
    };
  }, []);

  return (
    <Layout isScrolling={isScrolling}>
      <CustomSuspense fallback={<div>Loading...</div>}>
        <ProductList productListData={productListData} />
        {isScrolling && (
          <Pagination
            isFixed={isScrolling}
            totalElements={productListData?.length}
            paginationState={paginationState}
            dispatch={dispatch}
          />
        )}
        <Pagination
          totalElements={productListData?.length}
          paginationState={paginationState}
          dispatch={dispatch}
        />
      </CustomSuspense>
    </Layout>
  );
};

export default ProductListPage;
