import { Dispatch, useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import { Select } from "@components/@shared";
import SortingOption from "./SortingOption/SortingOption";
import { IPaginationState } from "@/types/pagination";
import { IPaginationAction } from "@hooks/usePaginationReducer";
import useShallowRouter from "@hooks/useShallowRouter";
import * as Style from "./SearchSortingBar.style";

/**
 * limit: 상품 목록 노출 수 (12 or 24)
 */
interface ISearchSortingBarProps {
  paginationState: IPaginationState;
  dispatch: Dispatch<IPaginationAction>;
}

const SearchSortingBar = ({
  paginationState,
  dispatch,
}: ISearchSortingBarProps) => {
  const { limit, sorter } = paginationState;
  const router = useRouter();

  const LIST_LIMIT = useMemo(() => {
    const limitSetup = [12, 24];
    const availableLimitList = limitSetup.filter((value) => value !== limit);

    return availableLimitList;
  }, [limit]);

  const handleListLimitChange = useCallback(
    (value: number) => {
      dispatch({ type: "LIMIT", limit: value });
      useShallowRouter(router, { limit: value });
    },
    [dispatch, router]
  );

  return (
    <Style.SearchSortingBarContainer>
      <SortingOption sorter={sorter} dispatch={dispatch} />
      <Select
        menuList={LIST_LIMIT}
        selectedValue={limit}
        setSelectedValue={handleListLimitChange}
      />
    </Style.SearchSortingBarContainer>
  );
};

export default SearchSortingBar;
