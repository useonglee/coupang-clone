import { ChangeEvent, Dispatch, useCallback } from "react";
import { useRouter } from "next/router";
import useShallowRouter from "@hooks/useShallowRouter";
import { IPaginationAction } from "@hooks/usePaginationReducer";
import * as Style from "./SortingOption.style";
import { Radio } from "@components/@shared";

interface ISortingOption {
  id: string;
  name: string;
  value: string;
  help?: string;
}

interface ISortingOptionProps {
  sorter: string;
  dispatch: Dispatch<IPaginationAction>;
}

const SortingOption = ({ sorter, dispatch }: ISortingOptionProps) => {
  const router = useRouter();

  const SORT_OPTION = [
    {
      id: "bestAsc",
      name: "sorter",
      value: "쿠팡 랭킹순",
      help: "쿠팡 랭킹순은 판매 실적, 사용자 선호도,\n상품 정보 충실도 및 검색 정확도 등을\n종합적으로 고려한 순위입니다.",
    },
    {
      id: "salePriceAsc",
      name: "sorter",
      value: "낮은가격순",
    },
    {
      id: "salePriceDesc",
      name: "sorter",
      value: "높은가격순",
    },
    {
      id: "saleCountDesc",
      name: "sorter",
      value: "판매량순",
    },
    {
      id: "latestAsc",
      name: "sorter",
      value: "최신순",
    },
  ];

  const handleSortingOptionChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const sorter = event.target.id;

      dispatch({ type: "SORTER", sorter });
      useShallowRouter(router, { sorter });
    },
    [dispatch, router]
  );

  return (
    <Style.SortingOptionContainer>
      {SORT_OPTION.map(({ id, name, value, help }: ISortingOption) => (
        <Style.SortingOptionWrapper key={id}>
          {sorter === id && <Style.CheckedIcon />}
          <Radio
            id={id}
            name={name}
            value={value}
            checked={id === sorter}
            onChange={handleSortingOptionChange}
          />
          {help && (
            <Style.HelpInfoContainer>
              <Style.HelpInfoIcon />
              <Style.SpeechBubbleStyle>{help}</Style.SpeechBubbleStyle>
            </Style.HelpInfoContainer>
          )}
        </Style.SortingOptionWrapper>
      ))}
    </Style.SortingOptionContainer>
  );
};

export default SortingOption;
