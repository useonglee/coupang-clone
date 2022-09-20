import React, { ChangeEvent, useContext } from "react";
import { CheckBoxContext } from "./CheckboxGroup";

interface ICheckboxAllCheckItemProps {
  label?: string;
  list: number[];
}

const CheckboxAllCheckItem = ({ label, list }: ICheckboxAllCheckItemProps) => {
  const context = useContext(CheckBoxContext);

  const handleCheckAllItemChange = ({
    target,
  }: ChangeEvent<HTMLInputElement>) => {
    const checkedAllItemResult: number[] = [];

    if (target.checked) {
      list.forEach((item) => checkedAllItemResult.push(item));
    }

    context?.setCheckedAllItem(checkedAllItemResult);
  };

  const isCheckedAllItem = () => {
    if (!context) return false;

    return list.length === context.checkedAllItem.length;
  };

  return (
    <>
      <input
        id={label}
        type="checkbox"
        checked={isCheckedAllItem()}
        onChange={handleCheckAllItemChange}
      />
      <label htmlFor={label}>{label}</label>
    </>
  );
};

export default CheckboxAllCheckItem;
