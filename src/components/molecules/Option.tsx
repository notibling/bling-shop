import classNames from 'classnames';
import React from 'react';

interface OptionProps {
  text?: string | string[] | number;
  className?: string | string[];
  onClick?: () => void;
  value?: string | number;
}

const Option: React.FC<OptionProps> = ({ text, onClick, className, value }) => {
  return (
    <div
      className={classNames(
        'w-full',
        'bg-transparent',
        'text-sm',
        'cursor-pointer',
        'dark:hover:text-white',
        'dark:bling-dark-text',
        'p-2',
        'dark:hover:!bling-dark-bg-2',
        'hover:bling-light-bg-3',
        className
      )}
      onClick={onClick}
      data-value={value} 
    >
      {text}
    </div>
  );
};

export { Option };
