import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useMemo,
  useState,
} from "react";

interface ICheckboxContext {
  checkedAllItem: number[];
  setCheckedAllItem: Dispatch<SetStateAction<number[]>>;
}

export const CheckBoxContext = createContext<ICheckboxContext | null>(null);

interface ICheckboxGroupProps {
  children: ReactNode;
}

const CheckboxGroup = ({ children }: ICheckboxGroupProps) => {
  const [checkedAllItem, setCheckedAllItem] = useState<number[]>([]);

  const contextValue = useMemo(
    () => ({ checkedAllItem, setCheckedAllItem }),
    [checkedAllItem, setCheckedAllItem]
  );

  return (
    <CheckBoxContext.Provider value={contextValue}>
      {children}
    </CheckBoxContext.Provider>
  );
};

export default CheckboxGroup;
