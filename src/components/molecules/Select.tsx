'use client';
import React, { useState, useRef, forwardRef, useImperativeHandle, ReactElement } from 'react';

import classNames from 'classnames';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { Icon } from '@/components/atoms';
import { AltArrowDown } from '@/icons/tsx';
import { Option } from './Option';


interface SelectProps {
  trigger?: React.ReactNode;
  children?: React.ReactNode | string | string[] | any;
  className?: string;
  buttonClassName?: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  text?: string ;
  value?: string | number;
  onChange?: (value: string | number) => void;
  defaultValue?: string | number;
  target?: HTMLElement | null;
  description?: string | number;
}
const Select = forwardRef(function Select(
  { trigger, children, className, buttonClassName, text,  onChange, defaultValue, position = 'bottom' }: SelectProps,
  ref
) {
  const [open, setOpen] = useState(false);
  const [selectedText, setSelectedText] = useState<string | number | undefined>(defaultValue || text || '');

  const SelectRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    open: () => setOpen(true),
    close: () => setOpen(false),
  }));

  const handleClick = () => setOpen(!open);

  const handleOptionClick = (value: string | number, text: string) => {
    setSelectedText(text);
    setOpen(false);
    if (onChange) {
      onChange(value);
    }
  };

  const positionClasses = classNames({
    'bottom-full mb-2': position === 'top',
    'top-full mt-2': position === 'bottom',
    'right-full mr-2': position === 'left',
    'left-full ml-2': position === 'right',
  });

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div
        onClick={handleClick}
        className={classNames(
          'w-full',
          'bling-light-bg-3',
          'h-auto',
          'px-0',
          'rounded-md',
          'relative',
          'bling-light-text',
          'dark:bling-dark-text',
          '!shadow-none',
          '!outline-none',
          'dark:bling-dark-bg-1',
          'dark:border-bling-dark-bg-3',
          className
        )}
        ref={SelectRef}
      >
        <div className="w-full h-auto flex flex-row">
          {trigger ? (
            <div className="grow">{trigger}</div>
          ) : (
            <div className="w-full h-auto flex flex-row">
              <Option className="p-3 hover:!bg-transparent" text={selectedText} />
            </div>
          )}
          <div
            className={classNames(
              'px-3',
              'bling-light-text',
              'dark:bling-dark-text',
              'flex',
              'm-1',
              'rounded-md',
              'items-center',
              'dark:bling-dark-bg-2',
              'bling-light',
              'justify-center',
              buttonClassName
            )}
          >
            <Icon name={AltArrowDown} size={15} frozen={false} className={classNames({ 'rotate-180': open })} />
          </div>
        </div>
        {open && (
          <ul className={classNames('w-full','h-auto', 'absolute','z-10', positionClasses, 'bg-white', 'shadow-md', 'rounded-md', 'border', 'bling-light-border', 'dark:bling-dark-border', '!bg-opacity-90', 'bling-light', 'dark:bling-dark-bg-1')}>
            {children}
          </ul>
        )}
      </div>
    </ClickAwayListener>
  );
});

export { Select };