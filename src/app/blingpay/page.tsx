'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button, Icon, Section, Title } from '@/components/atoms';
import { DarkModeBtn, FooterComponent } from '@/components/molecules';
import { ContentLoader, Menu } from './components';
import { BellBing, Lock, Scale, ShieldCheck } from '@/icons/tsx';
import { useBreakpoint, useDarkMode } from '@/hooks';
import { Sidebar } from './components/Sidebar';
import { CircleMethods } from './Sections';
import { BlingPayButton } from './components/BlingPayComponents';
import Typewriter from 'typewriter-effect';




const BlingPay = ({ }) => {
  const { conditionalValue } = useBreakpoint();
  const iconSize = conditionalValue({
    lg: 40, // Tamaño para pantallas grandes
    sm: 30, // Tamaño para pantallas pequeñas
  });

  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const { darkMode } = useDarkMode();

  const handleToggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };


  return (
    <>
      <DarkModeBtn />
      <Section Empty={true} className="!w-full !h-auto !p-0 !flex !items-center !relative !justify-start">
      <Menu/>

      <div className='w-full min-h-[80dvh] flex flex-col items-center  justify-center relative overflow-hidden dark:bling-dark-gradient-1 '>
      <Image 
  src="./BlingPayAssets/images/avif/bling-store-6.avif" 
  unoptimized 
  layout="fill" 
  objectFit="cover"
  alt="HeaderBlingPay" 
  className="w-full h-full absolute left-0 top-0 z-0"
/>

<div className='w-full h-fit absolute rounded-3xl  flex-col gap-4 !bg-opacity-30 p-0 flex items-center justify-start left-0 right-0 top-0 bottom-0 m-auto'>
       
<div className='w-10/12  font-bold drop-shadow-3xl bling-glass-2 border border-white border-opacity-30 p-3 lg:p-10 rounded-md flex flex-col lg:flex-row justify-between items-center'>
<span className="text-start text-white text-6xl">
<Typewriter
                    options={{
                      strings: ['Cobrá', 'Pagá', 'Transferí'],
                      autoStart: true,
                      loop: true,
                      cursorClassName: 'cursorBling',
                    }}
                  />
  </span> 
  
  <div className="w-fit flex flex-row text-2xl lg:text-3xl items-center jusfify-center h-auto lg:my-0 mt-4 text-white"><span>Todo a un </span><Icon name={BellBing} color="#ffcc00" size={iconSize} className="animate-wiggle animate-infinite animate-duration-200 animate-ease-out" frozen={false}/><span> de distancia </span></div></div>
       
       {/* 
       <div className='w-fit h-fit absolute rounded-3xl dark:bling-dark glass flex-col gap-4 !bg-opacity-30 p-10 flex items-start justify-center left-0 right-0 top-0 bottom-0 m-auto'>
       
       <Title className={'z-10'} level='h2' titleClassName={'text-center !text-white !text-5xl drop-shadow-4xl'} title="Cobrá, Pagá, Transferí" />
        <div className='w-full flex flex-row items-center justify-center h-auto'>
        <span className='text-white font-bold text-2xl'>Todo a un</span>
        <Icon name={BellBing} size={30} color={'#ffcc00'}/>
        <span className='text-white font-bold text-2xl'>de distancia</span>
      </div>
      <div className='w-full h-auto flex flex-row items-center justify-center'>
        <Button text="Crear mi cuenta Gratis" className={'px-5 z-10 btn-md bg-emerald-500 rounded-full text-white font-bold animate-shine animation-extended'}/> 
      </div>*/}
      </div>
      </div>
      </Section>
    {/*  <Section Empty={true} className="!w-full !h-auto !p-40 !flex !items-center !relative !justify-start">
   temporal test zone
  </Section>*/}


 <CircleMethods/>


      <Section classNameContainer="!min-h-[50dvh] !bg-transparent !gap-4 items-stretch relative overflow-hidden !p-0   !items-start !justify-center ">
        <div className='w-3/12 h-auto rounded-2xl bling-light-bg-2 dark:bling-dark-bg-1 '>
      <Sidebar/>

        </div>
        <div className='w-full lg:w-9/12 h-auto border bling-light-border dark:bling-dark-border rounded-md  flex flex-col p-10 gap-4'>
     <ContentLoader/>
        </div>
       
      </Section>
{/* 
      <Section classNameContainer="!min-h-[50dvh] !gap-4 items-stretch relative overflow-hidden !p-0 !bg-transparent  !items-center !justify-center !py-[50px]">
<div className='w-full gap-4 z-10 h-auto flex  flex-col items-center justify-center'>
<span className='max-w-[600px] text-4xl h-auto dark:text-white bling-light-text text-center'>¿Qué es Bling Pay?</span>
<span className='max-w-[600px] h-auto text-1xl dark:text-white bling-light-text text-center'>Bling Pay es una API robusta y versátil que permite a las empresas realizar y recibir pagos, gestionar fondos y simplificar la contabilidad. <br/><br/>Nuestra plataforma está diseñada para integrarse fácilmente con su sistema actual, proporcionándole las herramientas necesarias para manejar transacciones de manera segura y eficiente.</span>

</div>
</Section>

      <Section className="!bg-black" classNameContainer="!gap-4 items-stretch  !p-0 !bg-transparent !py-[50px]">
  <div className='w-1/3 h-auto flex bling-light dark:bling-dark flex-col items-center justify-center p-4 rounded-lg gap-5'>
    <Icon name={ShieldCheck} size={120}/>
    <Title level='h3' title="MÁXIMA SEGURIDAD" titleClassName={'text-center dark:text-white'}/>
    <span className='w-full h-auto text-center bling-light-text dark:bling-dark-text'>
      Nuestra API está protegida por los más altos estándares de encriptación, asegurando que todas sus transacciones se realicen de manera segura.
    </span>
  </div>

  <div className='w-1/3 h-auto flex bling-light dark:bling-dark flex-col items-center justify-center p-4 rounded-lg gap-5'>
    <Icon name={Lock} size={120}/>
    <Title level='h3' title="PAGOS SEGUROS" titleClassName={'text-center dark:text-white'}/>
    <span className='w-full h-auto text-center bling-light-text dark:bling-dark-text'>
      Garantizamos que cada pago se procesa con total confiabilidad, brindando tranquilidad tanto a su empresa como a sus clientes.
    </span>
  </div>

  <div className='w-1/3 h-auto flex bling-light dark:bling-dark flex-col items-center justify-center p-4 rounded-lg gap-5'>
    <Icon name={Scale} size={120}/>
    <Title level='h3' title="TRANSPARENCIA TOTAL" titleClassName={'text-center dark:text-white'}/>
    <span className='w-full h-auto text-center bling-light-text dark:bling-dark-text'>
      Bling Pay proporciona visibilidad completa de todas sus transacciones, asegurando un control total sobre sus operaciones financieras.
    </span>
  </div>
</Section>

<Section classNameContainer="!min-h-[50dvh] !gap-4 items-stretch relative overflow-hidden !p-0 !bg-transparent  !items-center !justify-center !py-[50px]">
<div className='w-1/2 gap-4 z-10 h-auto flex  flex-col items-start justify-center'>
<span className='text-4xl dark:text-white bling-light-text'>Vendé directamente<br/>desde tu web</span>



<span className='max-w-[600px] h-auto text-1xl dark:text-white bling-light-text text-start text-balance'>

convierte tu sitio en una potente herramienta de ventas. <br/>Procesá pagos de manera rápida y segura, brindando a tus clientes una experiencia de compra fluida sin intermediarios. <br/>Simplificá el proceso y hacé crecer tu negocio desde tu propia plataforma.</span>
</div>

<div className='w-1/2 gap-4 z-10 h-full flex relative flex-col items-center justify-center'>

<Image src="./images/blingpay/herobackground.avif" unoptimized width={100} height={100} alt="HeaderBlingPay" className='w-full h-full rounded-md bg-container   '/>
</div>



</Section>

<Section Empty={true} className="!min-h-[80dvh] !gap-4 !bg-black items-stretch relative overflow-hidden !p-0   !justify-center">

<div className='w-full gap-4 z-10 h-auto flex  flex-col items-center justify-center'>
<span className='max-w-[600px] text-4xl h-auto dark:text-white bling-light-text text-center'>Integra Bling Pay<br/>rápido, fácil & seguro</span>
<span className='max-w-[600px] h-auto text-1xl dark:text-white bling-light-text text-center'>Con nuestra documentación clara y un equipo de soporte disponible en todo momento, podrá empezar a procesar pagos en cuestión de minutos. <br/>Además, nuestra API es compatible con las principales plataformas de desarrollo, asegurando una integración fluida y sin complicaciones</span>

</div>



</Section>


<Section classNameContainer="!min-h-[50dvh] !gap-4 items-stretch relative overflow-hidden !p-0 !bg-transparent  !items-center !justify-center !py-[50px]">
<div className='w-1/2 gap-4 z-10 h-full flex relative flex-col items-center justify-center'>

<Image src="./images/blingpay/herobackground.avif" unoptimized width={100} height={100} alt="HeaderBlingPay" className='w-full h-full rounded-md bg-container   '/>
</div>
<div className='w-1/2 gap-4 z-10 h-auto flex  flex-col items-center justify-center'>
<span className='text-4xl dark:text-white bling-light-text text-center'>Menor comisión<br/>mayor ganancia</span>
<span className='max-w-[600px] h-auto text-1xl dark:text-white bling-light-text text-balance text-center'>Con Bling Pay, optimizará sus márgenes de beneficio sin sacrificar la seguridad ni la calidad del servicio. Aproveche nuestras tarifas competitivas exclusivas para nuevas empresas y maximice el retorno de cada transacción, permitiendo que su negocio crezca con cada pago realizado.</span>
</div>


</Section>
*/}
<Section className="!py-[50px] !bg-black" classNameContainer="!min-h-[30dvh] !gap-4 items-stretch relative overflow-hidden !p-0 !bg-transparent !flex-col !items-center !justify-center !py-[50px]">
<Image src="./images/blingpay/herobackground.avif" unoptimized width={100} height={100} alt="HeaderBlingPay" className='w-full h-auto  absolute bg-contain aspect-auto left-0 right-0 bottom-0 m-auto z-0 '/>

<div className='max-w-[500px] gap-4 z-10 h-auto flex flex-col items-center justify-center'>
<Title level='h3' title="Todas tus ventas comienzan aquí" titleClassName={'text-center dark:text-white'}/>
<Button text="¡Regístrate Gratis!" className={'min-w-[200px] px-5 z-10 btn-md bling-btn-primary dark:bling-btn-primary-dark rounded-md'}/> 
<span className='max-w-[600px] h-auto text-xs dark:text-white bling-light-text text-center'>Preguntas frecuentes</span>
</div>
</Section>

<FooterComponent footerContent brandFooter/>
    </>
  );
};

export default BlingPay;
