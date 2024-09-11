import React from 'react';
import { Icon, Separator, Title } from '@/components/atoms';
import { Link } from '@/icons/tsx';

const LinkSolutions: React.FC = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-start gap-4">
      <Title level="h3" title="Soluciones con Links" titleClassName={'dark:text-white'} description="Simplifique sus transacciones con nuestras soluciones de enlaces, ideales para pagos, transferencias y más." />
      <span className="w-full h-auto text-md dark:text-white bling-light-text">
        Con BlingPay, puede generar enlaces para una variedad de servicios financieros. Nuestros enlaces pueden ser temporales o permanentes y están diseñados para facilitar pagos, recibir transferencias y gestionar peticiones de forma rápida y segura. <br />
        <br />
        Nuestra plataforma ofrece flexibilidad y control total sobre sus transacciones mediante enlaces personalizados que se adaptan a sus necesidades específicas.
      </span>

      <Separator noText={true} />
      <div className="grid grid-cols-4 w-full h-auto gap-4">
        {/* Enlace para pagos únicos */}
        <div className="col-span-4 lg:col-span-2 h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4">
          <Title level="h5" className="w-full" icon={<Icon name={Link} size={50} />} title="Pago Único" description="Genere enlaces para realizar pagos únicos de productos o servicios." />
        </div>

        {/* Enlace para pagos recurrentes */}
        <div className="col-span-4 lg:col-span-2 h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4">
          <Title level="h5" className="w-full" icon={<Icon name={Link} size={50} />} title="Pagos Recurrentes" description="Cree enlaces para cobros automáticos periódicos como suscripciones." />
        </div>

        {/* Enlace para donaciones */}
        <div className="col-span-4 lg:col-span-2 h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4">
          <Title level="h5" className="w-full" icon={<Icon name={Link} size={50} />} title="Donaciones" description="Facilite las donaciones a su causa con enlaces personalizados." />
        </div>

        {/* Enlace para eventos */}
        <div className="col-span-4 lg:col-span-2 h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4">
          <Title level="h5" className="w-full" icon={<Icon name={Link} size={50} />} title="Eventos" description="Genere enlaces para gestionar pagos en eventos y entradas." />
        </div>

        {/* Enlace para ventas presenciales */}
        <div className="col-span-4 lg:col-span-2 h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4">
          <Title level="h5" className="w-full" icon={<Icon name={Link} size={50} />} title="Ventas Presenciales" description="Acepte pagos en tiendas físicas mediante enlaces específicos." />
        </div>

        {/* Enlace para pagos sin contacto */}
        <div className="col-span-4 lg:col-span-2 h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4">
          <Title level="h5" className="w-full" icon={<Icon name={Link} size={50} />} title="Pagos sin Contacto" description="Ofrezca pagos rápidos y seguros con enlaces sin contacto." />
        </div>

        {/* Enlace para e-commerce */}
        <div className="col-span-4 lg:col-span-2 h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4">
          <Title level="h5" className="w-full" icon={<Icon name={Link} size={50} />} title="E-commerce" description="Integre enlaces para pagos directos en su tienda online." />
        </div>

        {/* Enlace temporal para promociones */}
        <div className="col-span-4 lg:col-span-2 h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4">
          <Title level="h5" className="w-full" icon={<Icon name={Link} size={50} />} title="Promociones Temporales" description="Genere enlaces temporales para ofertas y promociones especiales." />
        </div>

        {/* Enlace personalizado para cobro */}
        <div className="col-span-4 lg:col-span-2 h-auto flex flex-row items-center justify-center border bling-light-border dark:bling-dark-border rounded-md p-4">
          <Title level="h5" className="w-full" icon={<Icon name={Link} size={50} />} title="Cobro Personalizado" description="Genere enlaces personalizados para necesidades específicas de cobro." />
        </div>
      </div>
    </div>
  );
};

export default LinkSolutions;
