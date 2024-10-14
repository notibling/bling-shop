import React from 'react';
import { Logo } from '@/components/atoms';
import classNames from 'classnames';


interface ILoginAndRegisterCardProps {
  title?: string;
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
}

export const LoginAndRegisterCard: React.FC<ILoginAndRegisterCardProps> = ({ title, children, className }) => {
  return (
    <div className={classNames(className, 'w-full', 'bling-light', 'dark:bling-dark', 'rounded-brand', 'flex', 'justify-center', 'items-center', 'h-full', 'flex-col', 'rounded-md', 'overflow-hidden')}>
      <div className={classNames('w-full', 'flex', 'flex-col', 'items-center', 'justify-center', 'py-5', 'gap-10')}>
        <div className={classNames('w-full', 'flex', 'flex-col', 'py-5', 'items-center', 'justify-center', 'gap-10')}>
          <div className={classNames('flex', 'items-center', 'flex', 'justify-center', 'flex-col', 'gap-2')}>
            <Logo width={120} className='m-5'/>
          
            <h2 className={classNames('text-center', 'uppercase', 'text-md', 'bling-light-text', 'dark:bling-dark-text', 'font-bold', 'mt-0')}>{title}</h2>
          </div>

          <div className={classNames('w-[300px]', 'flex', 'flex-col', 'gap-6')}>{children}</div>
        </div>
      </div>
    </div>
  );
};
