'use client'
import Image from 'next/image';
import React from 'react';
import classNames from 'classnames';
import { Icon } from '@/components/atoms';

interface InformativeTagProps {
  title?: string;
  description?: string;
  backgroundColor?: string;
  width?: string;
  height?: string;
  className?: string;
  imageSrc?: string;
  iconName?: string;
  iconColor?: string;
  iconFill?: string;
  iconSize?: number;
  iconStyle?: string;
}

const InformativeTag: React.FC<InformativeTagProps> = ({
  title,
  description,
  imageSrc,
  iconName,
  backgroundColor = 'bling-light, dark:bling-dark',
  width = 'w-1/5',
  height = 'h-auto',
  className,
  iconColor = '#1C274C',
  iconSize = 24,
}) => {
  return (
    <>
      <div className={classNames(width, height, backgroundColor, 'select-none', 'overflow-hidden', 'flex', 'flex-grow', 'flex-row', 'justify-stretch', 'rounded-lg', className)}>
        <div className={classNames('w-2/5', 'h-full', 'flex', 'text-sm', 'box-border', 'overflow-hidden', 'aspect-square')}>
          {imageSrc && (
            <Image
              unoptimized={true}
              src={imageSrc}
              width="100"
              alt="Informative Tag"
              height="100"
              objectFit="cover"
              className={classNames('flex', 'select-none', 'bg-contain', 'bg-center', 'bg-no-repeat', 'text-sm', 'w-full', 'h-full', 'rounded-md', 'aspect-square')}
            />
          )}
          {iconName && (
            <div className={classNames('w-full', 'select-none', 'flex', 'h-full', 'flex-nowrap', 'items-center', 'justify-center')}>
              <Icon name={iconName} color={iconColor} size={iconSize} />
            </div>
          )}
        </div>
        <div className={classNames('w-3/5', 'select-none', 'lg:w-full', 'px-2', 'h-auto', 'flex-col', 'flex', 'items-center', 'justify-center', 'gap-1', 'p-2')}>
          {title && <span className={classNames('w-full', 'h-auto', 'text-slate-500', 'font-bold', 'text-sm', 'leading-4')}>{title}</span>}
          {description && <span className={classNames('w-full', 'h-auto', 'text-slate-500', 'text-xs', 'leading-4')}>{description}</span>}
        </div>
      </div>
    </>
  );
};

export { InformativeTag };
