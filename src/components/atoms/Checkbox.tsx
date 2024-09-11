import classNames from "classnames";
import { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

enum CheckboxSize {
  xs = 'checkbox-xs',
  sm = 'checkbox-sm',
  md = 'checkbox-md',
  lg = 'checkbox-lg',
}

interface ICheckboxProps extends Omit<HTMLProps<HTMLInputElement>, 'size' | 'onChange'> {
  size?: CheckboxSize;

  onChange?: (value: boolean) => void;
  checked?: boolean;
  children?: React.ReactElement | React.ReactElement[];
}

const Checkbox: React.FC<ICheckboxProps> = ({  className, checked = false, onChange, children, size = CheckboxSize.sm, ...rest }) => {
  const handleChange = () => {
    if (typeof onChange === 'function') {
      onChange(!checked);
    } else {
      console.error('onChange is not a function');
    }
  };

  return (
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className={twMerge(classNames('checkbox','bling-light','dark:bling-dark-bg-2','border','border-opacity-20','dark:border-bling-dark-bg-5','border-bling-light-bg-4', size), className)}
        {...rest}
      />
  );
}

export { Checkbox, CheckboxSize }
