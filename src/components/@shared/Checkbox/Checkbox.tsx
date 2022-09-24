import { ChangeEvent, useCallback, useContext, useMemo } from "react";
import { CheckBoxContext } from "./CheckboxGroup";
import { CheckboxContainer } from "./Checkbox.style";

export interface ICheckboxProps {
  value: number;
  label?: string;
}

const Checkbox = (props: ICheckboxProps) => {
  const { value, label, ...rest } = props;

  const context = useContext(CheckBoxContext);

  const handleCheckedItemChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      if (!context) return;

      const { checkedAllItem, setCheckedAllItem } = context;

      if (target.checked) {
        setCheckedAllItem([...checkedAllItem, value]);
      } else {
        const filteredCheckedItemList = checkedAllItem.filter(
          (item) => item !== value
        );

        setCheckedAllItem(filteredCheckedItemList);
      }
    },
    [context]
  );

  const isCheckedValue: boolean = useMemo(() => {
    if (!context) return false;

    return context.checkedAllItem.includes(value);
  }, [context]);

  return (
    <>
      <CheckboxContainer
        type="checkbox"
        name={label}
        checked={isCheckedValue}
        onChange={handleCheckedItemChange}
        {...rest}
      />
      <label htmlFor={label}>{label}</label>
    </>
  );
};

export default Checkbox;
