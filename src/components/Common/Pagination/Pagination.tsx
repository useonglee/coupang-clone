import { Dispatch, useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { IPaginationAction } from "@hooks/usePaginationReducer";
import useShallowRouter from "@hooks/useShallowRouter";
import { IPaginationState } from "@/types/pagination";
import * as Style from "./Pagination.style";

interface IPaginationProps {
  isFixed?: boolean;
  totalElements?: number;
  paginationState: IPaginationState;
  dispatch: Dispatch<IPaginationAction>;
}

const Pagination = ({
  isFixed,
  totalElements,
  paginationState,
  dispatch,
}: IPaginationProps) => {
  const router = useRouter();
  const { startPage, offset, limit } = paginationState;

  const pages = useMemo(() => {
    const pageRangeArray = Array(10)
      .fill(startPage)
      .map((page, index) => page + index);

    return pageRangeArray;
  }, [startPage]);

  const handlePageClick = (curPage: number) => {
    dispatch({ type: "CHANGE_PAGE", offset: curPage });
  };

  const handlePrevPageClick = () => {
    dispatch({ type: "PREV_SKIP_PAGE" });
  };

  const handleNextPageClick = () => {
    dispatch({ type: "NEXT_SKIP_PAGE" });
  };

  useEffect(() => {
    useShallowRouter(router, { offset });
  }, [offset]);

  return (
    <Style.PaginationContainer isFixed={isFixed}>
      <Style.ArrowButton
        onClick={handlePrevPageClick}
        direction="left"
        disabled={startPage === 1}
      >
        &lt;
      </Style.ArrowButton>
      {pages.map((page) => (
        <Style.PaginationButton
          key={page}
          selected={offset === page}
          onClick={() => handlePageClick(page)}
          aria-current={offset === page ? "page" : undefined}
        >
          {page}
        </Style.PaginationButton>
      ))}
      <Style.ArrowButton
        onClick={handleNextPageClick}
        direction="right"
        disabled={startPage === 31}
      >
        &gt;
      </Style.ArrowButton>
    </Style.PaginationContainer>
  );
};

export default Pagination;
