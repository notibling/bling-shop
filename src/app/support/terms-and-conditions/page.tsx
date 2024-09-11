'use client';
import { Section } from '@/components/atoms';
import { FooterComponent } from '@/components/molecules';
import { TopMenu } from '@/components/organisms';

const TermsAndConditions = ({}) => {
  return (
    <>
      <TopMenu FastLinks={false} InfoBar={false} />
      <Section className="bling-bg-dots-light" classNameContainer="!h-[400px] !flex-col items-center overflow-hidden relative justify-center">
        <div>
           TermsAndConditions
        </div>
        </Section>
      <FooterComponent brandFooter />
    </>
  );
};

export default TermsAndConditions;
