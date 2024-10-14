'use client';
import React from 'react';
import classNames from 'classnames';
import { HTMLProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { SmallLoading } from '../icon/SmallLoading';

enum ButtonColorSize {
  // eslint-disable-next-line no-unused-vars
  xs = 'text-xs h-6',
  // eslint-disable-next-line no-unused-vars
  small = 'text-sm h-8',
  // eslint-disable-next-line no-unused-vars
  md = 'text-md h-10',
  // eslint-disable-next-line no-unused-vars
  base = 'text-base h-12',
  // eslint-disable-next-line no-unused-vars
  lg = 'text-lg h-14',
  // eslint-disable-next-line no-unused-vars
  xl = 'text-xl h-16',
  // eslint-disable-next-line no-unused-vars
  xxl = 'text-2xl h-18',
  // eslint-disable-next-line no-unused-vars
  xxxl = 'text-3xl h-20',
}

interface IButtonColorProps extends Omit<HTMLProps<HTMLButtonElement>, 'size'> {
  size?: ButtonColorSize;
  loading?: boolean;
  color?: string;
  type?: 'button' | 'submit' | 'reset';
}
const ButtonColor: React.FC<IButtonColorProps> = ({ className, children, size = ButtonColorSize.xs, loading, color = '#ffffff', type = 'button', ...rest }) => {
  return (
    <button
      type={type}
      className={twMerge(
        classNames(
          'w-auto',
          'h-auto',
          'aspect-square',
          'rounded-full',
          'cursor-pointer',
          'p-4',
          'flex',
          'justify-center',
          'items-center',
          'transition-all',
          'duration-300',
          'dark:bling-dark-border',
          'bling-light-border'
        ),
        size,
        className
      )}
           
      {...rest}
    >
          
      <div className='h-[25px] aspect-square rounded-full' style={{ backgroundColor: color }}></div>
      {loading ? <SmallLoading /> : children}
    </button>
  );
};

  
export { ButtonColor, ButtonColorSize };