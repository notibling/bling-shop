import React from 'react';
import classNames from 'classnames';
import { Button, Title } from '@/components/atoms';

interface ContainerProps {
  id?: string;
  width?: string;
  button?: React.ReactNode;
  buttonText?: string;
  className?: string | string[] | Record<string, any>;
  buttonIcon?: React.ReactNode;
  height?: string;
  title?: string;
  icon?: React.ReactNode;
  description?: string;
  descriptionClassName?: string | string[] | Record<string, any>;
  children?: React.ReactNode;
  buttonSrc?: string;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  iconColor?: string;
  tooltipClassName?: string | string[] | Record<string, any>;
  iconSize?: number;
  titleIconName?: string;
  titleTooltip?: string;
  titleTooltipPosition?: 'left' | 'right' | 'top' | 'bottom' | 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right' | 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom';
  titleClassName?: string | string[] | Record<string, any>;
  titleClassNameContainer?: string | string[] | Record<string, any>;
}

const Container: React.FC<ContainerProps> = ({
  id,
  title,
  className,
  description,
  titleClassName,
  descriptionClassName,
  titleTooltip,
  children,
  width,
  height,
  buttonIcon,
  buttonText,
  button,
  level = 'h4',
  iconColor,
  iconSize,
  titleIconName,
  tooltipClassName,
  buttonSrc,
  titleClassNameContainer,
  titleTooltipPosition,
  icon,
}) => {
  return (
    <div id={id} className={classNames('p-2 rounded-md  flex', className)} style={{ width, height }}>
      {title && (
        <div className="w-full h-auto flex flex-row flex-nowrap justify-between items-center gap-1">
          <Title
            titleClassNameContainer={classNames('w-auto leading-4', titleClassNameContainer)}
            titleClassName={titleClassName}
            title={title}
            level={level}
            description={description}
            descriptionClassName={descriptionClassName}
            icon={icon}
            iconName={titleIconName}
            iconColor={iconColor}
            tooltipClassName={tooltipClassName}
            iconSize={iconSize}
            tooltip={!!titleTooltip}
            tooltipContent={titleTooltip}
            tooltipPosition={titleTooltipPosition}
          />
          {button && <Button text={buttonText} src={buttonSrc} icon={buttonIcon} iconClassName="bling-light-border dark:bling-dark" className="w-[35px] h-[35px] bling-btn-primary bling-light dark:bling-dark p-0 flex rounded-full m-0" />}
        </div>
      )}

      {children}
    </div>
  );
};

export { Container };
