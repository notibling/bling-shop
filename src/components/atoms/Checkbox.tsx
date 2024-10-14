import React from 'react';
import classNames from 'classnames';
import { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

enum CheckboxSize {
  // eslint-disable-next-line no-unused-vars
  xs = 'checkbox-xs',
  // eslint-disable-next-line no-unused-vars
  sm = 'checkbox-sm',
  // eslint-disable-next-line no-unused-vars
  md = 'checkbox-md',
  // eslint-disable-next-line no-unused-vars
  lg = 'checkbox-lg',
}

interface ICheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  size?: CheckboxSize;
  // eslint-disable-next-line no-unused-vars
  onChange?: (checked: boolean) => void;
  checked?: boolean;
  label?: React.ReactNode;
}

const Checkbox: React.FC<ICheckboxProps> = ({
  className,
  checked = false,
  onChange,
  label,
  size = CheckboxSize.sm,
  ...rest
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.checked);
  };

  return (
    <label className='flex items-center cursor-pointer'>
      <input
        type='checkbox'
        checked={checked}
        onChange={handleChange}
        className={twMerge(
          classNames(
            'checkbox',
            'bling-light',
            'dark:bling-dark-bg-2',
            'border',
            'border-opacity-20',
            'dark:border-bling-dark-bg-5',
            'border-bling-light-bg-4',
            size
          ),
          className
        )}
        {...rest}
      />
      {label && <span className='ml-2'>{label}</span>}
    </label>
  );
};

export { Checkbox, CheckboxSize };
