import React from 'react';
import Image from 'next/image';

interface UserProfileProps {
  name?: string | string[];
  email?: string | string[];
  imageUrl?: string | string[];
  userid?: string | string[];
}

const UserProfile: React.FC<UserProfileProps> = ({ name, email, imageUrl, userid }) => {
  return (
    <div className='flex items-center  space-x-2'>
      <Image unoptimized width={40} height={40} className='bling-light-text dark:bling-dark-text w-12 h-12 rounded-full' src={imageUrl} alt={`${name}'s profile`} />
      <div>
        <div className='flex flex-row justify-start items-center gap-1'><h2 className='bling-light-text dark:bling-dark-text text-md font-bold  justify-start items-center flex'>{name}</h2>-<span className='hover:text-decoration text-[10px]'>{userid}</span></div>
        <p className='bling-light-text dark:bling-dark-text text-xs '><span className='hover:text-decoration'>{email}</span></p>
      </div>
    </div>
  );
};

export {UserProfile};
