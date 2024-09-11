'use client';
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Accordion } from '@/components/organisms';
import { Banner, BannerSize, ProductCounter } from '@/components/molecules';
import { AccordionTitle, Button, Chip, Icon, Item, Logo, Separator } from '@/components/atoms';
import { FaBox, FaBullhorn, FaCog, FaCommentsDollar, FaCreditCard, FaDolly, FaFileInvoice, FaHeart, FaTruck, FaTshirt, FaUserCog } from 'react-icons/fa';
import { FaBasketShopping, FaChartColumn, FaMessage } from 'react-icons/fa6';
import Link from 'next/link';
import { useDarkMode } from '@/hooks';
import {
  AltArrowDown,
  AltArrowUp, BellBing,
  BillCheck,
  BillList,
  Box,
  Calculator,
  CalculatorMinimalistic, Cart3,
  Cart5,
  Chart2,
  Check, Code2,
  CupStar,
  Delivery,
  EyeScan,
  Garage,
  Graph,
  Heart,
  History2,
  Incognito,
  Pause, SaleSquare,
  Settings,
  ShieldKeyhole,
  ShieldUser,
  SmartHome, SortHorizontal,
  Star,
  TagPrice,
  TextFieldFocus,
  Times,
  Trellis,
  Widget2,
  Widget4
} from '@/icons/tsx';
import Image from 'next/image';

