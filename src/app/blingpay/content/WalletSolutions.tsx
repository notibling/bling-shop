import React from 'react';
import { Icon, Separator, Title } from '@/components/atoms';
import { Wallet } from '@/icons/tsx';

interface WalletSolutionsProps {}

const WalletSolutions: React.FC<WalletSolutionsProps> = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-start gap-4">
    <Title level="h3" title="Soluciones con la Wallet de BlingPay" titleClassName={'dark:text-white'} description="Administre y use sus fondos de manera eficiente con la Wallet de BlingPay, diseñada para simplificar sus pagos y transferencias." />
    <span className="w-full h-auto text-md dark:text-white bling-light-text">
      La Wallet de BlingPay funciona como una cartera digital integral que le permite retener dinero, pagar cualquier tipo de servicio y realizar transferencias de manera sencilla. <br />
      <br />
      Con nuestra wallet, puede gestionar sus fondos de forma similar a las aplicaciones de administración de tarjetas de débito o prepago, ofreciendo flexibilidad y control total sobre sus transacciones.
    </span>
  
    <Separator noText={true} />
    <div className="grid grid-cols-4 w-full h-auto gap-4">
      {/* Pago Único */}
      <div className="col-span-4 lg:col-span-2 h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4">
        <Title level="h5" className="w-full" icon={<Icon name={Wallet} size={50} />} title="Pago Único" description="Realice pagos únicos de productos o servicios directamente desde su Wallet de BlingPay." />
      </div>
  
      {/* Pagos Recurrentes */}
      <div className="col-span-4 lg:col-span-2 h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4">
        <Title level="h5" className="w-full" icon={<Icon name={Wallet} size={50} />} title="Pagos Recurrentes" description="Configure pagos automáticos periódicos, como suscripciones, con la Wallet de BlingPay." />
      </div>
  
      {/* Transferencias */}
      
      <div className="col-span-4 lg:col-span-2 h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4">
        <Title level="h5" className="w-full" icon={<Icon name={Wallet} size={50} />} title="Transferencias" description="Envie y reciba fondos de manera rápida y segura entre cuentas con la Wallet de BlingPay." />
      </div>
  
      {/* Compras en Línea */}
      <div className="col-span-4 lg:col-span-2 h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4">
        <Title level="h5" className="w-full" icon={<Icon name={Wallet} size={50} />} title="Compras en Línea" description="Utilice su Wallet de BlingPay para pagar directamente en tiendas en línea y plataformas de e-commerce." />
      </div>
  
      {/* Pagos en Tienda */}
      <div className="col-span-4 lg:col-span-2 h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4">
        <Title level="h5" className="w-full" icon={<Icon name={Wallet} size={50} />} title="Pagos en Tienda" description="Acepte pagos en tiendas físicas con la Wallet de BlingPay, proporcionando una opción rápida y segura para sus clientes." />
      </div>
  
      {/* Gestión de Fondos */}
      <div className="col-span-4 lg:col-span-2 h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4">
        <Title level="h5" className="w-full" icon={<Icon name={Wallet} size={50} />} title="Gestión de Fondos" description="Administre su saldo y realice ajustes financieros directamente desde la Wallet de BlingPay." />
      </div>
  
      {/* Seguridad */}
      <div className="col-span-4 lg:col-span-2 h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4">
        <Title level="h5" className="w-full" icon={<Icon name={Wallet} size={50} />} title="Seguridad" description="Proteja sus fondos con nuestras avanzadas características de seguridad, garantizando transacciones seguras y confiables." />
      </div>
    </div>
  </div>
  

  );
};

export default WalletSolutions;
