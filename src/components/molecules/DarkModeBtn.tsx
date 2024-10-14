import React from 'react';
import { Button, Icon } from '../atoms';
import { useDarkMode} from '@/hooks';
import { Moon, Sun } from '@/icons/tsx';

interface DarkModeBtnProps {

}
const DarkModeBtn: React.FC<DarkModeBtnProps> = ({ }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className='fixed m-0 bottom-10 lg:bottom-20 right-10 z-50'>
      <Button
        className={`w-[50px] h-[50px] ${darkMode ? 'bling-dark' : 'bling-light'} rounded-full box-border shadow-lg`}
        icon={
          <>
            {darkMode && <Icon frozen={false} name={Sun} color='white' size={20} />}
            {!darkMode && <Icon frozen={false} name={Moon} color='grey' size={20} />}
          </>
        }
        onClick={toggleDarkMode}
      />
    </div>
  );
};

export { DarkModeBtn};
