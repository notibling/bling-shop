'use client';
import { useRouter } from 'next/navigation';
import { BiSupport } from 'react-icons/bi';
import classNames from 'classnames';
import { FaBell, FaHome, FaPlus } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { MdOutlinePointOfSale } from 'react-icons/md';
import { PiSignOutBold } from 'react-icons/pi';

import { MultiOptionsButton, MultiOptionsProvider } from '@/components/organisms';

import * as authOperations from '@/contexts/GlobalState/auth/operations';

function FloatingMultipleButtons() {
  const router = useRouter();

  const handleSignOut = () => {
    authOperations.signout();
    router.replace('/auth');
  };

  return (
    <MultiOptionsProvider>
      <MultiOptionsButton
        width={56}
        height={56}
        actionsZIndex={101}
        actions={[
          {
            icon: <MdOutlinePointOfSale />,
            onClick() {
              console.log('hello world');
            },
            className: 'bg-slate-900'
          },
          {
            icon: <IoMdSettings />,
            onClick() {
              console.log('hello world');
            },
            className: 'bg-slate-900'
          },
          {
            icon: <BiSupport />,
            onClick() {
              console.log('hello world');
            },
            className: 'bg-slate-900'
          },
          {
            icon: <FaBell />,
            onClick() {
              console.log('hello world');
            },
            className: 'bg-slate-900'
          },
          {
            icon: <PiSignOutBold />,
            onClick: handleSignOut,
            className: 'bg-slate-900'
          },
          {
            id: 2,
            icon: (
              <MultiOptionsButton
                id={2}
                triggerProps={{ style: { zIndex: 101 } }}
                actionsZIndex={101}
                actions={[
                  {
                    icon: <FaBell />,
                    onClick() {
                      console.log('hello world');
                    },
                    className: 'bg-slate-900'
                  },
                  {
                    icon: <FaBell />,
                    onClick() {
                      console.log('hello world');
                    },
                    className: 'bg-slate-900' 
                  }
                ]}
                width={40}
                height={40}
                triggerClassName={classNames('!z-[120]')}
              >
                <FaHome />
              </MultiOptionsButton>
            ),
            onClick: () => {},
            className: 'bg-slate-900'
          }
        ]}
        className={classNames('hidden', 'lg:flex', 'fixed', 'bottom-20', 'right-5', 'z-50')}
        triggerClassName={classNames('bg-slate-900')}
        openClassName={classNames('bottom-20', 'right-20')}
      >
        <FaPlus />
      </MultiOptionsButton>
    </MultiOptionsProvider>
  );
}
export { FloatingMultipleButtons };
