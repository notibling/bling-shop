import React from 'react';
import classNames from 'classnames';
import { Icon } from '@/components/atoms';
import { Container } from '@/components/molecules';

interface ChipDataProps {
  number?: number | string;
  symbol?: string;
  unity?: string;
  className?: string | string[] | Record<string, any> | any;
  icon?: string;
  title?: string | boolean | any;
  description?: string;
  button?: boolean;
  buttonSrc?: string;
  iconName?: string;
  iconColor?: string;
  iconSize?: number;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' ;
  titleClassName?: string | string[] | Record<string, any> | any;
  titleClassNameContainer?: string | string[] | Record<string, any> | any;
  titleIconName?: string;
  numberClassName?: string | string[] | Record<string, any> | any;
}

const ChipData: React.FC<ChipDataProps> = ({ className, numberClassName, title, titleIconName, titleClassNameContainer, description, titleClassName, iconSize, iconName, level, button, number, buttonSrc, symbol, unity }) => {
  let iconColor;
  if (iconName === 'ArrowUp') {
    iconColor = 'green';
  } else if (iconName === 'ArrowDown') {
    iconColor = 'red';
  } else {
    iconColor = 'defaultColor';
  }

  return (
    <Container
      title={title}
      level={level}
      titleClassName={titleClassName}
      description={description}
      titleIconName={titleIconName}
      iconSize={iconSize}
      iconColor={iconColor}
      className={classNames('flex flex-col items-stretch space-between rounded-md dark:bling-dark bling-light', className)}
      button={button}
      buttonSrc={buttonSrc}
      titleClassNameContainer={titleClassNameContainer}
    >
      <div className='w-auto h-auto flex justify-between flex-row items-end'>
        <div className='w-auto h-auto flex justify-end flex-row items-center'>
          <div className={classNames('text-4xl grow font-JetBrainsMono', numberClassName)}>
            <span className='text-2xl'>{symbol}</span>
            {number}
          </div>
        </div>
        <div className='w-auto h-auto flex-col flex flex-wrap justify-end'>
          <span className='text-2xl w-auto h-1/2 flex self-end'>
            {iconName ? <Icon name={iconName} color={iconColor} size={15} /> : null}
          </span>
          <span className='text-2xl w-auto h-1/2 flex justify-end font-JetBrainsMono'>{unity || ''}</span>
        </div>
      </div>
    </Container>
  );
};

export default ChipData;
