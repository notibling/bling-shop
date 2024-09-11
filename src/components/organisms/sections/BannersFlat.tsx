
import React from 'react';
import classNames from 'classnames';
import { Banner } from '@/components/molecules';
import { Section } from '@/components/atoms';

interface BannersFlatProps {
  title?: string;
  backgroundColor?: string;
  imageOne?: string;
  imageTwo?: string;
  imageThree?: string;
  width?: string;
  height?: string;
  className?: string;
  bannerOne?: string;
  bannerTwo?: string;
  bannerThree?: string;
  titleOne?: string;
  categoryOne?: string;
  descriptionOne?: string;
  titleTwo?: string;
  categoryTwo?: string;
  descriptionTwo?: string;
  titleThree?: string;
  categoryThree?: string;
  descriptionThree?: string;
}

const BannersFlat: React.FC<BannersFlatProps> = ({
  bannerOne,
  imageOne,
  titleOne,
  categoryOne,
  descriptionOne,
  imageTwo,
  bannerTwo,
  titleTwo,
  categoryTwo,
  descriptionTwo,
  imageThree,
  bannerThree,
  titleThree,
  categoryThree,
  descriptionThree,
}) => {
 
  return (
    <>
    <Section  className='bg-slate-900 ' classNameContainer='dark:bg-slate-800'>
          <div className={classNames('w-full', 'h-40', 'flex', '  gap-4')}>
            <div className={classNames(bannerOne, 'w-6/12', 'rounded-md')}>
              <Banner contentSize="!w-3/4" image={imageOne} category={categoryOne} title={titleOne} description={descriptionOne} />
            </div>
            <div className={classNames(bannerTwo, 'w-3/12', 'rounded-md')}>
              <Banner contentSize="!w-3/4" image={imageTwo} category={categoryTwo} title={titleTwo} description={descriptionTwo} />
            </div>
            <div className={classNames(bannerThree, 'w-3/12', 'rounded-md')}>
              <Banner contentSize="!w-3/4" image={imageThree} category={categoryThree} title={titleThree} description={descriptionThree} />
            </div>
          </div>
    
        </Section>
    </>
  );
};

export {BannersFlat};
