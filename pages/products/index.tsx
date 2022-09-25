import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import {
  Layout,
  CustomSuspense,
  Pagination,
  Spinner,
} from "@components/@shared";
import { ProductList, SearchSortingBar } from "@components/Product";
import usePaginationReducer from "@hooks/usePaginationReducer";
import useProductList from "@hooks/useProductList";
import createQueryString from "@utils/createQueryString";
import { IPaginationState } from "@/types/pagination";

interface IProductListPageProps {
  queries: IPaginationState;
}

const ProductListPage = ({ queries }: IProductListPageProps) => {
  const { offset, limit, sorter } = queries;
  const router = useRouter();

  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [scrollThrottle, setScrollThrottle] = useState<boolean>(false);
  const [queryString, setQueryString] = useState<string>("");

  const { paginationState, dispatch } = usePaginationReducer(queries);

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
    if (offset || limit || sorter) {
      dispatch({ type: "CHANGE_PAGE", offset: Number(offset) || 1 });
      dispatch({ type: "LIMIT", limit: Number(limit) || 12 });
      dispatch({ type: "SORTER", sorter: (sorter as string) || "bestAsc" });
    }

    setQueryString(createQueryString(router.query));
  }, [dispatch, router]);

  return (
    <Layout title="쿠팡!">
      <SearchSortingBar paginationState={paginationState} dispatch={dispatch} />
      <CustomSuspense fallback={<Spinner />}>
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { offset, limit, sorter } = context.query;
  const queries = JSON.parse(JSON.stringify({ offset, limit, sorter }));

  return {
    props: { queries },
  };
};
