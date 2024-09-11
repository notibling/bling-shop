import React from 'react';
import classNames from 'classnames';
import { FaBars, FaHome, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';

interface IMobileMenuProps { }

const MobileMenu: React.FC<IMobileMenuProps> = () => {
  return (
    <div className={classNames('md:hidden', 'h-14', 'fixed', 'bottom-0', 'left-0', 'w-full', 'bg-gray-100', 'border-t', 'border-gray-300', 'z-50')}>
      <div className={classNames('w-full', 'h-full', 'justify-center', 'items-center', 'flex', 'flex-row', 'flex-nowrap')}>
        <button className={classNames('hover:scale-110', 'flex-col', 'cursor-pointer', 'w-full', 'h-full', 'flex', 'items-center', 'justify-center', 'focus:outline-none', 'hover:bg-gray-100')}>
          <FaHome className={classNames('text-gray-700', 'text-xl')} />

        </button>
        <button className={classNames('hover:scale-110', 'flex-col', 'cursor-pointer', 'w-full', 'h-full', 'flex', 'items-center', 'justify-center', 'focus:outline-none', 'hover:bg-gray-100')}>
          <FaUser className={classNames('text-gray-700', 'text-xl')} />

        </button>
        <button className={classNames('hover:scale-110', 'flex-col', 'cursor-pointer', 'w-full', 'h-full', 'flex', 'items-center', 'justify-center', 'focus:outline-none', 'hover:bg-gray-100')}>
          <FaSearch className={classNames('text-gray-700', 'text-xl')} />

        </button>
        <button className={classNames('hover:scale-110', 'flex-col', 'cursor-pointer', 'w-full', 'h-full', 'flex', 'items-center', 'justify-center', 'focus:outline-none', 'hover:bg-gray-100')}>
          <FaShoppingCart className={classNames('text-gray-700', 'text-xl')} />

        </button>
        <button className={classNames('hover:scale-110', 'flex-col', 'cursor-pointer', 'w-full', 'h-full', 'flex', 'items-center', 'justify-center', 'focus:outline-none', 'hover:bg-gray-100')}>
          <FaBars className={classNames('text-gray-700', 'text-xl')} />

        </button>
      </div>
    </div>
  );
};

export { MobileMenu };
