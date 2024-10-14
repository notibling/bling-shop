// Switch.tsx
import React from 'react';
import classNames from 'classnames';

interface SwitchProps {
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  switchClass?: string;
  sliderClass?: string;
}

const Switch: React.FC<SwitchProps> = ({ checked, onChange, className, switchClass, sliderClass }) => {
  return (
    <label className={classNames('relative inline-block cursor-pointer w-14 h-7', className)} aria-label='Toggle Switch'>
      <input type='checkbox' checked={checked} onChange={onChange} className='w-0 h-0 opacity-0' aria-checked={checked} />
      <span className={classNames('absolute cursor-pointer top-0 left-0 right-0 bottom-0 transition-colors duration-300 rounded-full', switchClass, { 'bg-gray-300': !checked, 'bg-emerald-500': checked })}></span>
      <span className={classNames('absolute left-1 top-1 w-5 h-5 bg-white transition-transform duration-300 rounded-full', sliderClass, { 'translate-x-0': !checked, 'translate-x-7': checked })}></span>
    </label>
  );
};

export { Switch };
