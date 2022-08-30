import { useReducer } from "react";
import { IPaginationState } from "@/types/pagination";

export interface IPaginationAction extends Partial<IPaginationState> {
  type: "CHANGE_PAGE" | "NEXT_SKIP_PAGE" | "PREV_SKIP_PAGE" | "LIMIT";
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

    default:
      return state;
  }
};

const usePaginationReducer = () => {
  const paginationInitState = {
    startPage: 1,
    offset: 1,
    limit: 12,
  };

  const [paginationState, dispatch] = useReducer(reducer, paginationInitState);

  return { paginationState, dispatch };
};

export default usePaginationReducer;
