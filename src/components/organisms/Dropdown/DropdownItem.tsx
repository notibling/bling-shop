'use client';
import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

interface IDropdownItemProps extends HTMLProps<HTMLLIElement> {
  closeOnClick?: boolean;
  shouldClose?: boolean;  // Añadimos shouldClose a la interfaz
  close?: () => void;
}

const DropdownItem: React.FC<IDropdownItemProps> = ({ 
  children, 
  className, 
  closeOnClick = true, 
  shouldClose = true, // Valor predeterminado para shouldClose
  close, 
  ...restProps 
}) => {
  const onClick = (event: React.MouseEvent<HTMLLIElement>) => {
    if (React.Children.count(children) !== 1 || (typeof children !== 'string' && typeof children !== 'number' && !React.isValidElement(children))) {
      console.warn('DropdownItem expects a single child of type string, number, or valid React element.');
      return;
    }

    if (closeOnClick && shouldClose && close) {
      close();
    }

    if (restProps.onClick) {
      restProps.onClick(event);
    }
  };

  return (
    <li
      onClick={onClick}
      className={twMerge(classNames('text-sm', 'h-auto', 'flex', 'p-1', 'gap-1'), className)}
      {...restProps}
    >
      {children}
    </li>
  );
};

export { DropdownItem, type IDropdownItemProps };
