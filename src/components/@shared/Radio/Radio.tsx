import { ChangeEvent } from "react";
import * as Style from "./Radio.style";

interface IRadioProps {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Radio = ({ id, name, value, checked, onChange }: IRadioProps) => {
  return (
    <>
      <Style.RadioContainer
        type="radio"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{value}</label>
    </>
  );
};

export default Radio;
