import React from 'react';
import { Icon, Separator, Title } from '@/components/atoms';
import { QrCode } from '@/icons/tsx';

interface QRSolutionsProps {}

const QRSolutions: React.FC<QRSolutionsProps> = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-start gap-4">
      <Title level="h3" title="Soluciones con QR" titleClassName={'dark:text-white'} description="Facilite sus pagos con nuestras diversas soluciones QR, diseñadas para adaptarse a las necesidades de su negocio." />
      <span className="w-full h-auto text-md dark:text-white bling-light-text">
        Bling Pay es una API robusta y versátil que permite a las empresas realizar y recibir pagos, gestionar fondos y simplificar la contabilidad. <br />
        <br />
        Nuestra plataforma está diseñada para integrarse fácilmente con su sistema actual, proporcionándole las herramientas necesarias para manejar transacciones de manera segura y eficiente.
      </span>

      <Separator noText={true} />
      <div className="grid grid-cols-4 w-full h-auto gap-4">
        {/* QR para pagos únicos */}
        <div className="col-span-4 lg:col-span-2  h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4">
          <Title level="h5" className="w-full" icon={<Icon name={QrCode} size={50} />} title="Pago Único" description="Genere códigos QR para realizar pagos únicos de productos o servicios." />
        </div>

        {/* QR para pagos recurrentes */}
        <div className="col-span-4 lg:col-span-2  h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4">
          <Title level="h5" className="w-full" icon={<Icon name={QrCode} size={50} />} title="Pagos Recurrentes" description="Cree códigos QR para cobros automáticos periódicos como suscripciones." />
        </div>

        {/* QR para donaciones */}
        <div className="col-span-4 lg:col-span-2  h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4">
          <Title level="h5" className="w-full" icon={<Icon name={QrCode} size={50} />} title="Donaciones" description="Facilite las donaciones a su causa con códigos QR personalizados." />
        </div>

        {/* QR para eventos */}
        <div className="col-span-4 lg:col-span-2  h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4">
          <Title level="h5" className="w-full" icon={<Icon name={QrCode} size={50} />} title="Eventos" description="Genere códigos QR para gestionar pagos en eventos y entradas" />
        </div>

        {/* QR para ventas presenciales */}
        <div className="col-span-4 lg:col-span-2  h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4">
          <Title level="h5" className="w-full" icon={<Icon name={QrCode} size={50} />} title="Ventas Presenciales" description="Acepte pagos en tiendas físicas con códigos QR." />
        </div>

        {/* QR para pagos sin contacto */}
        <div className="col-span-4 lg:col-span-2  h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4">
          <Title level="h5" className="w-full" icon={<Icon name={QrCode} size={50} />} title="Pagos sin Contacto" description="Ofrezca pagos rápidos y seguros con QR sin contacto." />
        </div>

        {/* QR para e-commerce */}
        <div className="col-span-4 lg:col-span-2  h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4">
          <Title level="h5" className="w-full" icon={<Icon name={QrCode} size={50} />} title="E-commerce" description="Integre códigos QR para pagos directos en su tienda online." />
        </div>

        {/* QR personalizado */}
        <div className="col-span-4 lg:col-span-2  h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4">
          <Title level="h5" className="w-full" icon={<Icon name={QrCode} size={50} />} title="Cobro Personalizado" description=" Genere códigos QR personalizados para necesidades específicas de cobro." />
        </div>
      </div>
      
    </div>
  );
};

export default QRSolutions ;
