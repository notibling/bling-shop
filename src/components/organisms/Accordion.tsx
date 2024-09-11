'use client';
import { useEffect, useState } from 'react';
import classNames from 'classnames';

interface IAccordionProps {
  trigger: React.ReactNode;
  children: React.ReactNode | React.ReactNode[];
  defaultValue?: boolean;
  disabled?: boolean;
  className?: string | string[];
  childrenClassName?: string | string[] | Record<string, any> | any;
}

const Accordion: React.FC<IAccordionProps> = ({ trigger, children, childrenClassName, className, defaultValue = false, disabled = false }) => {
  const [open, setOpen] = useState(defaultValue);

  useEffect(() => {
    setOpen(defaultValue);
  }, [defaultValue]);

  return (
    <div
      className={classNames(
        'collapse',
        'flex-shrink-0',
        'bling-light-bg-2',
        'dark:bling-dark-bg-2',
        'duration-75',
        'rounded-md',
        'cursor-pointer',
        'collapse-arrow',
        { 'collapse-open': open, 'collapse-close': !open },
        className
      )}
    >
      <div
        className={classNames('overflow-hidden')}
        onClick={() => !disabled && setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-disabled={disabled}
      >
        {trigger}
      </div>
      {open && (
        <div className={classNames('collapse-content', 'relative', 'p-1', 'flex', 'flex-col', 'gap-1', 'text-[inherit]', childrenClassName)}>
          {children}
        </div>
      )}
    </div>
  );
};

export { Accordion };
