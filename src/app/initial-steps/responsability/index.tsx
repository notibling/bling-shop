
import { MutableRefObject } from 'react';
import Swiper from 'swiper';
import classNames from 'classnames';

import { Button, Title, Icon, Section } from '@/components/atoms';

interface IResponsabilityInformationProps {
  controller: MutableRefObject<Swiper | null>;
}

const ResponsabilityInformation: React.FC<IResponsabilityInformationProps> = ({
  controller
}) => {
  return (
    <>
      <Section Empty={true} className='!bg-transparent min-h-[50dvh]'>
        <div className={classNames('h-auto', 'flex', 'flex-grow', 'flex-col', 'gap-2', 'justify-center', 'items-center')}>

          <div className={classNames('flex', 'w-full', 'max-w-[500px]', 'self-center', 'h-full', 'flex-col', 'p-5', 'gap-2', 'justify-center', 'items-center', 'rounded')}>
            <div className='flex flex-col items-center justify-center'>
              <Icon name='CheckCircle' color='#4ade80' size={150}/>

              <Title level='h2' title='Cuenta creada ¡Exitosamente!' className='p-5 text-center' />
            </div>
          </div>
          <div className={classNames('flex', 'w-auto', 'bling-light', 'dark:bling-dark-bg-1', '!bg-opacity-95', 'rounded-md', 'p-4', 'text-md', 'font-bold', 'gap-4', 'flex-grow', 'flex-col', 'lg:flex-row', 'items-center', 'justify-center')}>
        
            <div className='w-auto text-nowrap text-center bling-light-text text-sm justify-center items-center dark:text-white'>Verifica tu cuenta ingresando el<br/> código que enviamos a tu email</div>

            <Button
              onClick={() => controller.current && controller.current.slidePrev()}
              text='Validar'
              className={classNames('bling-btn-primary border bling-light-border dark:bling-dark-border dark:bling-dark-bg-2 dark:text-white w-[200px]  py-6')}
            />

          </div>
        </div>
      </Section>
    </>
  );
};

export { ResponsabilityInformation };

