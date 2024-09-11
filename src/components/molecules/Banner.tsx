'use client';
import React, { HTMLProps,  useState } from 'react';
import classNames from 'classnames';
import { FaHeart } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';
import { Button } from '../atoms';
import Image from 'next/image';

enum BannerSize {
  xs = '',
  sm = '',
  base = '',
  md = '',
  lg = '',
  customlg = '',
}

interface IBannerProps extends Omit<HTMLProps<HTMLDivElement>, 'size' | 'title'> {
  size?: BannerSize;
  buttonColor?: string;
  buttonIcon?: React.ReactNode;
  buttonText?: string;
  buttonBackground?: string;
  category?: string;
  description?: string;
  badge?: string;
  badgeCountry?: string;
  priceBefore?: string;
  price?: string;
  offerPrice?: string;
  term?: string;
  image?: string;
  imageAlt?: string;
  polarized?: boolean;
  stock?: string;
  clarification?: string;
  title?: string | string[] | any;
  sponsor?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  categoryClassName?: string;
  button?: string;
  contentSize?: string;
  colOne?: string | React.ReactNode | string[] | any;
  colTwo?: string | React.ReactNode | string[] | any;
  colThree?: string | React.ReactNode | string[] | any;
  colOneClassName?: string | string[] | boolean;
  colTwoClassName?: string | string[] | boolean;
  colThreeClassName?: string | string[] | boolean;
}

const Banner: React.FC<IBannerProps> = ({
  className,
  size = BannerSize.base,
  clarification,
  category,
  title,
  description,
  badge,
  button,
  badgeCountry,
  buttonColor,
  buttonIcon,
  buttonText,
  buttonBackground,
  priceBefore,
  sponsor,
  price,
  offerPrice,
  term,
  image,
  imageAlt,
  polarized = false,
  stock,
  titleClassName,
  descriptionClassName,
  categoryClassName,
  contentSize,
  colOne = "Default content for colOne",
  colTwo,
  colThree,
  colOneClassName,
  colTwoClassName,
  colThreeClassName,
  ...rest
}) => {
  const isColOneActive = !!colOne;
  const isColTwoActive = !!colTwo;
  const isColThreeActive = !!colThree;

  return (
    <section className={classNames('w-full', 'h-full','mx-0,','gap-2','border-box', 'flex-col', 'flex', 'relative', '@container', 'shiny-effect', 'rounded-md', 'overflow-hidden', size, className)} {...rest} >
      <Image
        unoptimized
        width={100}
        height={100}
        src={image ? `${image}` : '../images/avif/fondo-banner.avif'}
        alt={imageAlt ? `${imageAlt}` : 'Default image'}
        className="object-cover w-full absolute h-full z-0"
      />
     
      
      {polarized && (
        <div
          className={classNames(
            'absolute',
            'w-full',
            'h-full',
            'bg-slate-900',
            'top-0',
            'bottom-0',
            'left-0',
            'right-0',
            'mx-auto',
            'opacity-60',
            'z-50',
            'transition-opacity',
            'duration-500',
            'ease-in-out',
            'hover:opacity-0'
          )}
        ></div>
      )}


      <div className="w-full h-full flex justify-between p-3 gap-2 z-[1] items-center flex-nowrap">
        {isColOneActive && (
          <div className={classNames(isColTwoActive ? 'w-1/2' : 'w-full', 'box-border', 'flex-shrink-0', 'items-center', 'justify-center', 'flex', 'flex-col', 'h-auto',  colOneClassName)}>
            <div className={classNames('w-full', 'h-auto', 'flex', 'flex-col', '@base:p-2', '@xs:p-2', '@lg:p-3',  'items-startr', 'justify-start', 'gap-1')}>
              {category && <div className={twMerge(classNames('w-full', 'select-none', 'h-auto', 'flex', 'flex-grow', '@base:text-xs', '@xs:text-xs', 'font-bold', 'text-slate-100', 'pointer-none'), categoryClassName)}>{category}</div>}
              {title && (
                <div
                  dangerouslySetInnerHTML={{ __html: title }}
                  className={twMerge(
                    classNames(
                      'w-full',
                      'h-auto',
                      'select-none',
                      'flex',
                      'flex-grow',
                      '@lg:text-5xl',
                      '@lg:leading-11',
                      '@base:text-3xl',
                      '@base:leading-8',
                      'font-semibold',
                      'text-slate-100',
                      '@xs:text-lg',
                      '@xs:leading-5',
                      'drop-shadow-lg',
                      'pointer-none'
                    ),
                    titleClassName
                  )}
                ></div>
              )}
              {description && (
                <div
                  className={twMerge(
                    classNames(
                      'w-full',
                      'select-none',
                      'h-auto',
                      'flex',
                      'flex-grow',
                      'text-sm',
                      'font-semibold',
                      '@lg:text-[18px]',
                      '@lg:leading-5',
                      '@xs:text-[12px]',
                      '@xs:leading-4',
                      '@base:text-[12px]',
                      '@base:leading-4',
                      'text-slate-200',
                      'drop-shadow-lg',
                      'pointer-none'
                    ),
                    descriptionClassName
                  )}
                >
                  {description}
                </div>
              )}
              {clarification && (
                <div className={classNames('w-full', 'h-auto', 'flex', 'flex-grow', 'text-xs', 'font-semibold', 'text-slate-100', '@xs:text-[10px]', '@xs:leading-5', '@base:text-[10px]', '@base:leading-5', 'drop-shadow-lg', 'pointer-none')}>
                  {clarification}
                </div>
              )}
            </div>
          </div>
        )}

        {isColTwoActive && (
          <div className={classNames(isColOneActive ? 'w-1/2' : 'w-full', 'box-border', 'flex-shrink-0', 'h-auto', 'flex', 'flex-col',  colTwoClassName)}>
            {colTwo}
          </div>
        )}
</div>

{(sponsor || button) && (
        <div className={classNames('w.full','p-3','z-20', 'bling-light','dark:bling-dark','rounded-md', '!bg-opacity-10', 'z-20',  'w-full', 'h-auto', 'flex', 'flex-grow', 'text-sm', 'justify-between', 'items-center', '@lg:flex', '@xs:hidden', '@base:hidden', )}>
          {sponsor && (
            <div className={classNames('w-auto', 'h-auto', 'flex', 'text-xs', 'select-none', 'overflow-hidden', 'p-1', 'pr-3', 'rounded-md', 'items-center', 'drop-shadow-lg', 'bling-light', 'dark:bling-dark', 'clickable')}>
              <FaHeart className={classNames('mx-2')}></FaHeart>
              <span className={classNames('p-1')}>{sponsor}</span>
            </div>
          )}
          {button && (
            <Button
              text={button}
              icon={buttonIcon}
              aria-label="See banner details"
              className={classNames(
                'btn-md',
                'w-auto',
                'h-auto',
                'flex',
                'text-xs',
                'select-none',
                'overflow-hidden',
                'items-center',
                'rounded-md',
                'select-none',
                'bling-btn-primary',
                'dark:bling-btn-primary-dark',
                'px-5',
                'drop-shadow-lg',
                buttonColor ? `${buttonColor}` : 'text-slate-700',
                buttonBackground ? `${buttonBackground}` : 'bling-light',
                'clickable'
              )}
            />
          )}
        </div>
      )}
  

    
    </section>
  );
};

export { Banner, BannerSize };
