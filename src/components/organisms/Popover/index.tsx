'use client';
import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useState } from 'react';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { Portal } from '@mui/base/Portal';
import _ from 'lodash';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

interface IPopoverProps {
  disabled?: boolean;
  toggle?: boolean;
  trigger: React.ReactNode;
  shouldClose?: boolean;
  children: ((props: IPopoverRef) => React.ReactNode) | React.ReactElement | React.ReactElement[] | React.ReactNode | React.ReactNode[] | null;
  bodyClassName?: string;
  position?: 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  portal?: boolean;
}

interface IPopoverRef {
  open: () => void;
  close: () => void;
}

type Type = <T>(
  props: IPopoverProps & { ref?: React.ForwardedRef<IPopoverRef> | any }
) => React.ReactNode;

const Popover: Type = forwardRef<IPopoverRef, IPopoverProps>(function SimpleAutocomplete<T>({
  children,
  toggle,
  trigger,
  disabled,
  bodyClassName,
  position = 'bottom-right',
  portal
}: IPopoverProps, ref: React.ForwardedRef<IPopoverRef>) {
  const [open, setOpen] = useState<boolean>(false);
  const [kill, setKill] = useState<boolean>(true);

  const handleClick = () => {
    if (disabled) return;
    if (open && !toggle) return;
    setOpen(prev => !prev);
  };

  const func = _.debounce(() => {
    setKill((prev) => !prev);
  }, 1);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useImperativeHandle(ref, () => ({
    open: handleOpen,
    close: handleClose
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
        return 'right-full top-1/2 transform -translate-y-1/2 mr-2';
      case 'right':
        return 'left-full top-1/2 transform -translate-y-1/2 ml-2';
      case 'top-left':
        return 'bottom-full left-0 mb-2';
      case 'top-right':
        return 'bottom-full right-0 mb-2';
      case 'bottom-left':
        return 'top-full left-0 mt-2';
      case 'bottom-right':
      default:
        return 'top-full right-0 mt-2';
    }
  }, [position]);

  const Container = portal ? Portal : React.Fragment;


  const Children = typeof children === 'function' ? children({ open: handleOpen, close: handleClose }) : children;

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div className={classNames('relative', 'cursor-pointer')}>
        <div onClick={handleClick}>
          {trigger}
        </div>
        {!kill && (
          <Container>
            <div
              className={twMerge(classNames(
                'absolute', { '!z-[-5] invisible': !open },
                'translate-y-[2px]', 'z-[2]',
                'p-4',
                'overflow-y-auto', 'bg-bling-light-bg-1', 'dark:bling-dark',
                'options-body', 'rounded-md',
                'shadow-lg', 'border border-slate-200', 'list-none',
                positionClasses
              ), bodyClassName)}>
              {Children}
            </div>
          </Container>
        )}
      </div>
    </ClickAwayListener>
  );
});

export { Popover, type IPopoverRef };
