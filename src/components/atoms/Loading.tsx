import React from 'react';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';


interface ILoadingProps {
  loading: boolean;
  className?: string;
}

const Loading: React.FC<ILoadingProps> = ({ loading, className }) => {
  return loading && (
    <svg className={twMerge(classNames("animate-spin h-5 w-5 text-bling-yellow"), className)} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <circle
        className={classNames("opacity-25")} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path
        className={classNames("opacity-75")} fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  )
}

export { Loading }