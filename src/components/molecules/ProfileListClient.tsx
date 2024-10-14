import React from 'react';
import { ProfileBand } from './ProfileBand';
import classNames from 'classnames';


interface Profile {
 
  userName?: string | string[] | any;
  userDescription?: string | string[] | any;
  userImageSrc?: string;
  transaction?: number;
  badge?: string;
  badgeCountry?: string;
  transactionStatus?: string;
}

interface ProfileListClientProps {
  title?: string | string[];
  description?: string | string[];
  className?: string | string[];
  icon?: React.ReactNode;
  profiles?: Profile[] | undefined;
  onChatClick: (userName: string | string[] | undefined) => void;
  onViewClick: (userName: string | string[] | undefined) => void;
}

const ProfileListClient: React.FC<ProfileListClientProps> = ({ profiles, onChatClick, onViewClick, title, icon, description, className }) => {
  return (
    <div className={classNames('gap-2 rounded-md border bling-light-border dark:bling-dark-border p-4 flex flex-col', className)}>

      <div className='w-full flex flex-row items-center justify-between'>
        <div className='w-auto max-w-2/3 flex flex-col justify-center items-start'>
          <span className='w-full bling-light-text dark:text-white h-auto font-bold text-xs'>{title}</span>
          <span className='w-full bling-light-text dark:text-gray-500  h-auto  text-[12px]'>{description}</span>
        </div>
        <div className='self-center'>{icon}</div>
      </div>
      <div className='w-full flex flex-col gap-1 items-center justify-between    overflow-y-auto'>
        {profiles.map((profile, index) => (
          <ProfileBand
            key={index}
            className='w-full bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'
            userName={profile.userName}
            userDescription={profile.userDescription}
            userImageSrc={profile.userImageSrc}
            transaction={profile.transaction}
            badge={profile.badge}
            badgeCountry={profile.badgeCountry}
            transactionStatus={profile.transactionStatus}
            onChatClick={() => onChatClick(profile.userName)}
            onViewClick={() => onViewClick(profile.userName)}
          />
        ))}
      </div>
    </div>
  );
};

export { ProfileListClient };
