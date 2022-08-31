import { IPaginationState } from "@/types/pagination";

/**
 * 상품 목록 조회에 필요한 쿼리스트링 생성 함수
 */
const createQueryString = ({
  offset = 1,
  limit = 12,
}: Partial<IPaginationState>) => {
  return `offset=${offset}&limit=${limit}&sorter=bestAsc`;
};

export default createQueryString;
