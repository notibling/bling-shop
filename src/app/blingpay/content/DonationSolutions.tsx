import React from 'react';
import { Icon, Separator, Title } from '@/components/atoms';
import { HandMoney } from '@/icons/tsx';

const DonationSolutions: React.FC = () => {
  return (
    <div className='w-full h-auto flex flex-col justify-start gap-4'>
      <Title level='h3' title='Soluciones de Donativos' titleClassName={'dark:text-white'} description='Facilite las donaciones a su causa con nuestras herramientas versátiles y fáciles de implementar.' />
      <span className='w-full h-auto text-md dark:text-white bling-light-text'>
        BlingPay ofrece soluciones flexibles para integrar donativos en su sitio web, permitiendo a los usuarios contribuir fácilmente a su causa. Incruste botones de donativos, enlaces personalizados y redirija a los usuarios a un espacio dedicado para recibir transferencias. <br />
        <br />
        Nuestra plataforma facilita la recepción de donaciones con opciones para elegir montos y dejar mensajes, brindando una experiencia personalizada y sencilla para sus contribuyentes.
      </span>

      <Separator noText={true} />
      <div className='grid grid-cols-4 w-full h-auto gap-4'>
        {/* Botón de Donativo */}
        <div className='col-span-4 lg:col-span-2 h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4'>
          <Title level='h5' className='w-full' icon={<Icon name={HandMoney} size={50} />} title='Botón de Donativo' description='Incruste un botón de donativo en su sitio web para recibir contribuciones de manera rápida y sencilla.' />
        </div>

        {/* Enlace de Donativo */}
        <div className='col-span-4 lg:col-span-2 h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4'>
          <Title level='h5' className='w-full' icon={<Icon name={HandMoney} size={50} />} title='Enlace de Donativo' description='Genere un enlace personalizado que redirija a los usuarios a una página de donativos dedicada a su causa.' />
        </div>

        {/* Página de Donativos Personalizada */}
        <div className='col-span-4 lg:col-span-2 h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4'>
          <Title level='h5' className='w-full' icon={<Icon name={HandMoney} size={50} />} title='Página de Donativos' description='Cree una página dedicada en BlingPay con su nombre de usuario, donde los donantes pueden contribuir y dejar mensajes.' />
        </div>

        {/* Opciones de Monto Personalizado */}
        <div className='col-span-4 lg:col-span-2 h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4'>
          <Title level='h5' className='w-full' icon={<Icon name={HandMoney} size={50} />} title='Monto Personalizado' description='Permita a los donantes elegir el monto de su contribución o ingresar una cantidad específica según su preferencia.' />
        </div>

        {/* Mensajes Personalizados */}
        <div className='col-span-4 lg:col-span-2 h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4'>
          <Title level='h5' className='w-full' icon={<Icon name={HandMoney} size={50} />} title='Mensaje Personalizado' description='Ofrezca la opción de dejar un mensaje o nota junto con la donación, personalizando la experiencia del donante.' />
        </div>

        {/* Integración con Redes Sociales */}
        <div className='col-span-4 lg:col-span-2 h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4'>
          <Title level='h5' className='w-full' icon={<Icon name={HandMoney} size={50} />} title='Integración con Redes Sociales' description='Permita compartir el enlace de donativo en redes sociales para ampliar el alcance de sus campañas de recaudación.' />
        </div>

        {/* Reportes de Donativos */}
        <div className='col-span-4 lg:col-span-2 h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4'>
          <Title level='h5' className='w-full' icon={<Icon name={HandMoney} size={50} />} title='Reportes de Donativos' description='Acceda a reportes detallados sobre las donaciones recibidas, incluyendo montos, mensajes y fechas.' />
        </div>

        {/* Soporte y Asistencia */}
        <div className='col-span-4 lg:col-span-2 h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4'>
          <Title level='h5' className='w-full' icon={<Icon name={HandMoney} size={50} />} title='Soporte y Asistencia' description='Obtenga asistencia y soporte para configurar y gestionar sus opciones de donativos.' />
        </div>
      </div>
    </div>
  );
};

export default DonationSolutions;
