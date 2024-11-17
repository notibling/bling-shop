'use client';

import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { SmallLoading } from '../icon/SmallLoading';
import Image from 'next/image';
import Link from 'next/link';

type ButtonSize = 'xs' | 'small' | 'md' | 'base' | 'lg' | 'xl' | 'xxl' | 'xxxl';

type Theme = 'default' | 'success' | 'error' | 'warning' | 'info';

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
  theme?: Theme;
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
  size = 'xs', // Default to 'xs' size
  theme = 'default',
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
  const themeClasses = {
    default: 'dark:bling-dark-bg-3 dark:bling-dark-text bling-light-bg-1 bling-light-text bling-light-border border',
    success: 'bg-green-500 text-white hover:bg-green-600',
    error: 'bg-red-500 text-white hover:bg-red-600',
    warning: 'bg-yellow-500 text-black hover:bg-yellow-600',
    info: 'bg-blue-500 text-white hover:bg-blue-600',
  };

  // Definimos las clases de tamaño usando una función simple para asignar tamaños
  const sizeClasses = {
    xs: 'text-xs h-5 px-1 py-1',   // Reducido más pequeño
    sm: 'text-xs h-6 px-2 py-1',      // Tamaño pequeño con padding ajustado
    md: 'text-sm h-8 px-3 py-2',      // Un poco más grande pero aún reducido
    base: 'text-base h-10 px-4 py-3',  // Base con tamaño y padding más pequeño
    lg: 'text-lg h-12 px-5 py-4',     // Reducido pero legible
    xl: 'text-xl h-14 px-6 py-5',     // Normal, pero con ajuste en padding
    xxl: 'text-2xl h-16 px-7 py-6',   // Escala aún más pequeño
    xxxl: 'text-3xl h-18 px-8 py-7',
  };

  const commonProps = {
    id,
    'aria-label': ariaLabel,
    className: twMerge(
      classNames(
        'rounded-md',
        'gap-1',
        'flex',
        'justify-center',
        'items-center',
        'transition-all',
        'duration-75',
        { 'opacity-50 cursor-not-allowed': disabled },
        sizeClasses[size], // Asignamos el tamaño de acuerdo al prop 'size'
        themeClasses[theme] // Aplicamos las clases del tema aquí
      ),
      className
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

export { Button };
