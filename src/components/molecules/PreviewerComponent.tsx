import classNames from 'classnames';
import React from 'react';

interface PreviewerComponentProps {
  name?: string;
  children?: React.ReactNode;
}

const PreviewerComponent: React.FC<PreviewerComponentProps> = ({ children, name}) => {
  return (
    <>
      <div className='w-auto !h-auto flex flex-row items-center justify-center relative my-3'>
        <span className='w-fit px-2 z-10 text-slate-600 font-bold py-1 text-xs top-[-15px] absolute m-auto left-0 right-0 rounded-md bg-bling-yellow'>{name}</span>
        <div className={classNames('w-full', '!h-auto', 'rounded-2xl', 'backdrop-blur', 'dark:bling-bg-dots-dark-bg-1', 'bling-bg-dots-light', 'border', 'bling-light-border', 'dark:bling-dark-border', 'p-6')}>
          {children}
        </div>
      </div>
    </>
  );
};

export {PreviewerComponent};
