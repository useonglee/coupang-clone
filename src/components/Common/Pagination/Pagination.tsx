import { Dispatch, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { IPaginationAction } from "@hooks/usePaginationReducer";
import useShallowRouter from "@hooks/useShallowRouter";
import { IPaginationState } from "@/types/pagination";
import * as Style from "./Pagination.style";

// react-icon
import {
  RiArrowDropLeftLine as ArrowLeftIcon,
  RiArrowDropRightLine as ArrowRightIcon,
} from "react-icons/ri";

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
  }, [offset, startPage]);

  const handlePageClick = (curPage: number) => {
    dispatch({ type: "CHANGE_PAGE", offset: curPage });
    useShallowRouter(router, { offset: curPage });
  };

  const handlePrevPageClick = () => {
    dispatch({ type: "PREV_SKIP_PAGE" });
    useShallowRouter(router, { offset: startPage - 10 });
  };

  const handleNextPageClick = () => {
    dispatch({ type: "NEXT_SKIP_PAGE" });
    useShallowRouter(router, { offset: startPage + 10 });
  };

  useEffect(() => {
    dispatch({ type: "START_PAGE" });
  }, [startPage]);

  return (
    <Style.PaginationContainer isFixed={isFixed}>
      <Style.ArrowButton
        onClick={handlePrevPageClick}
        direction="left"
        disabled={startPage === 1}
      >
        <ArrowLeftIcon />
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
        <ArrowRightIcon />
      </Style.ArrowButton>
    </Style.PaginationContainer>
  );
};

export default Pagination;
