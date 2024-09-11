import { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";

interface IAlertProps extends Omit<HTMLProps<HTMLDivElement>, 'content'> {
  className?: string;
  children: string | React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Alert: React.FC<IAlertProps> = ({ className, children, icon, iconPosition, ...rest }) => {
  return (
    <div className={twMerge(classNames(
      'flex', 'px-4', 'py-2', 'alert',
      { 'flex-row-reverse': iconPosition === 'right' },
    ), className)} {...rest}>
      {icon && (
        <div className={classNames('')}>
          {icon}
        </div>
      )}
      <div className={classNames('flex-grow flex justify-center items-center')}>
        {children}
      </div>
    </div>
  )
}

export { Alert };