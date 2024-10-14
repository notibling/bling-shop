import React from 'react';
import { Icon, Separator, Title } from '@/components/atoms';
import { Bill } from '@/icons/tsx';

const SubscriptionSolutions: React.FC = () => {
  return (
    <div className='w-full h-auto flex flex-col justify-start gap-4'>
      <Title level='h3' title='Soluciones de Suscripciones' titleClassName={'dark:text-white'} description='Gestione suscripciones de manera eficiente con nuestra plataforma, adaptada a sus necesidades de automatización y pagos.' />
      <span className='w-full h-auto text-md dark:text-white bling-light-text'>
        Con BlingPay, puede gestionar suscripciones de manera flexible y automatizada mediante nuestra API. Nuestra plataforma permite suscribirse a servicios, gestionar pagos recurrentes y recibir respuestas automatizadas sobre el estado de la suscripción. <br />
        <br />
        Ofrecemos una integración sencilla para manejar suscripciones, con respuestas personalizables que incluyen confirmaciones, redirección a enlaces específicos y manejo de errores para asegurar una experiencia fluida.
      </span>

      <Separator noText={true} />
      <div className='grid grid-cols-4 w-full h-auto gap-4'>
        {/* Suscripción única */}
        <div className='col-span-4 lg:col-span-2 h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4'>
          <Title level='h5' className='w-full' icon={<Icon name={Bill} size={50} />} title='Suscripción Única' description='Cree suscripciones únicas para acceder a servicios por un período determinado.' />
        </div>

        {/* Suscripción recurrente */}
        <div className='col-span-4 lg:col-span-2 h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4'>
          <Title level='h5' className='w-full' icon={<Icon name={Bill} size={50} />} title='Suscripción Recurrente' description='Gestione pagos recurrentes para suscripciones periódicas, como membresías o servicios continuos.' />
        </div>

        {/* Suscripción con prueba gratuita */}
        <div className='col-span-4 lg:col-span-2 h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4'>
          <Title level='h5' className='w-full' icon={<Icon name={Bill} size={50} />} title='Prueba Gratuita' description='Ofrezca un período de prueba gratuita antes de iniciar el cobro de la suscripción.' />
        </div>

        {/* Gestión de suscripciones */}
        <div className='col-span-4 lg:col-span-2 h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4'>
          <Title level='h5' className='w-full' icon={<Icon name={Bill} size={50} />} title='Gestión de Suscripciones' description='Permita a los usuarios gestionar sus suscripciones, cambiar planes y cancelar servicios fácilmente.' />
        </div>

        {/* Respuestas automáticas */}
        <div className='col-span-4 lg:col-span-2 h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4'>
          <Title level='h5' className='w-full' icon={<Icon name={Bill} size={50} />} title='Respuestas Automáticas' description='Reciba respuestas automatizadas sobre el estado de la suscripción, incluyendo confirmaciones y errores.' />
        </div>

        {/* Redirección a enlaces */}
        <div className='col-span-4 lg:col-span-2 h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4'>
          <Title level='h5' className='w-full' icon={<Icon name={Bill} size={50} />} title='Redirección Personalizada' description='Redirija a los usuarios a enlaces específicos después de completar el proceso de suscripción.' />
        </div>

        {/* Suscripción por saldo en Wallet */}
        <div className='col-span-4 lg:col-span-2 h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4'>
          <Title level='h5' className='w-full' icon={<Icon name={Bill} size={50} />} title='Suscripción con Wallet' description='Automatice las suscripciones utilizando el saldo disponible en su Wallet de BlingPay.' />
        </div>

        {/* Integración API */}
        <div className='col-span-4 lg:col-span-2 h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4'>
          <Title level='h5' className='w-full' icon={<Icon name={Bill} size={50} />} title='Integración API' description='Integre nuestra API para gestionar suscripciones y pagos de manera eficiente y personalizada.' />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSolutions;
