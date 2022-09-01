import { Dispatch, useCallback, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { Select } from "@components/Common";
import { IPaginationAction } from "@hooks/usePaginationReducer";
import useShallowRouter from "@hooks/useShallowRouter";
import * as Style from "./SearchSortingBar.style";

/**
 * limit: 상품 목록 노출 수 (12 or 24)
 */
interface ISearchSortingBarProps {
  limit: number;
  dispatch: Dispatch<IPaginationAction>;
}

const SearchSortingBar = ({ limit, dispatch }: ISearchSortingBarProps) => {
  const router = useRouter();

  const LIST_LIMIT = useMemo(() => {
    const limitSetup = [12, 24];
    const availableLimitList = limitSetup.filter((value) => value !== limit);

    return availableLimitList;
  }, [limit]);

  const handleListLimitChange = useCallback(
    (value: number) => {
      dispatch({ type: "LIMIT", limit: value });
    },
    [dispatch]
  );

  useEffect(() => {
    useShallowRouter(router, { limit });
  }, [limit]);

  return (
    <Style.SearchSortingBarContainer>
      <Select
        menuList={LIST_LIMIT}
        selectedValue={limit}
        setSelectedValue={handleListLimitChange}
      />
    </Style.SearchSortingBarContainer>
  );
};

export default SearchSortingBar;
