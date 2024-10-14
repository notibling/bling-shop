import React from 'react';
import classNames from 'classnames';
import { Title, Switch, Tooltip, Icon } from '@/components/atoms';

interface ItemProps {
  content: 'icon' | 'checkbox' | 'text' | 'switch' | 'data' | 'suffix';
  icon?: React.ReactNode;
  text?: string;
  textClassName?: string | string[] | Record<string, any>;
  className?: string | string[] | Record<string, any>;
  suffix?: React.ReactNode;
  data?: string;
  contentClassName?: string;
  onClick?: () => void;
  titleDescription?: string;
  title?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  titleIcon?: React.ReactNode;
  titleLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  titleIconColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  focusBgColor?: string;
  focusTextColor?: string;
  activeBgColor?: string;
  activeTextColor?: string;
  enableHover?: boolean;
  enableDropShadow?: boolean;
  enableFocus?: boolean;
  enableActive?: boolean;
  showText?: boolean | undefined;
  tooltipPosition?: 'left' | 'right' | 'top' | 'bottom' | 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right' | 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom';
  tooltipColor?: string;
  titleTooltip?: string;
  tooltipClassName?: string | string[] | Record<string, any> | any;
  tooltipChildren?: React.ReactNode | string | number | string[] | any;
  tooltipIcon?: string;
  tooltipIconSize?: number;
  pattern?: string | string[] | boolean;
  tooltipContent?: React.ReactNode | string | number | string[] | any;
  tooltip?: boolean | string | React.ReactNode;
  tooltipIconColor?: string;
  switchChecked?: boolean;
  enableHoverPattern?: boolean;
  // eslint-disable-next-line no-unused-vars
  switchOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Item: React.FC<ItemProps> = ({
  content,
  title,
  titleClassName,
  descriptionClassName,
  titleIcon,
  titleLevel,
  titleIconColor,
  titleDescription,
  contentClassName = 'dark:bling-dark bling-light',
  tooltip,
  tooltipPosition,
  tooltipColor,
  tooltipChildren,
  tooltipIcon,
  tooltipContent,
  tooltipClassName,
  tooltipIconSize,
  tooltipIconColor,
  suffix,
  icon,
  text,
  pattern,
  textClassName,
  className,
  data,
  onClick,
  hoverBgColor = 'hover:bg-slate-700',
  hoverTextColor = 'hover:text-white',
  focusBgColor = 'focus:bg-slate-900',
  focusTextColor = 'focus:text-white',
  activeBgColor = 'active:bg-slate-900',
  activeTextColor = 'active:text-white',
  showText = true,
  enableHover = false,
  enableActive = false,
  enableDropShadow = false,
  enableFocus = false,
  switchChecked = false,  
  // eslint-disable-next-line no-unused-vars
  enableHoverPattern = true,
  // eslint-disable-next-line no-unused-vars
  switchOnChange = () => {}
}) => {
  const renderContent = () => {
    switch (content) {
      case 'icon':
        return (
          <div className={classNames(contentClassName, 'w-full', 'rounded-md', 'h-10', 'gap-1', 'leading-tight', 'px-4', 'flex', 'flex-row', 'text-bling-light-text', 'dark:text-bling-dark-text', 'clickable', tooltip ? 'justify-between' : 'justify-between', showText ? 'justify-start' : 'justify-between', 'items-center')}>
            <div className={classNames(
              'h-auto flex flex-row items-center w-full justify-start text-center',
              {
                'justify-start': showText,
                'justify-center': !showText
              }
            )}>
              {icon && <span className={classNames(showText ? 'justify-start min-w-[25px]' : 'justify-center min-w-[auto]')}>{icon}</span>}
              {showText && text && <span className={classNames(textClassName)}>{text}</span>}
            </div>
            {(suffix || tooltip) && showText && (
              <div className='w-fit h-auto flex flex-row'>
                {suffix && <span className='z-[1]'>{suffix}</span>}
                {tooltip && (
                  <Tooltip position={tooltipPosition} color={tooltipColor} className={tooltipClassName} content={tooltipContent}>
                    {tooltipIcon && (<Icon name={tooltipIcon} size={tooltipIconSize} color={tooltipIconColor} />)}
                    {tooltipChildren}
                  </Tooltip>
                )}
              </div>
            )}
          </div>
        );
      case 'checkbox':
        return (
          <div className={classNames('w-full', 'rounded-md', 'h-10', 'gap-1', 'px-4', 'flex', 'flex-row', 'dark:bling-dark', 'bling-light', 'text-bling-light-text', 'dark:text-bling-dark-text', 'clickable', showText ? 'justify-start' : 'justify-center', 'items-center')}>
            <span className='min-w-[25px]'>
              <input type='checkbox' />
            </span>
            {showText && text && <span className={classNames(textClassName)}>{text}</span>}
          </div>
        );
      case 'data':
        return (
          <div className={classNames(contentClassName, 'w-full', 'rounded-md', 'h-10', 'gap-1', 'px-4', 'flex', 'flex-row', 'dark:bling-dark', 'bling-light', 'text-bling-light-text', 'dark:text-bling-dark-text', 'clickable', 'justify-start', 'items-center')}>
            {data && <span className='min-w-[25px] font-bold text-center rounded-md'>{data}</span>}
            {showText && text && <span className={classNames(textClassName)}>{text}</span>}
          </div>
        );
      case 'text':
        return (
          <div className={classNames(contentClassName, 'w-full', 'rounded-md', 'h-10', 'gap-1', 'px-4', 'flex', 'flex-row', 'dark:bling-dark', 'bling-light', 'text-bling-light-text', 'dark:text-bling-dark-text', 'clickable', 'justify-between', 'items-center')}>
            {showText && text && <span className={classNames(textClassName)}>{text}</span>}
            {tooltip && (
              <Tooltip position={tooltipPosition} color={tooltipColor} className={tooltipClassName} content={tooltipContent}>
                {tooltipIcon && (<Icon name={tooltipIcon} size={tooltipIconSize} color={tooltipIconColor} />)}
                {tooltipChildren}
              </Tooltip>
            )}
          </div>
        );
      case 'switch':
        return (
          <div className={classNames(contentClassName, 'w-full', 'h-auto', 'gap-1', 'p-2', 'flex', 'text-inherit', 'flex-row', 'justify-between', 'items-center', 'dark:bling-dark-bg-4', 'dark:hover:bling-dark-bg-4', 'bling-light', 'text-bling-light-text', 'dark:text-bling-dark-text', 'clickable')}>
            {showText && text && <span className={classNames(textClassName, 'text-inherit')}>{text}</span>}
            {title && (
              <Title
                icon={titleIcon}
                level={titleLevel}
                iconColor={titleIconColor}
                className='text-inherit'
                titleClassName={`${titleClassName} text-inherit`}
                title={title}
                description={titleDescription}
                descriptionClassName={`${descriptionClassName} text-inherit`}
              />
            )}
            <Switch checked={switchChecked} onChange={switchOnChange} switchClass='bling-light-bg-3 dark:bling-dark-bg-3' sliderClass='dark:bling-dark-bg-4' />
          </div>
        );
      case 'suffix':
        return (
          <div className={classNames('w-full', 'rounded-md', 'h-10', 'gap-1', 'px-4', 'flex', 'flex-row', 'dark:bling-dark', 'bling-light', 'text-bling-light-text', 'dark:text-bling-dark-text', 'clickable', showText ? 'justify-between' : 'justify-center', 'items-center')}>
            <div className='w-auto h-auto flex flex-row flex-nowrap justify-start items-center gap-1'>
              {icon && <span className={classNames(showText ? 'justify-start, min-w-[25px]' : 'justify-center min-w-[auto]')}>{icon}</span>}
              {showText && text && <span>{text}</span>}
            </div>
            {suffix && <span className='z-[1]'>{suffix}</span>}
            {tooltip && (
              <Tooltip position={tooltipPosition} color={tooltipColor} className={tooltipClassName} content={tooltipContent}>
                {tooltipIcon && (<Icon name={tooltipIcon} size={tooltipIconSize} color={tooltipIconColor} />)}
                {tooltipChildren}
              </Tooltip>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <ul className={classNames(`${className} relative act-on-h-dhb-pat act-on-h-dhb-grad `)}>
      {pattern && (
        <>
          <div
            className={classNames(`${pattern} z-0 absolute rounded-md top-0 z-1 bottom-0 right-0 w-1/4 pointer-events-none`, {
       
            })}
          >


          </div>
        </>
      )}
      <li
        className={classNames(
          'w-full',
          'select-none',
          'cursor-pointer',
          'rounded-md',
          'bling-btn-secondary',
          focusBgColor,
          focusTextColor,
          enableActive && activeBgColor,
          enableActive && activeTextColor,
          enableFocus && 'focus:bg-none',
          enableHover && hoverBgColor,
          enableHover && hoverTextColor
        )}
      >
        <div
          className={classNames(
            'w-full',
            'select-none',
            'h-full',
            'items-center',
            'flex',
            'text-xs',
            'rounded-md',
            enableFocus && 'focus:bg-inherit',
            enableHover && enableDropShadow && 'hover:drop-shadow-lg',
            contentClassName
          )}
          onClick={onClick}
        >
          {renderContent()}
        </div>
      </li>
    </ul>
  );
};

export { Item };