interface SectionLateralPanelProps {
  isWide: boolean;
  className?: string;
}
const SectionLateralPanel: React.FC<SectionLateralPanelProps> = ({ isWide, className }) => {
  const [showText, setShowText] = useState(isWide);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const { darkMode } = useDarkMode();

  const handleToggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  useEffect(() => {
    if (isWide) {
      setShowText(true);
    } else {
      setTimeout(() => {
        setShowText(false);
      }, 200);
    }
  }, [isWide]);

  return (
    <>
      <div className={classNames('w-full  rounded-sm h-full self-stretch  gap-2 flex  p-2 flex-col',className)}>
        {/* Logo BLING */}
        <div className="w-full flex-col justify-stretch pb-5 flex h-full self-stretch border dark:border-bling-dark-bg-3 border-bling-light-bg-5 px-5 gap-2 rounded-md">
          <div className={classNames('w-full h-24 rounded-sm justify-center text-slate-700 items-center flex text-center')}>
            <Logo darkMode={darkMode} className={classNames('w-25 transition-all duration-300')} />
          </div>

          {/* Banner de alertas y promos */}
          <div className={classNames('w-full', 'bling-light','dark:bling-dark-bg-1', 'border', 'bling-light-border', 'dark:bling-dark-border','p-2', 'rounded-xl', 'flex','flex-row','gap-2','justify-between','items-center',' transition-all', 'duration-300')}>

<div className='w-[50px] h-[50px] rounded-md overflow-hidden bg-red-300'><Image unoptimized alt="SectionLateralImageProfile" width={50} height={50} src="/images/webp/user/undefined.webp"/></div>
{showText &&(
<div className="w-auto grow h-auto flex flex-col justify-start items-center">
          <span className="w-full text-left bling-light-text dark:text-white h-auto font-bold text-xs">
            Empresa internacional S.A.
          </span>
          <span className="w-full text-left bling-light-text dark:text-gray-500 h-auto text-[10px]">
           Rubro o sector de mercado
          </span>
        </div>)}
      
        </div>


    
          <div className={classNames('w-full', 'rounded-xl', ' transition-all', 'duration-300')}>
            <Banner
              image={'/images/webp/banners/BlingProductScene1.webp'}
              imageAlt="Descripción de la imagen"
              size={BannerSize.base}
              title={isWide ? 'MES DE MAMÁ' : <FaBullhorn className="w-full text-center" />}
              description={isWide ? 'Aumenta tus ventas con promos para mamá.' : ''}
              polarized
            ></Banner>
          </div>

          <div className={classNames('w-full', 'h-auto', 'rounded-xl', ' transition-all', 'duration-300')}>
            <Link href="/dashboard">
              <Button showText={showText} icon={<Icon name={Widget4} className={classNames('w-[15px]', 'h-[15px]')} />} text="Dashboard" className="w-full btn-md bling-btn-primary dark:bling-btn-primary-dark" />
            </Link>
          </div>

          <Separator noText={true} />
          {/* Notificaciones de sistema */}
          <div className={classNames('w-full', 'rounded-xl', ' transition-all', 'duration-300')}>
            <ProductCounter showText={showText} />
          </div>
          <Separator noText={true} />
          <div className={classNames('w-full', 'gap-2', 'flex', 'flex-col', 'rounded-xl', ' transition-all', 'duration-300')}>
            {/* Notificaciónes > Notificaciones de Cuenta, Sistema, Seguridad,| Anuncios | Notas de version */}
            <div>
               <Accordion
                 className="border bling-light-border dark:bling-dark-border !bg-transparent !rounded-lg"
                trigger={<Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 dark:bling-dark-bg-2  bling-light hover:bg-white'} pattern={' dhb-pat-notifications'} content="icon" showText={showText} suffix={<Icon name={isAccordionOpen ? AltArrowUp : AltArrowDown} size={15} />} icon={<Icon name={BellBing} size={20} />} text="Notificaciones" />}
              >
                <Link href="/dashboard/notifications">
                  <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'}  content="icon" showText={showText} icon={<Icon name={BellBing} size={20} />} suffix={<Chip text="0" className='py-1' status='neutral'/>} text="Todas las Notificaciones" />
                </Link>
                <Link href="/dashboard//notifications/announcements">
                  <Item content="icon" contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'}  showText={showText} icon={<Icon name={SmartHome} size={20} />} suffix={<Chip text="0" className='py-1' status='neutral'/>} text="Promociones" />
                </Link>
                <Link href="/dashboard//notifications/version-notes">
                  <Item content="icon" contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'}  showText={showText} icon={<Icon name={Code2} size={20} />} suffix={<Chip text="0" className='py-1' status='neutral'/>} text="Notas de la versión" />
                </Link>
              </Accordion>
            </div>

            <div>
             <Accordion
                 className="border bling-light-border dark:bling-dark-border !bg-transparent !rounded-lg"
                trigger={<Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 dark:bling-dark-bg-2  bling-light hover:bg-white'}  pattern={'  dhb-pat-products'} content="icon" showText={showText} suffix={<Icon name={isAccordionOpen ? AltArrowUp : AltArrowDown} size={15} />} icon={<Icon name={Box} size={20} />} text="Productos" />}
              >
                <Link href="/dashboard/products">
                  <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'}  content="icon" showText={showText} icon={<Icon name={Widget2} size={20} />} suffix={<Chip text="0" className='py-1' status='neutral'/>} text="Todos los Productos" />
                </Link>
                <Link href="/dashboard/products/in-review">
                  <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'}  content="icon" showText={showText} icon={<Icon name={EyeScan} size={20} />} suffix={<Chip text="0" className='py-1' status='neutral'/>} text="En Revisión" />
                </Link>
                <Link href="/dashboard/products/paused">
                  <Item content="icon" contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'}  showText={showText} icon={<Icon name={Pause} size={20} />} suffix={<Chip text="0" className='py-1' status='neutral'/>} text="Pausados" />
                </Link>
                <Link href="/dashboard/products/favourite">
                  <Item content="icon" contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'}  showText={showText} icon={<Icon name={Heart} size={20} />} suffix={<Chip text="0" className='py-1' status='neutral'/>} text="Productos Favoritos" />
                </Link>
              </Accordion>
            </div>

            <div>
             <Accordion
                 className="border bling-light-border dark:bling-dark-border !bg-transparent !rounded-lg"
                trigger={<Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 dark:bling-dark-bg-2  bling-light hover:bg-white'} content="icon" pattern={' dhb-pat-purchased'}  showText={showText} suffix={<Icon name={isAccordionOpen ? AltArrowUp : AltArrowDown} size={15} />} icon={<Icon name={Cart3} size={20} />} text="Mis Compras" />}
              >
                <Link href="/dashboard/purchased">
                  <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'} content="icon" showText={showText} icon={<Icon name={Cart3} size={20} />} suffix={<Chip text="0" className='py-1' status='neutral'/>} text="Resumen de compras" />
                </Link>
                <Link href="/dashboard/purchased/invoice">
                  <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'} content="icon" showText={showText} icon={<Icon name={BillList} size={20} />} suffix={<Chip text="0" className='py-1' status='neutral'/>} text="Mis facturas de compra" />
                </Link>
         
              </Accordion>
            </div>

            <div>
             <Accordion
                 className="border bling-light-border dark:bling-dark-border !bg-transparent !rounded-lg"
                trigger={<Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 dark:bling-dark-bg-2  bling-light hover:bg-white'} content="icon" pattern={' dhb-pat-sales'} showText={showText} suffix={<Icon name={isAccordionOpen ? AltArrowUp : AltArrowDown} size={15} />} icon={<Icon name={BillCheck} size={20} />} text="Ventas" />}
              >
                <Link href="/dashboard/sales">
                  <Item  contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'} pattern={'dhb-grad-resume !w-1/2'}   content="icon" showText={showText} icon={<Icon name={BillCheck} size={20} />} suffix={<Chip text="0" className='py-1' status='neutral'/>} text="Resumen de ventas" />
                </Link>
                <Link href="/dashboard/sales/in-review">
                  <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'}  pattern={'dhb-grad-in-review !w-1/2'}  content="icon" showText={showText} icon={<Icon name={EyeScan} size={20} />} suffix={<Chip text="0" className='py-1' status='neutral'/>} text="En Revisión" />
                </Link>
                <Link href="/dashboard/sales/finished">
                  <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'}  pattern={'dhb-grad-finished !w-1/2'}  content="icon" showText={showText} icon={<Icon name={Check} size={20} />} suffix={<Chip text="0" className='py-1' status='neutral'/>} text="Finalizadas" />
                </Link>
                <Link href="/dashboard/sales/in-progress">
                  <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'}  pattern={'dhb-grad-in-progress !w-1/2'}  content="icon" showText={showText} icon={<Icon name={History2} size={20} />} suffix={<Chip text="0" className='py-1' status='neutral'/>} text="En progreso" />
                </Link>
                <Link href="/dashboard/sales/cancelled">
                  <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'}  pattern={'dhb-grad-cancelled !w-1/2'}  content="icon" showText={showText} icon={<Icon name={Times} size={20} />} suffix={<Chip text="0" className='py-1' status='neutral'/>} text="Canceladas" />
                </Link>
              </Accordion>
            </div>

            <div>
             <Accordion
                 className="border bling-light-border dark:bling-dark-border !bg-transparent !rounded-lg"
                trigger={<Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 dark:bling-dark-bg-2  bling-light hover:bg-white'} pattern={' dhb-pat-shipping'} content="icon"  showText={showText} suffix={<Icon name={isAccordionOpen ? AltArrowUp : AltArrowDown} size={15} />} icon={<Icon name={Delivery} size={20} />} text="Envíos" />}
              >
                <Link href="/dashboard/shipping">
                  <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'} pattern={'dhb-grad-resume !w-1/2'}   content="icon" showText={showText} icon={<Icon name={Delivery} size={20} />}  suffix={<Chip text="0" className='py-1' status='neutral'/>}  text="Resumen de envíos" />
                </Link>
                <Link href="/dashboard/shipping/in-review">
                  <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'} pattern={'dhb-grad-in-review !w-1/2'}  content="icon" showText={showText} suffix={<Chip text="0" className='py-1' status='neutral'/>} icon={<Icon name={EyeScan} size={20} />} text="En Revisión" />
                </Link>
                <Link href="/dashboard/shipping/finished">
                  <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'} pattern={'dhb-grad-finished !w-1/2'}   content="icon" showText={showText}  suffix={<Chip text="0" className='py-1' status='neutral'/>}  icon={<Icon name={Check} size={20} />} text="Finalizados" />
                </Link>
                <Link href="/dashboard/shipping/in-progress">
                  <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'} pattern={'dhb-grad-in-progress !w-1/2'}   content="icon" showText={showText}  suffix={<Chip text="0" className='py-1' status='neutral'/>}  icon={<Icon name={History2} size={20} />} text="En progreso" />
                </Link>
                <Link href="/dashboard/shipping/cancelled">
                  <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'} pattern={'dhb-grad-cancelled !w-1/2'}   content="icon" showText={showText}  suffix={<Chip text="0" className='py-1' status='neutral'/>}  icon={<Icon name={Times} size={20} />} text="Cancelados" />
                </Link>
              </Accordion>
            </div>

            <div>
             <Accordion
                 className="border bling-light-border dark:bling-dark-border !bg-transparent !rounded-lg"
                trigger={<Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 dark:bling-dark-bg-2  bling-light hover:bg-white'}  pattern={' dhb-pat-returns'} content="icon"  showText={showText} suffix={<Icon name={isAccordionOpen ? AltArrowUp : AltArrowDown} size={15} />} icon={<Icon name={SortHorizontal} size={20} />} text="Devoluciones" />}
              >
                <Link href="/dashboard/returns">
                  <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'} pattern={'dhb-grad-resume !w-1/2'}   content="icon" showText={showText} icon={<Icon name={SortHorizontal} size={20} />} suffix={<Chip text="0" className='py-1' status='neutral'/>} text="Resumen de devoluciones" />
                </Link>
                <Link href="/dashboard/returns/in-review">
                  <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'} pattern={'dhb-grad-in-review !w-1/2'}   content="icon" showText={showText} icon={<Icon name={EyeScan} size={20} />} suffix={<Chip text="0" className='py-1' status='neutral'/>} text="En Revisión" />
                </Link>
                <Link href="/dashboard/returns/finished">
                  <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'} pattern={'dhb-grad-finished !w-1/2'}   content="icon" showText={showText} icon={<Icon name={Check} size={20} />} suffix={<Chip text="0" className='py-1' status='neutral'/>} text="Finalizadas" />
                </Link>
                <Link href="/dashboard/returns/in-progress">
                  <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'} pattern={'dhb-grad-in-progress !w-1/2'}   content="icon" showText={showText} icon={<Icon name={History2} size={20} />} suffix={<Chip text="0" className='py-1' status='neutral'/>} text="En progreso" />
                </Link>
                <Link href="/dashboard/returns/cancelled">
                  <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'} pattern={'dhb-grad-cancelled !w-1/2'}   content="icon" showText={showText} icon={<Icon name={Times} size={20} />} suffix={<Chip text="0" className='py-1' status='neutral'/>} text="Canceladas" />
                </Link>
              </Accordion>
            </div>

            <div>
             <Accordion
                 className="border bling-light-border dark:bling-dark-border !bg-transparent !rounded-lg"
                trigger={<Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 dark:bling-dark-bg-2  bling-light hover:bg-white'} pattern={' dhb-pat-campaigns'} content="icon" showText={showText} suffix={<Icon name={isAccordionOpen ? AltArrowUp : AltArrowDown} size={15} />} icon={<Icon name={CupStar} size={20} />} text="Campañas" />}
              >
                <Link href="/dashboard/campaigns">
                  <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'} pattern={'dhb-grad-resume !w-1/2'}   content="icon" showText={showText} icon={<Icon name={CupStar} size={20} />} suffix={<Chip text="0" className='py-1' status='neutral'/>} text="Resumen de campanas" />
                </Link>
                <Link href="/dashboard/campaigns/in-review">
                  <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'} pattern={'dhb-grad-in-review !w-1/2'}  className="border bling-light-border dark:bling-dark-border rounded-md" content="icon" showText={showText} icon={<Icon name={EyeScan} size={20} />} suffix={<Chip text="0" className='py-1' status='neutral'/>} text="En Revisión" />
                </Link>
                <Link href="/dashboard/campaigns/finished">
                  <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'} pattern={'dhb-grad-finished !w-1/2'}  className="border bling-light-border dark:bling-dark-border rounded-md" content="icon" showText={showText} icon={<Icon name={Check} size={20} />} suffix={<Chip text="0" className='py-1' status='neutral'/>} text="Finalizadas" />
                </Link>
                <Link href="/dashboard/campaigns/in-progress">
                  <Item  contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'}pattern={'dhb-grad-in-progress !w-1/2'}  className="border bling-light-border dark:bling-dark-border rounded-md" content="icon" showText={showText} icon={<Icon name={History2} size={20} />} suffix={<Chip text="0" className='py-1' status='neutral'/>} text="En progreso" />
                </Link>
                <Link href="/dashboard/campaigns/cancelled">
                  <Item pattern={'dhb-grad-cancelled !w-1/2'}  className="border bling-light-border dark:bling-dark-border rounded-md" content="icon" showText={showText} icon={<Icon name={Times} size={20} />} suffix={<Chip text="0" className='py-1' status='neutral'/>} text="Canceladas" />
                </Link>
              </Accordion>
            </div>

            <div>
             <Accordion
                 className="border bling-light-border dark:bling-dark-border !bg-transparent !rounded-lg"
                trigger={<Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 dark:bling-dark-bg-2  bling-light hover:bg-white'} pattern={' dhb-pat-statistics'} content="icon"  showText={showText} suffix={<Icon name={isAccordionOpen ? AltArrowUp : AltArrowDown} size={15} />} icon={<Icon name={Chart2} size={20} />} text="Estadísticas" />}
              >
               
                <Link href="/dashboard/statics/sales">
                  <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'} pattern={' dhb-pat-sales'} className="border bling-light-border dark:bling-dark-border rounded-md" content="icon" showText={showText} icon={<Icon name={BillCheck} size={20} />} text="Ventas" />
                </Link>
                <Link href="/dashboard/statics/purchased">
                  <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'} pattern={' dhb-pat-purchased'} className="border bling-light-border dark:bling-dark-border rounded-md" content="icon" showText={showText} icon={<Icon name={Cart5} size={20} />} text="Compras" />
                </Link>
                <Link href="/dashboard/statics/returns">
                  <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'} pattern={' dhb-pat-returns'} className="border bling-light-border dark:bling-dark-border rounded-md" content="icon" showText={showText} icon={<Icon name={SortHorizontal} size={20} />} text="Devoluciones" />
                </Link>
                <Link href="/dashboard/statics/reviews">
                  <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'} pattern={'dhb-pat-reviews'} className="border bling-light-border dark:bling-dark-border rounded-md" content="icon" showText={showText} icon={<Icon name={Star} size={20} />} text="Reseñas" />
                </Link>
                <Link href="/dashboard/statics">
                  <Item  contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'} pattern={' dhb-pat-statistics'}  className="border bling-light-border dark:bling-dark-border rounded-md" content="icon" showText={showText} icon={<Icon name={Graph} size={20} />} text="Generales" />
                </Link>
              </Accordion>
            </div>

            <Separator noText={true} />
            <div>
             <Accordion
                 className="border bling-light-border dark:bling-dark-border !bg-transparent !rounded-lg"
                trigger={<Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 dark:bling-dark-bg-2  bling-light hover:bg-white'} content="icon"  showText={showText} suffix={<Icon name={isAccordionOpen ? AltArrowUp : AltArrowDown} size={15} />} icon={<Icon name={Calculator} size={20} />} text="Herramientas" />}
              >
                <Link href="/dashboard/cost-calc">
                  <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'} content="icon" showText={showText} icon={<Icon name={CalculatorMinimalistic} size={20} />} text="Calculadora de costos" />
                </Link>
                <Link href="/dashboard/percent-calc">
                  <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'} content="icon" showText={showText} icon={<Icon name={SaleSquare} size={20} />} text="Calculadora de Porcentajes" />
                </Link>
                <Link href="/dashboard/discount-calc">
                  <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'} content="icon" showText={showText} icon={<Icon name={TagPrice} size={20} />} text="Calculadora de descuentos" />
                </Link>
                <Link href="/dashboard/background-remover">
                  <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'} content="icon" showText={showText} icon={<Icon name={Trellis} size={20} />} text="Borrador de Fondos" />
                </Link>
                <Link href="/dashboard/title-generator">
                  <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'} content="icon" showText={showText} icon={<Icon name={TextFieldFocus} size={20} />} text="Generador de títulos" />
                </Link>
              </Accordion>
            </div>

            <Separator noText={true} />
            <div>
            <Accordion
                 className="border bling-light-border dark:bling-dark-border !bg-transparent !rounded-lg"
                trigger={<Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 dark:bling-dark-bg-2  bling-light hover:bg-white'} content="icon" showText={showText} suffix={<Icon name={isAccordionOpen ? AltArrowUp : AltArrowDown} size={15} />} icon={<Icon name={Settings} size={20} />} text="Configuración" />}
              >
                <Link href="/dashboard/config">
                  <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'} content="icon" showText={showText} icon={<Icon name={ShieldKeyhole} size={20} />} text="Seguridad" />
                </Link>
                <Link href="/dashboard/config/notifications">
                  <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'} content="icon" showText={showText} icon={<Icon name={BellBing} size={20} />} text="Notificaciones" />
                </Link>
                <Link href="/dashboard/config/user">
                  <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'} content="icon" showText={showText} icon={<Icon name={ShieldUser} size={20} />} text="Cuenta de Usuario" />
                </Link>
                <Link href="/dashboard/config/privacy">
                  <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'} content="icon" showText={showText} icon={<Icon name={Incognito} size={20} />} text="Privacidad" />
                </Link>
                <Link href="/dashboard/config/shipping-address">
                  <Item contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'} content="icon" showText={showText} icon={<Icon name={Garage} size={20} />} text="Direcciones" />
                </Link>
              </Accordion>
            </div>

            <Separator noText={true} />

            <div className='border border-red-500 bg-red-500 bg-opacity-20 rounded-md p-1 flex flex-col items-stretch gap-1 items-center justify-start'>
             {showText && ( <span className='w-full h-auto rounded-md text-white bg-red-500 text-xs text-center px-2'>Bloque antiguo proximo a ser eliminado</span> )}
            <div>
              {/* Ventas y Servicios */}
              <Accordion
                className=" w-full border bling-light-border dark:bling-dark-border rounded-md"
                trigger={<AccordionTitle className="rounded-md" content="icon" showText={showText} icon={<FaCommentsDollar className={classNames('w-[15px]', 'h-[15px]')} />} text="Ventas y Servicios" />}
              >
                <Link href="/dashboard/customersupport">
                  <Item content="icon" className="border bling-light-border dark:bling-dark-border rounded-md" showText={showText} icon={<FaMessage className={classNames('w-[15px]', 'h-[15px]')} />} text="Consultas del Cliente" />
                </Link>
                <Link href="/dashboard/analitics">
                  <Item content="icon" className="border bling-light-border dark:bling-dark-border rounded-md" showText={showText} icon={<FaChartColumn className={classNames('w-[15px]', 'h-[15px]')} />} text="Métricas y Análisis" />
                </Link>
                <Link href="/dashboard/products">
                  <Item content="icon" className="border bling-light-border dark:bling-dark-border rounded-md" showText={showText} icon={<FaBox className={classNames('w-[15px]', 'h-[15px]')} />} text="Productos" />
                </Link>
              </Accordion>
            </div>
            <div>
              {/* Compras y Adquisiciones */}
              <Accordion
                className=" w-full border bling-light-border dark:bling-dark-border rounded-md"
                trigger={<AccordionTitle className="rounded-md" content="icon" showText={showText} icon={<FaBasketShopping className={classNames('w-[15px]', 'h-[15px]')} />} text="Compras y Adquisiciones" />}
              >
                <Item content="icon" className="border bling-light-border dark:bling-dark-border rounded-md" showText={showText} icon={<FaTshirt className={classNames('w-[15px]', 'h-[15px]')} />} text="Compras Realizadas" />
                <Item content="icon" className="border bling-light-border dark:bling-dark-border rounded-md" showText={showText} icon={<FaDolly className={classNames('w-[15px]', 'h-[15px]')} />} text="Pedidos en Camino" />
                <Item content="icon" className="border bling-light-border dark:bling-dark-border rounded-md" showText={showText} icon={<FaFileInvoice className={classNames('w-[15px]', 'h-[15px]')} />} text="Campañas" />
                <Item content="icon" className="border bling-light-border dark:bling-dark-border rounded-md" showText={showText} icon={<FaBullhorn className={classNames('w-[15px]', 'h-[15px]')} />} text="Facturas de Compra" />
                <Item content="icon" className="border bling-light-border dark:bling-dark-border rounded-md" showText={showText} icon={<FaHeart className={classNames('w-[15px]', 'h-[15px]')} />} text="Productos Favoritos" />
              </Accordion>
            </div>
            <div>
              {/* Administración */}
              <Accordion
                className=" w-full border bling-light-border dark:bling-dark-border rounded-md"
                trigger={<AccordionTitle className="rounded-md" content="icon" showText={showText} icon={<FaCog className={classNames('w-[15px]', 'h-[15px]')} />} text="Ajustes & Configuración" />}
              >
                <Item content="icon" className="border bling-light-border dark:bling-dark-border rounded-md" showText={showText} icon={<FaUserCog className={classNames('w-[15px]', 'h-[15px]')} />} text="Información General" />
                <Item content="icon" className="border bling-light-border dark:bling-dark-border rounded-md" showText={showText} icon={<FaTruck className={classNames('w-[15px]', 'h-[15px]')} />} text="Dirección Envío!" />
                <Item content="icon" className="border bling-light-border dark:bling-dark-border rounded-md" showText={showText} icon={<FaCreditCard className={classNames('w-[15px]', 'h-[15px]')} />} text="Medios de Pago" />
              </Accordion>{' '}
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionLateralPanel;
