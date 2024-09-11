'use client';
import { useState } from 'react';
import { Section } from '@/components/atoms';
import { FooterComponent } from '@/components/molecules';
import { TopMenu } from '@/components/organisms';

const Security = ({}) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <TopMenu FastLinks={false} InfoBar={false} />
      <Section className="bling-bg-dots-light" classNameContainer="!h-[400px] !flex-col items-center overflow-hidden relative justify-center">
        <div>
           Security
        </div>
        </Section>
      <FooterComponent brandFooter />
    </>
  );
};

export default Security;
