import React from 'react';
import classNames from 'classnames';
import { Button, Section } from '@/components/atoms';
import { CardVertical, CardHorizontal } from '@/components/molecules';

interface FeaturedProductsProps {
  title?: string;
  description?: string;
  imageSrc?: string;
  backgroundColor?: string;
  width?: string;
  height?: string;
  className?: string;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = (
  {
    // Props definition
  }
) => {
  return (
    <>
      <Section className={classNames('w-full', 'h-[60svh]', 'h-auto', )}>
        {' '}
        <div className={classNames('w-full', 'lg:w-10/12', 'h-full', 'flex', 'lg:flex-row', 'flex-col', 'self-center', 'gap-5', 'flex-grow', 'mx-auto', 'justify-center', 'p-5', 'lg:p-0', 'items-center')}>
          <div className={classNames('w-full', 'lg:w-1/4', 'h-auto')}>
          <a role="tab" className={classNames('tab', 'tab-active', 'font-bold', 'rounded-md', 'bg-white','dark:bling-dark', 'mb-1', 'w-full')}>
              {' '}
              Los más Destacados
            </a>
            <div className={classNames('w-full', 'h-auto', 'flex', 'flex-col', 'gap-1')}>
              <CardHorizontal
                shareButton={false}
                addButton={true}
                imageClassName="max-h-[100px]"
                className="flex-grow-0"
                title="Kit de semillas orgánicas de hierbas aromáticas"
                priceBefore="1800"
                price="399"
                badge="UY $"
                image="true"
                imageAlt="product"
              />
              <CardHorizontal
                shareButton={false}
                addButton={true}
                imageClassName="max-h-[100px]"
                className="flex-grow-0"
                title="Kit de semillas orgánicas de hierbas aromáticas"
                priceBefore="1800"
                price="399"
                badge="UY $"
                image="true"
                imageAlt="product"
              />
              <CardHorizontal
                shareButton={false}
                addButton={true}
                imageClassName="max-h-[100px]"
                className="flex-grow-0"
                title="Kit de semillas orgánicas de hierbas aromáticas"
                priceBefore="1800"
                price="399"
                badge="UY $"
                image="true"
                imageAlt="product"
              />
              <Button text="Ver más" className={classNames('w-full', 'mt-1', 'clickable',  'h-10', 'dark:bling-dark','bling-btn-primary','dark:bling-btn-primary-dark', 'text-sm' )}/>
            </div>
          </div>
          <div className={classNames('w-full', 'lg:w-1/4', 'h-auto')}>
            <a role="tab" className={classNames('tab', 'tab-active', 'font-bold', 'rounded-md', 'bg-white','dark:bling-dark', 'mb-1', 'w-full')}>
              {' '}
              Los más Vendidos
            </a>
            <div className={classNames('w-full', 'h-auto', 'flex', 'flex-col', 'gap-1')}>
              <CardHorizontal
                shareButton={false}
                addButton={true}
                imageClassName="max-h-[100px]"
                className="flex-grow-0"
                title="Kit de semillas orgánicas de hierbas aromáticas"
                priceBefore="1800"
                price="399"
                badge="UY $"
                image="true"
                imageAlt="product"
              />
              <CardHorizontal
                shareButton={false}
                addButton={true}
                imageClassName="max-h-[100px]"
                className="flex-grow-0"
                title="Kit de semillas orgánicas de hierbas aromáticas"
                priceBefore="1800"
                price="399"
                badge="UY $"
                image="true"
                imageAlt="product"
              />
              <CardHorizontal
                shareButton={false}
                addButton={true}
                imageClassName="max-h-[100px]"
                className="flex-grow-0"
                title="Kit de semillas orgánicas de hierbas aromáticas"
                priceBefore="1800"
                price="399"
                badge="UY $"
                image="true"
                imageAlt="product"
              />
              <Button text="Ver más" className={classNames('w-full', 'mt-1', 'clickable',  'h-10', 'dark:bling-dark','bling-btn-primary','dark:bling-btn-primary-dark', 'text-sm' )}/>
            </div>
          </div>
          <div className={classNames('w-full', 'lg:w-1/4', 'h-auto')}>
          <a role="tab" className={classNames('tab', 'tab-active', 'font-bold', 'rounded-md', 'bg-white','dark:bling-dark', 'mb-1', 'w-full')}>
              {' '}
              Nuevos en Oferta
            </a>
            <div className={classNames('w-full', 'h-auto', 'flex', 'flex-col', 'gap-1')}>
              <CardHorizontal
                shareButton={false}
                addButton={true}
                imageClassName="max-h-[100px]"
                className="flex-grow-0"
                title="Kit de semillas orgánicas de hierbas aromáticas"
                priceBefore="1800"
                price="399"
                badge="UY $"
                image="true"
                imageAlt="product"
              />
              <CardHorizontal
                shareButton={false}
                addButton={true}
                imageClassName="max-h-[100px]"
                className="flex-grow-0"
                title="Kit de semillas orgánicas de hierbas aromáticas"
                priceBefore="1800"
                price="399"
                badge="UY $"
                image="true"
                imageAlt="product"
              />
              <CardHorizontal
                shareButton={false}
                addButton={true}
                imageClassName="max-h-[100px]"
                className="flex-grow-0"
                title="Kit de semillas orgánicas de hierbas aromáticas"
                priceBefore="1800"
                price="399"
                badge="UY $"
                image="true"
                imageAlt="product"
              />
               <Button text="Ver más" className={classNames('w-full', 'mt-1', 'clickable',  'h-10', 'dark:bling-dark','bling-btn-primary','dark:bling-btn-primary-dark', 'text-sm' )}/>
            </div>
          </div>
          <div className={classNames('w-full', 'lg:w-1/4', 'h-auto')}>
          <a role="tab" className={classNames('tab', 'tab-active', 'font-bold', 'rounded-md', 'bg-white','dark:bling-dark', 'mb-1', 'w-full')}>
              El Mejor Valorado
            </a>
            <div className={classNames('w-full', 'h-auto', 'flex', 'flex-col', 'gap-1')}>
              <CardVertical shareButton={false} className="flex-grow-0 " title="Kit de semillas orgánicas de hierbas aromáticas" price="399" badge="UY $" image="true" imageAlt="product" priceBefore="1034" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export { FeaturedProducts };
