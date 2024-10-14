// components/Separator.tsx

import React from 'react';

interface SeparatorProps {
  textStart?: string;
  textMiddle?: string;
  textEnd?: string;
  noText?: boolean; // e.g., true (use "line" instead of "Line" for consistency with React props naming conventions)
  size?: string; // e.g., "my-4"
  className?: string; // e.g., "text-red-500", "border-blue-500"
  textClassName?: string; // e.g., "text-red-500", "border-blue-500"
  borderClassName?: string; // e.g., "text-red-500", "border-blue-500"
}

const Separator: React.FC<SeparatorProps> = ({ noText, textStart, textClassName, borderClassName, textMiddle, textEnd, size = 'my-4', className = 'text-gray-500 border-gray-300 text-md' }) => {
  return (
    <div className={'w-full flex items-center '}>
      {textStart && (
        <div className={` ${className} w-full h-auto flex flex-nowrap flex-row`}>
          <div className={`w-fit h-auto  bling-light-text dark:bling-dark-text  mr-2 ${textClassName} flex flex-row justify-start items-center`}>
            <span>{textStart}</span>
          </div>
          <div className={`w-full border-b bling-light-border dark:bling-dark-border ${size} ${borderClassName}`}></div>
        </div>
      )}

      {noText && (
        <div className={` ${className} w-full h-auto flex flex-nowrap flex-row`}>
          <div className={`w-full border-b  bling-light-border dark:bling-dark-border ${size} ${borderClassName}`}></div>
        </div>
      )}

      {textMiddle && (
        <div className={`${className} w-full h-auto flex flex-nowrap flex-row`}>
          <div className={`w-full border-b ling-light-border dark:bling-dark-border ${size} ${borderClassName}`}></div>
          <div className={`w-fit h-auto mx-2 ${textClassName} bling-light-text dark:bling-dark-text  flex flex-row justify-center items-center`}>
            <span>{textMiddle}</span>
          </div>
          <div className={`w-full border-b bling-light-border dark:bling-dark-border ${size} ${borderClassName}`}></div>
        </div>
      )}

      {textEnd && (
        <div className={`${className} w-full h-auto flex flex-nowrap flex-row`}>
          <div className={`w-full border-b bling-light-border dark:bling-dark-border ${size} ${borderClassName}`}></div>
          <div className={`w-fit h-auto ml-2 ${textClassName} bling-light-text dark:bling-dark-text flex flex-row justify-end items-center`}>
            <span>{textEnd}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export { Separator };
