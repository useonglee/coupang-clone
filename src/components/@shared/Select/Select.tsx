import { useState } from "react";
import * as Style from "./Select.style";

interface ISelectProps {
  menuList: number[];
  selectedValue: number;
  setSelectedValue: (value: number) => void;
}

const Select = ({
  menuList,
  selectedValue,
  setSelectedValue,
}: ISelectProps) => {
  const [isMenuListOpen, setIsMenuListOpen] = useState<boolean>(false);

  const handleSelectedValueChange = (item: number) => {
    setSelectedValue(item);
  };

  return (
    <Style.SelectContainer
      onMouseOver={() => setIsMenuListOpen(true)}
      onMouseLeave={() => setIsMenuListOpen(false)}
    >
      <Style.SelectOpenButton type="button" open={isMenuListOpen}>
        <span>{selectedValue}개씩 보기</span>
        <Style.ArrowDownIcon open={isMenuListOpen} />
      </Style.SelectOpenButton>
      {isMenuListOpen && (
        <ul>
          {menuList.map((item: number) => (
            <Style.SelectItemWrapper key={item} open={isMenuListOpen}>
              <Style.SelectItem
                type="button"
                onClick={() => handleSelectedValueChange(item)}
              >
                <span>{item}개씩 보기</span>
                <span />
              </Style.SelectItem>
            </Style.SelectItemWrapper>
          ))}
        </ul>
      )}
    </Style.SelectContainer>
  );
};

export default Select;
