'use client';
import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import _ from 'lodash';
import { twMerge } from 'tailwind-merge';
import { IDropdownItemProps } from '..';

interface IDropdownProps {
  disabled?: boolean;
  toggle?: boolean;
  trigger: React.ReactNode;
  shouldClose?: boolean;
  children: React.ReactElement | React.ReactElement[] | null;
  bodyClassName?: string;
  position?: 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

interface IDropdownRef {
  open: () => void;
  close: () => void;
}


type Type = <T>(
  props: IDropdownProps & { ref?: React.ForwardedRef<IDropdownRef> | any }
) => React.ReactNode;

const ClickAwayListener: React.FC<{ onClickAway: () => void }> = ({ children, onClickAway }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickAway();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClickAway]);

  return <div ref={ref}>{children}</div>;
};

const Dropdown: Type = forwardRef<IDropdownRef, IDropdownProps>(function Dropdown<T>({
  children,
  trigger,
  disabled,
  bodyClassName,
  position = 'bottom-left'
}: IDropdownProps, ref: React.ForwardedRef<IDropdownRef>) {
  const [open, setOpen] = useState<boolean>(false);
  const [kill, setKill] = useState<boolean>(true);

  const items = React.Children.map(children, (item) => {
    if (!item) return null;
    const _itemProps = item.props as IDropdownItemProps;
    return React.cloneElement(item, { ..._itemProps, close: () => handleItemClick(_itemProps.shouldClose) });
  });

  const handleItemClick = (shouldClose: boolean = true) => {
    if (shouldClose) setOpen(false);
  };

  const handleClick = () => {
    if (disabled) return;
    setOpen(prev => !prev);
  };

  const func = _.debounce(() => {
    setKill((prev) => !prev);
  }, 1);

  useImperativeHandle(ref, () => ({
    open() {
      setOpen(true);
    },
    close() {
      setOpen(false);
    }
  }), []);

  useEffect(() => {
    if (!open) func();
    else setKill(false);
  }, [open]);

  const positionClasses = useMemo(() => {
    switch (position) {
      case 'top':
        return 'bottom-full left-1/2 transform -translate-x-1/2 mb-2';
      case 'bottom':
        return 'top-full left-1/2 transform -translate-x-1/2 mt-1';
      case 'left':
        return 'right-full top-1/2 transform -translate-y-1/2 mr-1';
      case 'right':
        return 'left-full top-1/2 transform -translate-y-1/2 ml-1';
      case 'top-left':
        return 'bottom-full left-0 mb-1';
      case 'top-right':
        return 'bottom-full right-0 mb-1';
      case 'bottom-left':
        return 'top-full right-0 mt-1';
      case 'bottom-right':
        return 'top-full left-0 mt-1';
      default:
        return 'top-full -translate-x-0 mt-1';
    }
  }, [position]);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div className={classNames('relative', '', 'cursor-pointer')}>
        <div onClick={handleClick}>
          {trigger}
        </div>
        {!kill && (
          <ul
            className={twMerge(classNames(
              'absolute', { '!z-[-5] invisible hidden': !open },
              'translate-y-[2px]', 'z-[2]',
              'overflow-y-auto', 'bling-light-bg-2', 'dark:bling-dark',
              'options-body', 'rounded-md',
              'shadow-md', 'list-none', 'border', 'bling-light-border', 'dark:bling-dark-border', '!bg-opacity-90', 'dark:bling-dark-bg-1',
              positionClasses
            ), bodyClassName)}>
            {items}
          </ul>
        )}
      </div>
    </ClickAwayListener>
  );
});

export { Dropdown, type IDropdownRef };
