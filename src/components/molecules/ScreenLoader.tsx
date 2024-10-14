import React from 'react';
import classNames from 'classnames';
import { Loading } from '../atoms/Loading';
import { twMerge } from 'tailwind-merge';


interface IScreenLoaderProps {
  className?: string;
}
const ScreenLoader: React.FC<IScreenLoaderProps> = ({ className = '' }) => {
  return (
    <div className={twMerge(className, classNames(
      'fixed', 'w-full', 'h-full', 'top-0', 'bg-white bg-opacity-45',
      'flex', 'justify-center', 'items-center', 'left-0', 'z-[100]'
    ))}>
      <Loading loading={true} className={classNames('w-[150px]', 'h-[150px]')} />
    </div>
  );
};

export { ScreenLoader };


