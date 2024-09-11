'use client';
import { Chip, Icon, Item, Separator } from '@/components/atoms';
import { AltArrowDown, AltArrowUp, ArrowRight, BellBing, Bill, BlingSquare, Book, Code, Code2, HandMoney, Laptop, LinkMinimalistic,  QrCode, SmartHome, Translation, Wallet } from '@/icons/tsx';
import { Accordion } from '@/components/organisms';
import Link from 'next/link';
import { useState } from 'react';
import { useDarkMode } from '@/hooks';

const Sidebar = ({ }) => {

  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const { darkMode } = useDarkMode();

  const handleToggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className='w-full gap-2 flex flex-col items-center justify-start'>
      
      {/* Servicios Bling Pay */}
      <Accordion
        className="border bling-light-border dark:bling-dark-border !bg-transparent !rounded-lg"
        trigger={
          <Item 
            contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 dark:bling-dark-bg-2  bling-light hover:bg-white'}
            content="icon"
            suffix={<Icon name={isAccordionOpen ? AltArrowUp : AltArrowDown} size={15} />} 
            icon={<Icon name={BellBing} size={20} />} 
            text="Servicios Bling Pay" 
          />
        }
      >
        <Separator textMiddle='Soluciones rápidas' textClassName="text-xs text-nowrap " />
        <Link href="/blingpay/servicios">
          <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white '}
          textClassName={'text-start text-balance'}  
                content="icon"  
                icon={<Icon name={QrCode} size={20} />} 
                suffix={<Chip text="0" className='py-1' status='neutral'/>} 
                text="Soluciones con QR" 
          />
        </Link>
        <Link href="/blingpay/preguntas-frecuentes">
          <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white '}
          textClassName={'text-start text-balance'}  
                content="icon"  
                icon={<Icon name={LinkMinimalistic} size={20} />} 
                suffix={<Chip text="0" className='py-1' status='neutral'/>} 
                text="Links de Pago" 
          />
        </Link>
        <Link href="/blingpay/estadisticas">
          <Item content="icon" 
                contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white '}
                textClassName={'text-start text-balance'}   
                icon={<Icon name={HandMoney} size={20} />} 
                suffix={<Chip text="0" className='py-1' status='neutral'/>} 
                text="Servicios de donativos" 
          />
        </Link>
        <Link href="/blingpay/estadisticas">
          <Item content="icon" 
                contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white '}
                textClassName={'text-start text-balance'}   
                icon={<Icon name={Wallet} size={20} />} 
                suffix={<Chip text="0" className='py-1' status='neutral'/>} 
                text="Cartera Familiar" 
          />
        </Link>

        <Separator textMiddle='Soluciones con integraciones' textClassName="text-xs text-nowrap " />
        <Link href="/blingpay/estadisticas">
          <Item content="icon" 
                contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white '}
                textClassName={'text-start text-balance'}   
                icon={<Icon name={Translation} size={20} />} 
                suffix={<Chip text="0" className='py-1' status='neutral'/>} 
                text="Integraciones BlingPay API" 
          />
          <Link href="/blingpay/estadisticas">
          <Item content="icon" 
                contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white '}
                textClassName={'text-start text-balance'}   
                icon={<Icon name={Translation} size={20} />} 
                suffix={<Chip text="0" className='py-1' status='neutral'/>} 
                text="Checkout externo" 
          />
            </Link>
             <Item content="icon" 
                contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white '}
                textClassName={'text-start text-balance'}   
                icon={<Icon name={Translation} size={20} />} 
                suffix={<Chip text="0" className='py-1' status='neutral'/>} 
                text="Gestión mediante API" 
          />
        </Link>
        <Link href="/blingpay/estadisticas">
          <Item content="icon" 
                contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white '}
                textClassName={'text-start text-balance'}   
                icon={<Icon name={Wallet} size={20} />} 
                suffix={<Chip text="0" className='py-1' status='neutral'/>} 
                text="Cartera digital" 
          />
        </Link>
      </Accordion>

      {/* Desarrollo */}
      <Accordion
        className="border bling-light-border dark:bling-dark-border !bg-transparent !rounded-lg"
        trigger={
          <Item 
            contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 dark:bling-dark-bg-2  bling-light hover:bg-white'}
            content="icon"
            suffix={<Icon name={isAccordionOpen ? AltArrowUp : AltArrowDown} size={15} />} 
            icon={<Icon name={Code} size={20} />} 
            text="Desarrollo" 
          />
        }
      >
        <Separator textMiddle='Manual de uso rápido' textClassName="text-xs text-nowrap " />
        <Link href="/blingpay/primeros-pasos">
          <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white '}
          textClassName={'text-start text-balance'}  
                content="icon"  
                icon={<Icon name={Laptop} size={20} />} 
                suffix={<Chip text="0" className='py-1' status='neutral'/>} 
                text="Requisitos Previos" 
          />
        </Link>
        <Link href="/blingpay/primeros-pasos">
          <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white '}
          textClassName={'text-start text-balance'}  
                content="icon"  
                icon={<Icon name={Book} size={20} />} 
                suffix={<Chip text="0" className='py-1' status='neutral'/>} 
                text="Primeros pasos" 
          />
        </Link>

        <Link href="/blingpay/implementacion">
          <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white '}
          textClassName={'text-start text-balance'}  
                content="icon"  
                icon={<Icon name={ArrowRight} size={20} />} 
                suffix={<Chip text="0" className='py-1' status='neutral'/>} 
                text="Integraciones rápidas" 
          />
        </Link>
        <Separator textMiddle='Implementación API' textClassName="text-xs text-nowrap " />
        <Link href="/blingpay/implementacion">
          <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white '}
          textClassName={'text-start text-balance'}  
                content="icon"  
                icon={<Icon name={QrCode} size={20} />} 
                suffix={<Chip text="0" className='py-1' status='neutral'/>} 
                text="QR mediante API" 
          />
        </Link>
        <Link href="/blingpay/implementacion">
          <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white '}
          textClassName={'text-start text-balance'}  
                content="icon"  
                icon={<Icon name={Wallet} size={20} />} 
                suffix={<Chip text="0" className='py-1' status='neutral'/>} 
                text="Wallet mediante API" 
          />
        </Link>
        <Link href="/blingpay/implementacion">
          <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white '}
          textClassName={'text-start text-balance'}  
                content="icon"  
                icon={<Icon name={HandMoney} size={20} />} 
                suffix={<Chip text="0" className='py-1' status='neutral'/>} 
                text="Donativos mediante API" 
          />
        </Link>
        <Link href="/blingpay/implementacion">
          <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white '}
          textClassName={'text-start text-balance'}  
                content="icon"  
                icon={<Icon name={Bill} size={20} />} 
                suffix={<Chip text="0" className='py-1' status='neutral'/>} 
                text="Suscripciones mediante API" 
          />
        </Link>
        <Link href="/blingpay/implementacion">
          <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white '}
          textClassName={'text-start text-balance'}  
                content="icon"  
                icon={<Icon name={LinkMinimalistic} size={20} />} 
                suffix={<Chip text="0" className='py-1' status='neutral'/>} 
                text="Link de pago mediante API" 
          />
        </Link>
        <Separator textMiddle='Componentes' textClassName="text-xs text-nowrap " />
        <Accordion
  className="border bling-light-border dark:bling-dark-border !bg-transparent !rounded-lg"
  trigger={
    <Item 
      contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 dark:bling-dark-bg-2  bling-light hover:bg-white'}
      content="icon"
      suffix={<Icon name={isAccordionOpen ? AltArrowUp : AltArrowDown} size={15} />} 
      icon={<Icon name={BlingSquare} size={20} />} 
      text="Componentes" 
    />
  }
>
  <Link href="/blingpay/codigos-error">
    <Item content="icon" 
          contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white '}
          textClassName={'text-start text-balance'}   
          icon={<Icon name={BlingSquare} size={20} />} 
          suffix={<Chip text="0" className='py-1' status='neutral'/>} 
          text="BlingPayButton" 
    />
  </Link>
  <Link href="/blingpay/registros-log">
    <Item content="icon" 
          contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white '}
          textClassName={'text-start text-balance'}   
          icon={<Icon name={SmartHome} size={20} />} 
          suffix={<Chip text="0" className='py-1' status='neutral'/>} 
          text="BlingPayCard" 
    />
  </Link>
  <Link href="/blingpay/notificaciones-webhook">
    <Item content="icon" 
          contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white '}
          textClassName={'text-start text-balance'}   
          icon={<Icon name={SmartHome} size={20} />} 
          suffix={<Chip text="0" className='py-1' status='neutral'/>} 
          text="BlingPayCheckout" 
    />
  </Link>
  <Link href="/blingpay/mensajes-respuesta">
    <Item content="icon" 
          contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white '}
          textClassName={'text-start text-balance'}   
          icon={<Icon name={SmartHome} size={20} />} 
          suffix={<Chip text="0" className='py-1' status='neutral'/>} 
          text="BlingPayCardList" 
    />
  </Link>
</Accordion>

<Separator textMiddle='Seguridad' textClassName="text-xs text-nowrap " />
       
<Separator textMiddle='Buenas prácticas' textClassName="text-xs text-nowrap " />

        <Link href="/blingpay/versiones">
          <Item content="icon" 
                contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white '}
                textClassName={'text-start text-balance'}   
                icon={<Icon name={Code2} size={20} />} 
                suffix={<Chip text="0" className='py-1' status='neutral'/>} 
                text="Notas de la versión" 
          />
        </Link>
        
      </Accordion>

      {/* Términos y Condiciones */}
      <Accordion
        className="border bling-light-border dark:bling-dark-border !bg-transparent !rounded-lg"
        trigger={
          <Item 
            contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 dark:bling-dark-bg-2  bling-light hover:bg-white'}
            content="icon"
            suffix={<Icon name={isAccordionOpen ? AltArrowUp : AltArrowDown} size={15} />} 
            icon={<Icon name={BellBing} size={20} />} 
            text="Términos y condiciones" 
          />
        }
      >
        <Link href="/blingpay/terminos">
          <Item content="icon" 
                contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white '}
                textClassName={'text-start text-balance'}   
                icon={<Icon name={Code2} size={20} />} 
                suffix={<Chip text="0" className='py-1' status='neutral'/>} 
                text="Términos y condiciones" 
          />
        </Link>

        <Link href="/blingpay/politicas-terceros">
          <Item content="icon" 
                contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white '}
                textClassName={'text-start text-balance'}   
                icon={<Icon name={Code2} size={20} />} 
                suffix={<Chip text="0" className='py-1' status='neutral'/>} 
                text="Políticas de terceros" 
          />
        </Link>
        
      </Accordion>

      <Separator noText={true} />

    </div>
  );
};

export { Sidebar };
