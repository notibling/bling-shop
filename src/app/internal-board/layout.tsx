import React from 'react';
import classNames from 'classnames';

import { Section } from '@/components/atoms';
import { FooterComponent } from '@/components/molecules';

import { SideBar } from './SideBar';

export default function InternalBoardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Section className='h-auto gap-2 bg-slate-900' classNameContainer='h-auto  items-stretch' >
        <div className='w-[300px]  flex-grow flex flex-col  gap-1'>
          <SideBar />

        </div>
        <div className='w-full  overflow-y-auto flex bg-blue-200'>
          {children}
        </div>
      </Section>

      {/* --------------------------------------------- FOOTER */}
      <section className={classNames('w-full', 'h-auto')}>
        <FooterComponent brandFooter />
      </section>
    </>
  );
}
