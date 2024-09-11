'use client';
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Button, Title } from '@/components/atoms';

interface NotifyProps {
  icon?: React.ReactNode | React.ReactNode[] | number | boolean | any;
  title?: string;
  description?: string;
  showCloseButton?: boolean;
  className?: string | string[] | Record<string, any> | any;
}
class Notify extends React.Component<NotifyProps> {
  render() {
    const { icon, title, description, showCloseButton,className } = this.props;

    return (
      <div className={`box-border flex flex-row items-start justify-between w-full h-auto gap-2 p-2 bg-white rounded-md dark:bg-slate-800 ${className}`}>
        <Title
          icon={icon}
          level="h6"
          titleClassName="text-[8px]"
          descriptionClassName="text-[10px] overflow-hidden text-xs text-left dark:text-slate-400 text-slate-700 hover:text-clip text-ellipsis line-clamp-3 lg:line-clamp-3"
          title={title}
          description={description}
        />

        {showCloseButton && (
          <Button
            icon={<FaTimes />}
            className="w-[20px] h-[20px] p-1 box-border rounded-md flex bg-slate-100 dark:bg-slate-900 hover:bg-red-500 hover:text-white dark:hover:bg-red-500 dark:hover:text-white flex-row items-center justify-center text-slate-700"
          />
        )}
      </div>
    );
  }
}

export { Notify };

