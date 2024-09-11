'use client'
import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { Section, Button, Icon } from '@/components/atoms';

const TabsCategories = () => {
  const [activeTab, setActiveTab] = useState(0);
  const autoSelectInterval: React.MutableRefObject<NodeJS.Timeout | null> = useRef(null);

  const tabs = [
    { id: 0, icon: 'ArmChair2', text:'Hogar', content: 'Hogar' },
    { id: 1, icon: 'Condicioner', text:'Tecnología', content: 'Tecnología' },
    { id: 2, icon: 'Paw', text:'Mascotas', content: 'Mascotas' },
    { id: 3, icon: 'House', text:'Inmuebles', content: 'Inmuebles' },
    { id: 4, icon: 'Wheel', text:'Vehículos', content: 'Vehículos' },
  ];

  const startAutoSelect = () => {
    if (autoSelectInterval.current) {
      clearInterval(autoSelectInterval.current);
    }

    autoSelectInterval.current = setInterval(() => {
      setActiveTab(prevIndex => (prevIndex + 1) % tabs.length);
    }, 8000); // Cambio automático cada 8 segundos (ajustable según necesidad)
  };

  useEffect(() => {
    startAutoSelect();
    setActiveTab(0);

    return () => {
      if (autoSelectInterval.current) {
        clearInterval(autoSelectInterval.current);
      }
    };
  }, []);

  return (
    <Section classNameContainer="!p-0 !bg-transparent flex !flex-col gap-0" className="dark:bg-slate-950">
      <div className='w-full h-auto flex flex-row gap-2 justify-center items-center p-1'>
        {tabs.map((tab) => (
         <Button
         text={activeTab === tab.id ? tab.text : undefined}
         className={classNames('hidden md:flex', 'flex-row', 'nowrap','dark:text-white','text-nowrap', 'w-auto', {
           'btn-md': true,
           'outline-none': false, // Omitir si no quieres aplicar esta clase
           'duration-100': true,
           'ease-in-out': true,
           'bg-white dark:bling-dark': activeTab !== tab.id,
           'bg-blue-600 dark:bg-blue-600 text-white': activeTab === tab.id,
         })}
         key={tab.id}
         icon={<Icon name={tab.icon}  size={20} />}
         onClick={() => setActiveTab(tab.id)}
       />
        ))}
      </div>
      <div className={classNames('w-full h-auto dark:bg-slate-900 bling-light align-center text-2xl  text-center items-center justify-center flex flex-row p-4')}>
        {tabs.map((tab) => (
          tab.id === activeTab && (
            <div key={tab.id} className='text-white'>
              {tab.content}
            </div>
          )
        ))}
      </div>
    </Section>
  );
};

export { TabsCategories };
