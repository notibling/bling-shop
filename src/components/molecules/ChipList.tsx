import React from 'react';
import Marquee from 'react-fast-marquee';
import { Chip } from '@/components/atoms';
import classNames from 'classnames';

interface ChipData {
  text?: string;
  status?: 'success' | 'inactive' | 'disabled' | 'warning' | 'info' | 'neutral' | 'error' | 'inherit' | undefined;
  size?: string;
}

interface ChipListProps {
  data: ChipData[];
  direction?: 'left' | 'right';
}

const ChipList: React.FC<ChipListProps> = ({ data, direction = 'left' }) => {
  return (
    <Marquee pauseOnHover={true} direction={direction} speed={70} autoFill={true}>
      {data.map((chip, index) => (
        <Chip
          key={index}
          className={classNames('lbp-chip')}
          text={chip.text}
          status={chip.status}
        />
      ))}
    </Marquee>
  );
};

export { ChipList };
