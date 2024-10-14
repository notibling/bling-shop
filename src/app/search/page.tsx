'use client';
import React from 'react';
import classNames from 'classnames';
import { Button, Logo, Section } from '@/components/atoms';
import { SearchBar } from '@/components/molecules';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useDarkMode } from '@/hooks';

const Search: React.FC<{}> = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  
  const onSearch = (value: string) => {
    console.log(value);
  };

  return (
    <Section className={classNames('!h-[100vh]  ', {'bling-bg-dots': darkMode })} classNameContainer='h-[80vh] !bg-transparent relative !flex-col !gap-10 mb-16'>
      <Button icon={darkMode ? <FaSun /> : <FaMoon />} className='absolute w-12 h-12 right-10 top-10 bling-light dark:bling-dark-bg-2' onClick={toggleDarkMode} />
      <Logo width={200} />
      <SearchBar onSearch={onSearch} className={classNames('w-1/2')}></SearchBar>
    </Section>
  );
};

export default Search;
