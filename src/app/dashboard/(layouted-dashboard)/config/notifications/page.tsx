'use client'
import React, { useState } from 'react';
import classNames from 'classnames';

import { useBreakpoint } from '@/hooks/useBreakpoint';
import { Title, Icon, Section, Item, Separator } from '@/components/atoms';
import { FaBell, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

import { Notify } from '@/components/molecules';
import { Settings } from '@/icons/tsx';

interface NotificationsProps { }

const Notifications: React.FC<NotificationsProps> = ({ }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  const { conditionalValue } = useBreakpoint();
  return (
    <>
    <Section Empty={true} className="!flex-col  !flex !gap-4 !bg-transparent rounded-md " >
    <Title
          icon={<Icon name={Settings}   size={30} />}
          level="h5"
          className="flex flex-row bling-light p-2 dark:bling-dark-bg-2 w-full"
          description="Ajustes de notificaciones"
          title="Configuración / Notificaciones"
          
        />
      </Section>
    <Section  Empty={true} className='rounded-md  flex flex-col gap-2 ' >

      {/* //* METODO DE ENVÍO DE NOTIFICACIONES*/}
      <Section Empty={true} className='rounded-md !p-2 gap-1 dark:bling-dark-bg-2' >
        <Title
          icon={<Icon name="Mailbox"   size={25} />}
          level="h5"
          className="flex flex-row items-center justify-center w-full"
          title="Metodo de entrega de notificaciones"
        />

        <div className="flex flex-col w-full h-auto bling-light-bg-3 dark:bling-dark-bg-1 p-1 rounded-md gap-1">
          <Item
            content="switch"
            className="w-full "
            titleIcon={<Icon name="Letter"   
            size={20} />}
            titleLevel="h6"
            contentClassName="rounded-md"
            switchChecked={isChecked}
            switchOnChange={handleSwitchChange}
            title="Email principal"
            titleDescription="Descrip"
          />
          <Item
            content="switch"
            className="w-full"
            titleIcon={<Icon name="Letter"    size={20} />}
            titleLevel="h6"
            contentClassName="rounded-md"
            switchChecked={isChecked}
            switchOnChange={handleSwitchChange}
            title="Email Secundario"
            titleDescription="Descrip"
          />
          <Item
            content="switch"
            className="w-full"
            titleIcon={<Icon name="ChatDots"    size={20} />}
            titleLevel="h6"
            contentClassName="rounded-md"
            switchChecked={isChecked}
            switchOnChange={handleSwitchChange}
            title="Whatsapp"
            titleDescription="Descrip"
          />
        </div>
      </Section>

      {/* //* NOTIFICACIONES DE SEGURODAD */}
       <Section Empty={true} className='rounded-md !p-2 gap-1 dark:bling-dark-bg-2' >
        <Title
          icon={<Icon name="Shield"    size={25} />}
          level="h5"
          className="flex flex-row items-center justify-center w-full"
          title="Notificaciones de Seguridad"
        />
      <div className="flex flex-col w-full h-auto bling-light-bg-3 dark:bling-dark-bg-1 p-1 rounded-md gap-1">
          <Item
            content="switch"
            className="w-full"
            titleIcon={<Icon name="Shield"    size={20} />}
            titleLevel="h6"
            contentClassName="rounded-md"
            switchChecked={isChecked}
            switchOnChange={handleSwitchChange}
            title="Confirmación de cambios en el perfil"
            titleDescription="Validar cualquier cambio que realices en tu perfil."
          />
          <Item
            content="switch"
            className="w-full"
            titleIcon={<Icon name="Shield"    size={20} />}
            titleLevel="h6"
            contentClassName="rounded-md"
            switchChecked={isChecked}
            switchOnChange={handleSwitchChange}
            title="Recordatorio para completar el perfil."
            titleDescription="Te avisaremos cuando tengas cambios disponibles."
          />
          <Item
            content="switch"
            className="w-full"
            titleIcon={<Icon name="Shield"    size={20} />}
            titleLevel="h6"
            contentClassName="rounded-md"
            switchChecked={isChecked}
            switchOnChange={handleSwitchChange}
            title="Inicios de sesión"
            titleDescription="Te notificaremos cada vez que inicies sesión"
          />
          <Item
            content="switch"
            className="w-full"
            titleIcon={<Icon name="Shield"    size={20} />}
            titleLevel="h6"
            contentClassName="rounded-md"
            switchChecked={isChecked}
            switchOnChange={handleSwitchChange}
            title="Cambios de contraseña (Email)"
            titleDescription="Te notificaremos por email cada vez que cambies la contraseña"
          />
          <Item
            content="switch"
            className="w-full"
            titleIcon={<Icon name="Shield"    size={20} />}
            titleLevel="h6"
            contentClassName="rounded-md"
            switchChecked={isChecked}
            switchOnChange={handleSwitchChange}
            title="Cambios de contraseña (Whatsapp)"
            titleDescription="Te notificaremos por whatsapp cada vez que cambies la contraseña"
          />
        </div>{' '}
      </Section>
      {/* //* NOTIFICACIONES DE ACTIVIDAD DE LA CUENTA */}
       <Section Empty={true} className='rounded-md !p-2 gap-1 dark:bling-dark-bg-2' >
        <Title icon={<Icon name="User"    size={25} />} level="h5" className="flex flex-row items-center justify-center w-full" title="Actividad de la Cuenta" />
        <div className="flex flex-col w-full h-auto bling-light-bg-3 dark:bling-dark-bg-1 p-1 rounded-md gap-1">
          <Item
            content="switch"
            className="w-full"
            titleIcon={<Icon name="User"    size={20} />}
            titleLevel="h6"
            contentClassName="rounded-md"
            switchChecked={isChecked}
            switchOnChange={handleSwitchChange}
            title="Ingreso exitoso desde un nuevo dispositivo"
            titleDescription="describir"
          />
          <Item
            content="switch"
            className="w-full"
            titleIcon={<Icon name="User"    size={20} />}
            titleLevel="h6"
            contentClassName="rounded-md"
            switchChecked={isChecked}
            switchOnChange={handleSwitchChange}
            title="Cierre de sesión en todos los dispositivos"
            titleDescription="describir"
          />
        </div>{' '}
      </Section>

      {/* //* NOTIFICACIONES DE RECORDATORIO */}
       <Section Empty={true} className='rounded-md !p-2 gap-1 dark:bling-dark-bg-2' >
        <Title icon={<Icon name="NotebookSquare"    size={25} />} level="h5" className="flex flex-row items-center justify-center w-full" title="Recordatorios" />
        <div className="flex flex-col w-full h-auto bling-light-bg-3 dark:bling-dark-bg-1 p-1 rounded-md gap-1">
          <Item
            content="switch"
            className="w-full"
            titleIcon={<Icon name="NotebookSquare"    size={20} />}
            titleLevel="h6"
            contentClassName="rounded-md"
            switchChecked={isChecked}
            switchOnChange={handleSwitchChange}
            title="Renovación de suscripciónes"
            titleDescription="describir"
          />
          <Item
            content="switch"
            className="w-full"
            titleIcon={<Icon name="NotebookSquare"    size={20} />}
            titleLevel="h6"
            contentClassName="rounded-md"
            switchChecked={isChecked}
            switchOnChange={handleSwitchChange}
            title="Actualizar información de pago"
            titleDescription="describir"
          />
          <Item
            content="switch"
            className="w-full"
            titleIcon={<Icon name="NotebookSquare"    size={20} />}
            titleLevel="h6"
            contentClassName="rounded-md"
            switchChecked={isChecked}
            switchOnChange={handleSwitchChange}
            title="Completar perfil de empresa."
            titleDescription="describir"
          />
        </div>{' '}
      </Section>
      {/* //* NOTIFICACIONES DE CAMBIOS EN POLITICAS */}
       <Section Empty={true} className='rounded-md !p-2 gap-1 dark:bling-dark-bg-2' >
        <Title icon={<Icon name="Document"    size={25} />} level="h5" className="flex flex-row items-center justify-center w-full" title="Cambios en Políticas" />
        <div className="flex flex-col w-full h-auto bling-light-bg-3 dark:bling-dark-bg-1 p-1 rounded-md gap-1">
          <Item
            content="switch"
            className="w-full"
            titleIcon={<Icon name="Document"   color='text-bling-light-text dark:!text-bling-dark-text' size={20} />}
            titleLevel="h6"
            contentClassName="rounded-md"
            switchChecked={isChecked}
            switchOnChange={handleSwitchChange}
            title="Actualización de políticas de privacidad"
            titleDescription="describir"
          />
          <Item
            content="switch"
            className="w-full"
            titleIcon={<Icon name="Document"    size={20} />}
            titleLevel="h6"
            contentClassName="rounded-md"
            switchChecked={isChecked}
            switchOnChange={handleSwitchChange}
            title="Confirmación de aceptación de nuevas políticas"
            titleDescription="describir"
          />
        </div>{' '}
      </Section>
      {/* //* NOTIFICACIONES DE PEDIDOS Y COMPRAS */}
       <Section Empty={true} className='rounded-md !p-2 gap-1 dark:bling-dark-bg-2' >
        <Title icon={<Icon name="CartLarge"    size={25} />} level="h5" className="flex flex-row items-center justify-center w-full" title="Pedidos y Compras" />
        <div className="flex flex-col w-full h-auto bling-light-bg-3 dark:bling-dark-bg-1 p-1 rounded-md gap-1">
          <Item
            content="switch"
            className="w-full"
            titleIcon={<Icon name="CartLarge"    size={20} />}
            titleLevel="h6"
            contentClassName="rounded-md"
            switchChecked={isChecked}
            switchOnChange={handleSwitchChange}
            title="Confirmación de pedido recibido"
            titleDescription="describir"
          />
          <Item
            content="switch"
            className="w-full"
            titleIcon={<Icon name="CartLarge"    size={20} />}
            titleLevel="h6"
            contentClassName="rounded-md"
            switchChecked={isChecked}
            switchOnChange={handleSwitchChange}
            title="Pedido enviado con información de seguimiento"
            titleDescription="describir"
          />
          <Item
            content="switch"
            className="w-full"
            titleIcon={<Icon name="CartLarge"    size={20} />}
            titleLevel="h6"
            contentClassName="rounded-md"
            switchChecked={isChecked}
            switchOnChange={handleSwitchChange}
            title="Pedido entregado"
            titleDescription="describir"
          />
        </div>{' '}
      </Section>
      {/* //* NOTIFICACIONES DE PROMOCIONES Y OFERTAS */}
       <Section Empty={true} className='rounded-md !p-2 gap-1 dark:bling-dark-bg-2' >
        <Title icon={<Icon name="Sale"    size={25} />} level="h5" className="flex flex-row items-center justify-center w-full" title="Promociones y Ofertas" />
        <div className="flex flex-col w-full h-auto bling-light-bg-3 dark:bling-dark-bg-1 p-1 rounded-md gap-1">
          <Item
            content="switch"
            className="w-full"
            titleIcon={<Icon name="Sale"    size={20} />}
            titleLevel="h6"
            contentClassName="rounded-md"
            switchChecked={isChecked}
            switchOnChange={handleSwitchChange}
            title="Notificación de ofertas especiales"
            titleDescription="describir"
          />
          <Item
            content="switch"
            className="w-full"
            titleIcon={<Icon name="Sale"    size={20} />}
            titleLevel="h6"
            contentClassName="rounded-md"
            switchChecked={isChecked}
            switchOnChange={handleSwitchChange}
            title="Recepción de nuevos cupones de descuento"
            titleDescription="describir"
          />
        </div>{' '}
      </Section>
      {/* //* NOTIFICACIONES DE SERVICIO AL CLIENTE */}
       <Section Empty={true} className='rounded-md !p-2 gap-1 dark:bling-dark-bg-2' >
        <Title icon={<Icon name="UserHeart"    size={25} />} level="h5" className="flex flex-row items-center justify-center w-full" title="Servicio al Cliente" />
        <div className="flex flex-col w-full h-auto bling-light-bg-3 dark:bling-dark-bg-1 p-1 rounded-md gap-1">
          <Item
            content="switch"
            className="w-full"
            titleIcon={<Icon name="UserHeart"    size={20} />}
            titleLevel="h6"
            contentClassName="rounded-md"
            switchChecked={isChecked}
            switchOnChange={handleSwitchChange}
            title="Confirmación de recepción de solicitud de soporte"
            titleDescription="describir"
          />
          <Item
            content="switch"
            className="w-full"
            titleIcon={<Icon name="UserHeart"    size={20} />}
            titleLevel="h6"
            contentClassName="rounded-md"
            switchChecked={isChecked}
            switchOnChange={handleSwitchChange}
            title="Actualización sobre el estado de la solicitud de soporte"
            titleDescription="describir"
          />
        </div>{' '}
      </Section>
      {/* //* NOTIFICACIONES DE ACTIVIDAD COMERCIAL */}
       <Section Empty={true} className='rounded-md !p-2 gap-1 dark:bling-dark-bg-2' >
        <Title icon={<Icon name="Chart2"    size={25} />} level="h5" className="flex flex-row items-center justify-center w-full" title="Actividad Comercial" />
        <div className="flex flex-col w-full h-auto bling-light-bg-3 dark:bling-dark-bg-1 p-1 rounded-md gap-1">
          <Item
            content="switch"
            className="w-full"
            titleIcon={<Icon name="Chart2"    size={20} />}
            titleLevel="h6"
            contentClassName="rounded-md"
            switchChecked={isChecked}
            switchOnChange={handleSwitchChange}
            title="Confirmación de venta realizada"
            titleDescription="describir"
          />
          <Item
            content="switch"
            className="w-full"
            titleIcon={<Icon name="Chart2"    size={20} />}
            titleLevel="h6"
            contentClassName="rounded-md"
            switchChecked={isChecked}
            switchOnChange={handleSwitchChange}
            title="Resumen mensual de ventas"
            titleDescription="describir"
          />
        </div>{' '}
      </Section>

      {/* //* NOTIFICACIONES DE PUBLICIDAD Y MARKETING */}
       <Section Empty={true} className='rounded-md !p-2 gap-1 dark:bling-dark-bg-2' >
        <Title
          icon={<Icon name="Translation"    size={25} />}
          level="h5"
          className="flex flex-row items-center justify-center w-full"
          title="Publicidad y Marketing"
        />
        <div className="flex flex-col w-full h-auto bling-light-bg-3 dark:bling-dark-bg-1 p-1 rounded-md gap-1">
          <Item
            content="switch"
            className="w-full"
            titleIcon={<Icon name="Translation"    size={20} />}
            titleLevel="h6"
            contentClassName="rounded-md"
            switchChecked={isChecked}
            switchOnChange={handleSwitchChange}
            title="Lanzamiento de nuevas campañas publicitarias"
            titleDescription="describir"
          />
          <Item
            content="switch"
            className="w-full"
            titleIcon={<Icon name="Translation"    size={20} />}
            titleLevel="h6"
            contentClassName="rounded-md"
            switchChecked={isChecked}
            switchOnChange={handleSwitchChange}
            title="Análisis de rendimiento de anuncios"
            titleDescription="describir"
          />
        </div>{' '}
      </Section>

      {/* //* NOTIFICACIONES DE LEGALES Y COMPILANCE */}
       <Section Empty={true} className='rounded-md !p-2 gap-1 dark:bling-dark-bg-2' >
        <Title icon={<Icon name="Diploma"    size={25} />} level="h5" className="flex flex-row items-center justify-center w-full" title="Legales y Compliance" />
        <div className="flex flex-col w-full h-auto bling-light-bg-3 dark:bling-dark-bg-1 p-1 rounded-md gap-1">
          <Item
            content="switch"
            className="w-full"
            titleIcon={<Icon name="Diploma"    size={20} />}
            titleLevel="h6"
            contentClassName="rounded-md"
            switchChecked={isChecked}
            switchOnChange={handleSwitchChange}
            title="Cambios en términos y condiciones"
            titleDescription="describir"
          />
          <Item
            content="switch"
            className="w-full !text-slate-200"
            titleIcon={<Icon name="Diploma" className='!text-slate-200' size={20} />}
            titleLevel="h6"
            contentClassName="rounded-md"
            switchChecked={isChecked}
            switchOnChange={handleSwitchChange}
            title="Notificación de conformidad con nuevas regulaciones"
            titleDescription="describir"
          />
          <Item
            content="switch"
            className="w-full"
            titleIcon={<Icon name="Diploma"    size={20} />}
            titleLevel="h6"
            contentClassName="rounded-md"
            switchChecked={isChecked}
            switchOnChange={handleSwitchChange}
            title="Análisis de rendimiento de anuncios"
            titleDescription="describir"
          />
        </div>{' '}
      </Section>
      </Section>
    </>
  );
};

export default Notifications;
