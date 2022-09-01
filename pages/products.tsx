import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Layout, CustomSuspense, Pagination } from "@components/Common";
import { ProductList, SearchSortingBar } from "@components/Product";
import usePaginationReducer from "@hooks/usePaginationReducer";
import useProductList from "@hooks/useProductList";
import createQueryString from "@utils/createQueryString";

const ProductListPage = () => {
  const router = useRouter();
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [scrollThrottle, setScrollThrottle] = useState<boolean>(false);
  const [queryString, setQueryString] = useState<string>("");

  const { paginationState, dispatch } = usePaginationReducer();

  const productListData = useProductList(queryString);

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
    window.addEventListener("scroll", handleScrollEventThrottle);

    return () => {
      window.removeEventListener("scroll", handleScrollEventThrottle);
    };
  }, []);

  useEffect(() => {
    const { offset } = router.query;

    if (offset) {
      dispatch({ type: "CHANGE_PAGE", offset: Number(offset) || 1 });
    }

    setQueryString(createQueryString(router.query));
  }, [router, queryString]);

  return (
    <Layout isScrolling={isScrolling}>
      <SearchSortingBar limit={paginationState.limit} dispatch={dispatch} />
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
