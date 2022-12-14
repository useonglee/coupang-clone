import { useReducer } from "react";
import { IPaginationState } from "@/types/pagination";

export interface IPaginationAction extends Partial<IPaginationState> {
  type:
    | "CHANGE_PAGE"
    | "NEXT_SKIP_PAGE"
    | "PREV_SKIP_PAGE"
    | "LIMIT"
    | "START_PAGE"
    | "SORTER";
}

const reducer = (state: IPaginationState, action: IPaginationAction) => {
  const newPaginationState = { ...state };

  switch (action.type) {
    case "CHANGE_PAGE":
      newPaginationState.offset = Number(action.offset);
      return newPaginationState;

    case "NEXT_SKIP_PAGE":
      newPaginationState.startPage += 10;
      newPaginationState.offset = newPaginationState.startPage;

      return newPaginationState;

    case "PREV_SKIP_PAGE":
      newPaginationState.startPage -= 10;
      newPaginationState.offset = newPaginationState.startPage;

      return newPaginationState;

    case "LIMIT":
      newPaginationState.limit = Number(action.limit);
      return newPaginationState;

    case "START_PAGE":
      const { offset, startPage } = newPaginationState;

      const currentStartPage = Number(Math.floor(offset / 10) + "1");
      const result = currentStartPage < 11 ? startPage : currentStartPage;

      newPaginationState.startPage = result;
      return newPaginationState;

    case "SORTER":
      newPaginationState.sorter = String(action.sorter);
      return newPaginationState;

    default:
      return state;
  }
};

const usePaginationReducer = ({ offset, limit, sorter }: IPaginationState) => {
  const paginationInitState = {
    startPage: 1,
    offset: offset || 1,
    limit: limit || 12,
    sorter: sorter || "bestAsc",
  };

  const [paginationState, dispatch] = useReducer(reducer, paginationInitState);

  return { paginationState, dispatch };
};

export default usePaginationReducer;
