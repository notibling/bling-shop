'use client';
import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { SmallLoading } from '../icon/SmallLoading';
import Image from 'next/image';
import Link from 'next/link';

enum ButtonSize {
  xs = 'text-xs h-6',
  small = 'text-sm h-8',
  md = 'text-md h-10',
  base = 'text-base h-12',
  lg = 'text-lg h-14',
  xl = 'text-xl h-16',
  xxl = 'text-2xl h-18',
  xxxl = 'text-3xl h-20',
}

interface IButtonProps extends Omit<HTMLProps<HTMLButtonElement>, 'size' | 'type'> {
  id?: string;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  className?: string | string[] | Record<string, any> | any;
  imageClassName?: string | string[] | Record<string, any> | any;
  iconClassName?: string | string[] | Record<string, any> | any;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode | React.ReactNode[] | number | boolean | any;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  icon?: React.ReactNode;
  text?: string;
  image?: string;
  imageWidth?: number;
  showText?: boolean;
  imageHeight?: number;
  tabIndex?: number;
  role?: string;
  textClassName?: string | string[] | Record<string, any> | any;
  type?: any;
  link?: string;
  ariaLabel?: string;
}

const Button: React.FC<IButtonProps> = ({
  id,
  className,
  image,
  iconLeft,
  iconRight,
  icon,
  iconClassName,
  imageClassName,
  textClassName,
  children,
  text,
  size = ButtonSize.xs,
  loading,
  disabled,
  onClick,
  imageWidth = 20,
  imageHeight = 20,
  showText = true,
  link,
  ariaLabel,
  ...rest
}) => {
  const commonProps = {
    id,
    'aria-label': ariaLabel,
    className: twMerge(
      classNames(
        'rounded-md',
        'text-zinc-700',
        'hover:bling-bright',
        'gap-1',
        'flex',
        'justify-center',
        'items-center',
        'transition-all',
        'duration-75',
        { 'opacity-50 cursor-not-allowed': disabled },
        size
      ),
      className,
    ),
  };

  const buttonContent = (
    <>
      {(iconLeft || (!iconRight && icon)) && <span className={classNames('!p-0 flex !m-0', iconClassName)}>{iconLeft || icon}</span>}
      {image && <Image className={classNames('!p-0 flex !m-0', imageClassName)} unoptimized src={image} alt={image} width={imageWidth} height={imageHeight} />}
      {showText && text && <span className={classNames('!p-0 flex !m-0', textClassName)}>{text}</span>}
      {iconRight && <span className={classNames('!p-0 flex !m-0', iconClassName)}>{iconRight}</span>}
      {children && <span>{children}</span>}
      {loading ? <SmallLoading /> : null}
    </>
  );

  const button = (
    <button {...commonProps} onClick={onClick} disabled={disabled} {...rest}>
      {buttonContent}
    </button>
  );

  if (link) {
    return (
      <Link href={link}>
        {button}
      </Link>
    );
  }

  return button;
};

export { Button, ButtonSize };
