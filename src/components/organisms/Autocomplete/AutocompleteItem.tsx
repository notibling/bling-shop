import classNames from 'classnames';
import React, { HTMLProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface IAutocompleteItemProps extends HTMLProps<HTMLAnchorElement> {
  children: string | React.ReactNode | React.ReactNode[];
  value: any;

}
interface IAutocompleteItemWithSelectProps extends IAutocompleteItemProps {
  onSelect: (value: any) => void;
}

const AutocompleteItem: React.FC<IAutocompleteItemWithSelectProps> =
  ({ children, className, onSelect, value, ...rest }) => {
    return (

      <li>
        <a
          onClick={() => onSelect(value)}
          className={twMerge(
            classNames(

              'duration-300',
              'cursor-pointer',
              'bling-light-text', 'dark:bling-dark-text',
              'text-sm',
              'flex',
              'bg-transparent', 'dark:hover:!bling-dark-bg-2', ' hover:bling-light-bg-3',
              'flex-grow', 'py-2', 'px-3', 'flex-grow'
            ),
            className
          )}
          href='#'
          {...rest}
        >
          {children}
        </a>
      </li>
    );
  };


export { AutocompleteItem, type IAutocompleteItemProps, type IAutocompleteItemWithSelectProps };