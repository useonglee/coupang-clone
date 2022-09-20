import { ForwardRefExoticComponent } from "react";
import InternalCheckbox, { ICheckboxProps } from "./Checkbox";
import CheckboxAllCheckItem from "./CheckboxAllCheckItem";
import CheckboxGroup from "./CheckboxGroup";

interface ICompoundedComponent
  extends ForwardRefExoticComponent<ICheckboxProps> {
  Group: typeof CheckboxGroup;
  AllCheckItem: typeof CheckboxAllCheckItem;
}

const Checkbox = InternalCheckbox as ICompoundedComponent;
Checkbox.Group = CheckboxGroup;
Checkbox.AllCheckItem = CheckboxAllCheckItem;

export default Checkbox;
