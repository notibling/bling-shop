// ProfileBand.tsx
import React from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { Button, Icon } from '../atoms';
import { Eye } from '@/icons/tsx';

interface ProfileBandProps {
  userName?: string | string[] | any;
  userDescription?: string | string[] | any;
  userImageSrc?: string | string[] | any;
  transaction?: number;
  badge?: string | string[] | any;
  badgeCountry?: string | string[] | any;
  transactionStatus?: string | string[];
  onChatClick: () => void;
  onViewClick: () => void;
  className?: string | string[];
}

const getStatusColorClass = (status: string): string => {
  const statusColors: Record<string, string> = {
    'completado': 'text-emerald-500',
    'en progreso': 'text-yellow-500',
    'cancelado': 'text-red-600'
  };

  if (status in statusColors) {
    return statusColors[status];
  }

  // Detect and handle fractional statuses
  const fractionMatch = status.match(/^(\d+)\/(\d+)$/);
  if (fractionMatch) {
    const [_, numerator, denominator] = fractionMatch.map(Number);
    const ratio = numerator / denominator;
    if (ratio <= 1 / 12) return 'text-red-500';
    if (ratio <= 2 / 12) return 'text-red-400';
    if (ratio <= 3 / 12) return 'text-red-300';
    if (ratio <= 4 / 12) return 'text-orange-400';
    if (ratio <= 5 / 12) return 'text-orange-300';
    if (ratio <= 6 / 12) return 'text-yellow-500';
    if (ratio <= 7 / 12) return 'text-yellow-400';
    if (ratio <= 8 / 12) return 'text-green-300';
    if (ratio <= 9 / 12) return 'text-green-400';
    if (ratio <= 10 / 12) return 'text-blue-400';
    if (ratio <= 11 / 12) return 'text-blue-500';
    if (ratio <= 12 / 12) return 'text-emerald-500';
  }

  return 'text-gray-500';
};

const ProfileBand: React.FC<ProfileBandProps> = ({
  userName,
  className,
  userDescription,
  badge,
  badgeCountry,
  transactionStatus,
  userImageSrc,
  transaction,
  onChatClick,
  onViewClick
}) => {
  return (
    <div className={classNames('rounded-md p-2 flex flex-row gap-2 items-center justify-between', className)}>
      <div className='w-1/2 h-auto flex flex-row gap-2 justify-start items-center'>
        <Image
          src={userImageSrc}
          alt={userName}
          unoptimized
          width={100}
          height={100}
          className='w-[40px] h-[40px] rounded-full'
        />
        <div className='w-full'>
          <p className='leading-5 bling-light-text text-xs dark:bling-dark-text'>{userName}</p>
          <p className='text-[12px] bling-light-text dark:bling-dark-text'>{userDescription}</p>
        </div>
      </div>
      <div className='w-fit h-auto flex flex-row gap-2 justify-end items-center'>
        <div className='w-auto h-auto flex flex-col justify-center text-end'>
          <span className='text-end text-xs text-emerald-500 font-bold text-nowrap'>+&nbsp;{badge}&nbsp;{transaction}&nbsp;{badgeCountry}</span>
          <span className={`text-end text-[12px] ${getStatusColorClass(transactionStatus as string)}`}>[ {transactionStatus} ]</span>
        </div>
        {/* <Button onClick={onChatClick} className="bling-btn-primary dark:bling-btn-primary-dark aspect-square w-[40px] h-[40px] rounded-md">
          <Icon name={ChatRoundDots} size={20} />
  </Button>*/}
        <Button onClick={onViewClick} className='bling-btn-primary dark:bling-btn-primary-dark aspect-square w-[40px] h-[40px] rounded-md'>
          <Icon name={Eye} size={20} />
        </Button>
      </div>
    </div>
  );
};

export { ProfileBand };
