import React from 'react';
import { Icon } from '../atoms';

interface IconPatternProps {
  iconName: string;
  iconSize: number;
  iconCount: number;
  rotationAngle?: number; // Optional rotation angle
  brickStyle?: boolean; // Optional brick style grid
}

const IconPattern: React.FC<IconPatternProps> = ({
  iconName,
  iconSize,
  iconCount,
  rotationAngle = 0,
  brickStyle = false
}) => {
  const icons = Array.from({ length: iconCount }, (_, i) => {
    const rotation = rotationAngle ? `rotate(${rotationAngle * (i % 4)}deg)` : 'rotate(0deg)';
    const marginLeft = brickStyle && i % 2 !== 0 ? `${iconSize / 2}px` : '0';

    return (
      <div
        key={i}
        style={{ transform: rotation, marginLeft }}
        className='m-1 flex items-center justify-center'
      >
        <Icon name={iconName} size={iconSize} />
      </div>
    );
  });

  return <div className={`flex flex-wrap ${brickStyle ? 'gap-2' : ''}`}>{icons}</div>;
};

export default IconPattern;
