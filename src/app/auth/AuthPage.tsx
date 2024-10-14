'use client';
import React, { useState } from 'react';
import classNames from 'classnames';
import Typewriter from 'typewriter-effect';
import { Button } from '@/components/atoms';
import { Register } from './Register';
import { Login } from './Login';
import { FooterComponent, GlobalMessage } from '@/components/molecules';
import { FaBug, FaHeadset, FaSun, FaUserCircle, FaUserPlus } from 'react-icons/fa';
import { FaArrowRightFromBracket, FaBell } from 'react-icons/fa6';
import { useDarkMode } from '@/hooks/';
import { GlobalMessageData } from '@/components/molecules/GlobalMessageData';

export function Auth() {
  const [showLogin, setShowLogin] = useState<boolean>(true);
  const { toggleDarkMode } = useDarkMode();

  const handleToggle = (showLoginForm: boolean) => {
    if (showLoginForm !== showLogin) {
      setShowLogin(showLoginForm);
    }
  };

  return (
    <main
      style={{ backgroundImage: 'url(/images/webp/banners/login-banner.webp)' }}
      className={classNames(
        'overflow-hidden',
        'bg-cover',
        'bg-center',
        'min-h-screen',
        'w-full',
        'flex',
        'justify-around',
        'items-center',
        'lg:items-end',
        'flex-col',
        'p-0',
        'gap-10'
      )}
    >
      <div className='w-full lg:h-screen h-full flex flex-col'>
        <div className='flex-grow h-auto lg:h-screen flex justify-center items-center'>
          <div className='w-full lg:w-11/12 h-auto flex flex-col lg:flex-row flex-nowrap'>
            <div className='w-full lg:w-8/12 lg:flex hidden h-screen lg:h-auto lg:items-left lg:justify-left justify-center items-center lg:text-left text-center flex-col'>
              <div className='w-full lg:items-start items-center lg:justify-start text-center lg:text-left justify-center flex h-auto flex-col'>
                <span className='bling-badge w-fit text-center lg:text-left'>Con Bling Podés...</span>

                <span
                  style={{ lineHeight: '140px' }}
                  className='text-white text-[80px] lg:text-[120px] text-center lg:text-left bling-text-shadow'
                >
                  <Typewriter
                    options={{
                      strings: ['Comprar', 'Vender', 'Ahorrar', 'Difrutar', 'Compartir'],
                      autoStart: true,
                      loop: true,
                      cursorClassName: 'cursorBling'
                    }}
                  />
                </span>
                <div className='w-full text-xl text-center lg:text-left bling-text-shadow flex lg:justify-start justify-center items-center gap-2 flex-row text-nowrap text-white'>
                  <span>Todo a un</span> <FaBell className='text-bling-yellow' /> <span>de distancia.</span>
                </div>
                <div className='w-full h-auto max-w-[500px] p-2 text-xs mt-5 text-center lg:text-left bling-light dark:bling-dark rounded-md bling-text-shadow flex lg:justify-start justify-center items-center gap-2 flex-row  text-white'>
                  <GlobalMessage messages={GlobalMessageData} duration={15000} />
                </div>
              </div>
            </div>
            <div className='w-full my-10 lg:w-4/12 h-screen lg:h-auto flex justify-center lg:justify-end items-center flex-col'>
              <div className={classNames('w-10/12', 'lg:w-[400px]', 'justify-center', 'items-center', 'rounded-xl', 'bling-light-bg-3', 'dark:bling-dark-bg-2', 'flex', 'gap-2', 'p-2', 'relative', 'flex-col')}>
                <div
                  className={classNames(
                    'absolute',
                    'm-auto',
                    'right-[0px]',
                    'left-[0px]',
                    'lg:left-[auto]',
                    'top-[-70px]',
                    'lg:top-[0px]',
                    'lg:right-[-70px]',
                    'w-fit',
                    'justify-center',
                    'items-center',
                    'rounded-brand',
                    'bling-light',
                    'dark:bling-dark-bg-2',
                    'flex',
                    'gap-2',
                    'p-1',
                    'flex-row',
                    'lg:flex-col'
                  )}
                >
                  <div className='w-1/2 flex flex-row justify-center items-center'>
                    <Button
                      icon={<FaUserCircle />}
                      className='w-[50px] h-[50px] text-slate-400 bling-btn-primary border dark:bling-dark-border dark:bling-btn-primary-dark flex-nowrap rounded-md text-nowrap flex items-center justify-center text-xs gap-2 py-5 px-5 hover:text-white hover:bg-blue-600'
                    />
                  </div>
                  <div className='w-1/2 flex flex-row justify-center items-center text-slate-200'>
                    <Button
                      icon={<FaUserPlus />}
                      className='w-[50px] h-[50px] text-slate-400 bling-btn-primary border dark:bling-dark-border dark:bling-btn-primary-dark flex-nowrap rounded-md text-nowrap flex items-center justify-center text-xs gap-2 py-5 px-5 hover:text-white hover:bg-blue-600'
                    />
                  </div>
                  <div className='w-1/2 flex flex-row justify-center items-center text-slate-200'>
                    <Button
                      icon={<FaHeadset />}
                      className='w-[50px] h-[50px] text-slate-400 bling-btn-primary border dark:bling-dark-border dark:bling-btn-primary-dark flex-nowrap rounded-md text-nowrap flex items-center justify-center text-xs gap-2 py-5 px-5 hover:text-white hover:bg-blue-600'
                    />
                  </div>
                  <div className='w-1/2 flex flex-row justify-center items-center text-slate-200'>
                    <Button
                      icon={<FaBug />}
                      className='w-[50px] h-[50px] text-slate-400 bling-btn-primary border dark:bling-dark-border dark:bling-btn-primary-dark flex-nowrap rounded-md text-nowrap flex items-center justify-center text-xs gap-2 py-5 px-5 hover:text-white hover:bg-blue-600'
                    />
                  </div>
                  <div className='w-1/2 flex flex-row justify-center items-center text-slate-200'>
                    <Button
                      icon={<FaSun />}
                      onClick={toggleDarkMode}
                      className='w-[50px] h-[50px] text-slate-400 bling-btn-primary border dark:bling-dark-border dark:bling-btn-primary-dark flex-nowrap rounded-md text-nowrap flex items-center justify-center text-xs gap-2 py-5 px-5 hover:text-white hover:bg-blue-600'
                    />
                  </div>
                </div>

                {showLogin ? <Login /> : <Register />}

                <div className='w-full flex gap-2 p-2 flex-row'>
                  <div className='w-1/2 flex flex-row justify-center items-center text-slate-200'>
                    <Button
                      icon={<FaUserCircle />}
                      text='Registrarme'
                      id='Register'
                      className='w-full text-white bg-green-500 hover:bling-bright flex-nowrap rounded-md text-nowrap flex items-center justify-center text-xs gap-2 py-5 px-5'
                      onClick={() => handleToggle(false)}
                    />
                  </div>
                  <div className='w-1/2 flex flex-row justify-center items-center text-slate-200'>
                    <Button
                      icon={<FaArrowRightFromBracket />}
                      text='Ingresar'
                      id='Login'
                      className='w-full text-white bg-blue-500 hover:bling-bright flex-nowrap rounded-md text-nowrap flex items-center justify-center text-xs gap-2 py-5'
                      onClick={() => handleToggle(true)}
                    />
                  </div>
                </div>
                
              </div>
              <div className='w-10/12 h-auto max-w-[500px] p-2 text-xs mt-5 text-center lg:text-left bling-light dark:bling-dark rounded-md bling-text-shadow lg:hidden flex lg:justify-start justify-center items-center gap-2 flex-row  text-white'>
                <GlobalMessage messages={GlobalMessageData} duration={15000} />
              </div>
            </div>
          </div>
        </div>

        <div className='w-full h-auto'>
          <FooterComponent brandFooter />
        </div>
      </div>
    </main>
  );
}
