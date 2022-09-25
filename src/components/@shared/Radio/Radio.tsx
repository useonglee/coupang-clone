import { ChangeEvent } from "react";

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
      <input
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
