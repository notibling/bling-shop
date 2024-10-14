'use client';
import React from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { Button, Title, ToCopy, Icon } from '@/components/atoms';
import { Accordion } from '../organisms';

import {
  FaArrowCircleRight,
  FaClock,
  FaCookie,
  FaCreditCard,
  FaDollarSign,
  FaEnvelope,
  FaEnvelopeOpenText,
  FaEye,
  FaFacebook,
  FaHandshake,
  FaHeadset,
  FaInstagram,
  FaLandmark,
  FaPaperPlane,
  FaPeopleArrows,
  FaTiktok,
  FaTruck,
  FaTwitter,
  FaUserCheck,
  FaUserCircle,
  FaUserCog
} from 'react-icons/fa';

import { FaArrowRightArrowLeft, FaBasketShopping, FaCircleQuestion, FaFileLines, FaRotate, FaShield } from 'react-icons/fa6';

interface IFooterComponentProps {
  brandFooter?: boolean;
  footerContent?: boolean;
  className?: string;
}
function detenerMarquee() {
  const marquee: any = document.querySelector('.marquee-info'); // Reemplaza 'tu-marquee-clase' con la clase que estés utilizando para tu marquee
  marquee.stop();
}

function reiniciarMarquee() {
  const marquee: any = document.querySelector('.marquee-info'); // Reemplaza 'tu-marquee-clase' con la clase que estés utilizando para tu marquee
  marquee.start();
}
const FooterComponent: React.FC<IFooterComponentProps> = ({ className, brandFooter, footerContent }) => {
  return (
    <footer className={classNames('w-full', 'h-auto', 'bg-slate-900', className)}>
      {footerContent && (
        <div className={classNames('w-full', 'lg:w-10/12', 'h-auto', 'flex', 'self-center', 'gap-5', 'flex-grow', 'flex-col', 'mx-auto')}>
          <div className={classNames('w-full', 'h-auto', 'flex', 'self-center', ' gap-5', 'pt-5', 'pb-5', 'flex-grow', 'flex-col', 'mx-auto')}>
            <div
              className={classNames(
                'w-full',
                'h-100',
                'flex',
                'justify-between',

                'px-2'
              )}
            >
              <span className={classNames('w-fit', 'h-full', 'text-nowrap', 'px-2', 'text-slate-700', 'p-2', 'font-bold', 'text-xs', 'bling-badge', 'px-2')}>LO ÚLTIMO:</span>
              {/* <marquee className={classNames('marquee-info', 'mx-2', 'w-full', 'h-full', 'text-nowrap', 'text-slate-100', 'p-2', 'font-bold', 'text-xs')} onMouseEnter={detenerMarquee} onMouseLeave={reiniciarMarquee}>
                🚀 ¡Descubre los últimos productos añadidos a la categoría de [categoría]! Haz clic para ver más ➡️ ♦ ⏳ ¡Apresúrate! Quedan pocas unidades del popular [nombre del producto]. ¡Consigue el tuyo antes de que se agoten! 🛒 • 🎉
                ¡Prepárate para la BlingWeek! Este 22 de Marzo llegan nuevas promociones y ofertas irresistibles en todo el país. ¡No te lo pierdas! 🎁{' '}
              </marquee>*/}
              <div className={classNames('w-fit', 'h-full', 'flex', 'flex-nowrap', 'justify-center', 'items-center', 'bg-slate-800', 'px-2', 'rounded-md')}>
                <div className={classNames('w-auto', 'h-full', 'text-nowrap', 'flex', 'flex-nowrap', 'px-1', 'text-slate-100', 'p-2', 'font-bold', 'text-xs')}>
                  <span className={classNames('hidden', 'lg:flex')}>Notas &&nbsp;</span>
                  <span className={classNames('')}>Más</span>
                </div>
                <span className={classNames('w-fit', 'h-full', 'text-nowrap', 'px-1', 'text-slate-100', 'p-2', 'font-bold', 'text-xs')}>
                  <FaArrowCircleRight className='text-bling-yellow' />
                </span>
              </div>
            </div>
            {/*
      ----------------------------------------------------------------------------
      //? SECCIÓN ----------------------------------- Contenedor 4 Columnas DESKTOP -----
      ----------------------------------------------------------------------------
      */}

            <div className={classNames('w-full', 'h-auto', 'flex', 'gap-5', 'p-2', 'hidden', 'lg:flex')}>
              <div className={classNames('w-3/12', 'rounded', 'flex', 'flex-col', 'gap-1')}>
                <div className={classNames('flex', 'h-auto', 'w-full', 'join-item', ' text-slate-100', 'self-center', 'items-center', 'justify-center')}>
                  <Image width='100' height='100' className='pr-10 w-52' alt='Bling Logo' src='./images/svg/BlingLogoWhite.svg' />
                </div>
                <Title
                  title='Hashtags:'
                  titleClassName='text-sm text-slate-500'
                  iconClassName='!p-1'
                  level='h6'
                  className='w-full px-1 mb-2 leading-4 border-b rounded-none border-slate-700 '
                  icon={<Icon name='HashtagSquare' color='#64748b' size={30} />}
                  tooltipPosition='top'
                  tooltipClassName='min-w-[250px]'
                  tooltip={true}
                  tooltipContent='Hazle click a estos hashtags y utilizalos en tus post para referenciar tus productos favoritos.'
                />

                <ToCopy textToCopy={'#Bling #BlingUy #BlingUruguay #NotiBling #Blinger #Blingers #BlingersLove #BlingBell #BlingShop  #BlingServices'}>
                  <p className={classNames('w-100', 'text-xs', 'text-slate-500')}>#Bling #BlingUy #BlingUruguay #NotiBling #Blinger #Blingers #BlingersLove #BlingBell #BlingShop #BlingServices</p>
                </ToCopy>
              </div>

              <div className={classNames('w-3/12', 'rounded', 'flex', 'gap-1', 'flex-wrap', 'align-top', 'flex-start', 'content-start')}>
                <Title
                  title='Responsabilidades:'
                  titleClassName='text-sm text-slate-500'
                  iconClassName='!p-1'
                  level='h6'
                  className='w-full px-1 mb-2 leading-4 border-b rounded-none border-slate-700'
                  icon={<Icon name='ShieldUser' color='#64748b' size={30} />}
                />

                <span className={classNames('bling-badge-primary', 'text-xs')}>Términos y Condiciones</span>
                <span className={classNames('bling-badge-primary', 'text-xs')}>Políticas de Privacidad</span>
                <span className={classNames('bling-badge-primary', 'text-xs')}>Políticas de Envíos</span>
                <span className={classNames('bling-badge-primary', 'text-xs')}>Políticas de Devoluciones</span>
                <span className={classNames('bling-badge-primary', 'text-xs')}>Políticas de Cookies</span>
                <span className={classNames('bling-badge-primary', 'text-xs')}>Políticas de Terceros</span>
              </div>
              <div className={classNames('w-3/12', 'rounded', 'flex', 'gap-1', 'flex-wrap', 'align-top', 'flex-start', 'content-start')}>
                <Title
                  title='Preguntas Frecuentes:'
                  titleClassName='text-sm text-slate-500'
                  iconClassName='!p-1'
                  level='h6'
                  className='w-full px-1 mb-2 leading-4 border-b rounded-none border-slate-700'
                  icon={<Icon name='QuestionCircle' color='#64748b' size={30} />}
                />

                <span className={classNames('bling-badge-primary', 'text-xs')}>Cómo Crear un Usuario</span>
                <span className={classNames('bling-badge-primary', 'text-xs')}>Cómo Vender</span>
                <span className={classNames('bling-badge-primary', 'text-xs')}>Como Comprar</span>
                <span className={classNames('bling-badge-primary', 'text-xs')}>Cómo hacer un reclamo</span>
                <span className={classNames('bling-badge-primary', 'text-xs')}>Cuándo llega mi pedido</span>
                <span className={classNames('bling-badge-primary', 'text-xs')}>Cuántas cuotas hay</span>
                <span className={classNames('bling-badge-primary', 'text-xs')}>Cómo recuperar mi cuenta</span>
              </div>

              <div className={classNames('w-3/12', 'rounded', 'flex', 'gap-1', 'flex-wrap', 'align-top', 'flex-start', 'content-start')}>
                <Title
                  title='Central de Recursos:'
                  titleClassName='text-sm text-slate-500'
                  iconClassName='!p-1'
                  level='h6'
                  className='w-full px-1 mb-2 leading-4 border-b rounded-none border-slate-700'
                  icon={<Icon name='Layers' color='#64748b' size={30} />}
                />

                <span className={classNames('bling-badge-primary', 'text-xs')}>Centro de Seguridad</span>
                <span className={classNames('bling-badge-primary', 'text-xs')}>Soporte Online 24/7</span>
                <span className={classNames('bling-badge-primary', 'text-xs')}>Preguntas Frecuentes</span>
                <span className={classNames('bling-badge-primary', 'text-xs')}>Trabaja con nosotros</span>
                <span className={classNames('bling-badge-primary', 'text-xs')}>Comunicados de prensa</span>
                <span className={classNames('bling-badge-primary', 'text-xs')}>Formularios de contacto</span>
              </div>
              <div className={classNames('w-3/12', 'rounded', 'flex', 'gap-1', 'flex-wrap', 'align-top', 'flex-start', 'content-start')}>
                <Title
                  title='Contacto & Redes:'
                  titleClassName='text-sm text-slate-500 '
                  iconClassName='!p-1'
                  level='h6'
                  className='w-full px-1 mb-2 leading-4 border-b rounded-none border-slate-700 '
                  icon={<Icon name='Translation' color='#64748b' size={30} />}
                />

                <label className={classNames('w-full', 'h-15', 'bg-slate-800', 'input', 'input-bordered', 'flex', 'items-center', 'rounded-full', 'text-xs', 'p-1')}>
                  <FaEnvelope className={classNames('w-10', 'h-10', 'p-3', 'text-sm', 'text-slate-500')}></FaEnvelope>
                  <input type='text' className={classNames('p-2', 'flex-grow')} placeholder='Ingrese su Email' />
                  <Button icon={<FaPaperPlane />} className={classNames('w-10', 'h-10', 'rounded-full', 'cursor-pointer', 'text-slate-500', 'bg-slate-700', 'hover:bg-slate-600', 'hover:text-slate-100', 'rounded-full')}></Button>
                </label>
                <span className={classNames('w-full', 'text-xs', 'text-center', 'text-slate-500')}>¡Recibí las ofertas, descuentos y cupones semanales!</span>
                <div className={classNames('w-full', 'text-xs', 'mt-2', 'flex', 'items-center', 'p-1', 'gap-1', 'bg-slate-800', 'rounded-full')}>
                  <ToCopy textToCopy={'@Notibling'}>
                    <p className={classNames('bling-badge-primary', 'text-base', 'h-10', 'flex', 'items-center', 'justify-center')}>@Notibling</p>
                  </ToCopy>
                  <FaInstagram className={classNames('w-10', 'h-10', 'cursor-pointer', 'text-slate-500', 'bg-slate-800', 'hover:bg-slate-700', 'hover:text-slate-100', 'rounded-full', 'p-2')}></FaInstagram>
                  <FaTwitter className={classNames('w-10', 'h-10', 'cursor-pointer', 'text-slate-500', 'bg-slate-800', 'hover:bg-slate-700', 'hover:text-slate-100', 'rounded-full', 'p-2')}></FaTwitter>
                  <FaTiktok className={classNames('w-10', 'h-10', 'cursor-pointer', 'text-slate-500', 'bg-slate-800', 'hover:bg-slate-700', 'hover:text-slate-100', 'rounded-full', 'p-2')}></FaTiktok>
                  <FaFacebook className={classNames('w-10', 'h-10', 'cursor-pointer', 'text-slate-500', 'bg-slate-800', 'hover:bg-slate-700', 'hover:text-slate-100', 'rounded-full', 'p-2')}></FaFacebook>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/*
      ----------------------------------------------------------------------------
      //? SECCIÓN ----------------------------------- Contenedor 4 Acordiones MOBILE -----
      ----------------------------------------------------------------------------
      */}

      <section className={classNames('w-full', 'p-2', 'flex', 'flex-col', 'lg:hidden', 'gap-2')}>
        {/*
      ------------------------------------
      //* MOBILE - RESPONSABILIDADES -----
      ------------------------------------
      */}
        <Accordion
          trigger={
            <div className={classNames('w-full', 'text-[12px]', 'bg-slate-800', 'p-5', 'text-white', 'text-slate-500', 'px-6', 'rounded-md', 'font-bold', 'flex', 'flex-row', 'gap-5', 'items-center', 'min-h-[40px]', 'text-center')}>
              <FaLandmark className={classNames('w-[15px]', 'h-[15px]')}></FaLandmark>
              <span>Responsabilidades</span>
            </div>
          }
        >
          <div className={classNames('w-full', 'p-2')}>
            <ul className={classNames('w-full', 'p-2', 'text-slate-500', 'gap-1', 'text-sm')}>
              <li className={classNames('w-full', 'h-10', 'active:bg-slate-900', 'active:text-white', 'focus:bg-slate-900', 'focus:text-white', 'rounded-md')}>
                <a href='#' className={classNames('w-full', 'h-full', 'items-center', 'flex', 'text-slate-500', 'hover:text-slate-100', 'hover:bg-slate-700', 'rounded-md', 'hover:drop-shadow-lg')}>
                  <FaHandshake className={classNames('w-4', 'h-4', 'ml-4', 'mr-3')}></FaHandshake>
                  Términos y Condiciones
                </a>
              </li>
              <li className={classNames('w-full', 'h-10', 'active:bg-slate-900', 'active:text-white', 'focus:bg-slate-900', 'focus:text-white', 'rounded-md')}>
                <a href='#' className={classNames('w-full', 'h-full', 'items-center', 'flex', 'text-slate-500', 'hover:text-slate-100', 'hover:bg-slate-700', 'rounded-md', 'hover:drop-shadow-lg')}>
                  <FaEye className={classNames('w-4', 'h-4', 'ml-4', 'mr-3')}></FaEye>
                  Políticas de Privacidad
                </a>
              </li>
              <li className={classNames('w-full', 'h-10', 'active:bg-slate-900', 'active:text-white', 'focus:bg-slate-900', 'focus:text-white', 'rounded-md')}>
                <a href='#' className={classNames('w-full', 'h-full', 'items-center', 'flex', 'text-slate-500', 'hover:text-slate-100', 'hover:bg-slate-700', 'rounded-md', 'hover:drop-shadow-lg')}>
                  <FaTruck className={classNames('w-4', 'h-4', 'ml-4', 'mr-3')}></FaTruck>
                  Políticas de Envíos
                </a>
              </li>
              <li className={classNames('w-full', 'h-10', 'active:bg-slate-900', 'active:text-white', 'focus:bg-slate-900', 'focus:text-white', 'rounded-md')}>
                <a href='#' className={classNames('w-full', 'h-full', 'items-center', 'flex', 'text-slate-500', 'hover:text-slate-100', 'hover:bg-slate-700', 'rounded-md', 'hover:drop-shadow-lg')}>
                  <FaArrowRightArrowLeft className={classNames('w-4', 'h-4', 'ml-4', 'mr-3')}></FaArrowRightArrowLeft>
                  Políticas de Devoluciones
                </a>
              </li>
              <li className={classNames('w-full', 'h-10', 'active:bg-slate-900', 'active:text-white', 'focus:bg-slate-900', 'focus:text-white', 'rounded-md')}>
                <a href='#' className={classNames('w-full', 'h-full', 'items-center', 'flex', 'text-slate-500', 'hover:text-slate-100', 'hover:bg-slate-700', 'rounded-md', 'hover:drop-shadow-lg')}>
                  <FaCookie className={classNames('w-4', 'h-4', 'ml-4', 'mr-3')}></FaCookie>
                  Políticas de Cookies
                </a>
              </li>
              <li className={classNames('w-full', 'h-10', 'active:bg-slate-900', 'active:text-white', 'focus:bg-slate-900', 'focus:text-white', 'rounded-md')}>
                <a href='#' className={classNames('w-full', 'h-full', 'items-center', 'flex', 'text-slate-500', 'hover:text-slate-100', 'hover:bg-slate-700', 'rounded-md', 'hover:drop-shadow-lg')}>
                  <FaPeopleArrows className={classNames('w-4', 'h-4', 'ml-4', 'mr-3')}></FaPeopleArrows>
                  Políticas de Terceros
                </a>
              </li>
            </ul>
          </div>
        </Accordion>
        {/*
      ------------------------------------
      //* MOBILE - PREGUNTAS FRECUENTES -----
      ------------------------------------
      */}
        <Accordion
          trigger={
            <div className={classNames('w-full', 'text-[12px]', 'bg-slate-800', 'p-5', 'text-white', 'text-slate-500', 'px-6', 'rounded-md', 'font-bold', 'flex', 'flex-row', 'gap-5', 'items-center', 'min-h-[40px]', 'text-center')}>
              <FaCircleQuestion className={classNames('w-[15px]', 'h-[15px]')}></FaCircleQuestion>
              <span>Preguntas Frecuentes</span>
            </div>
          }
        >
          <div className={classNames('w-full', 'p-2')}>
            <ul className={classNames('w-full', 'p-2', 'text-slate-500', 'gap-1', 'text-sm')}>
              <li className={classNames('w-full', 'h-10', 'active:bg-slate-900', 'active:text-white', 'focus:bg-slate-900', 'focus:text-white', 'rounded-md')}>
                <a href='#' className={classNames('w-full', 'h-full', 'items-center', 'flex', 'text-slate-500', 'hover:text-slate-100', 'hover:bg-slate-700', 'rounded-md', 'hover:drop-shadow-lg')}>
                  <FaUserCircle className={classNames('w-4', 'h-4', 'ml-4', 'mr-3')}></FaUserCircle>
                  Cómo Crear un Usuario
                </a>
              </li>
              <li className={classNames('w-full', 'h-10', 'active:bg-slate-900', 'active:text-white', 'focus:bg-slate-900', 'focus:text-white', 'rounded-md')}>
                <a href='#' className={classNames('w-full', 'h-full', 'items-center', 'flex', 'text-slate-500', 'hover:text-slate-100', 'hover:bg-slate-700', 'rounded-md', 'hover:drop-shadow-lg')}>
                  <FaEye className={classNames('w-4', 'h-4', 'ml-4', 'mr-3')}></FaEye>
                  Políticas de Privacidad
                </a>
              </li>
              <li className={classNames('w-full', 'h-10', 'active:bg-slate-900', 'active:text-white', 'focus:bg-slate-900', 'focus:text-white', 'rounded-md')}>
                <a href='#' className={classNames('w-full', 'h-full', 'items-center', 'flex', 'text-slate-500', 'hover:text-slate-100', 'hover:bg-slate-700', 'rounded-md', 'hover:drop-shadow-lg')}>
                  <FaDollarSign className={classNames('w-4', 'h-4', 'ml-4', 'mr-3')}></FaDollarSign>
                  Cómo Vender
                </a>
              </li>
              <li className={classNames('w-full', 'h-10', 'active:bg-slate-900', 'active:text-white', 'focus:bg-slate-900', 'focus:text-white', 'rounded-md')}>
                <a href='#' className={classNames('w-full', 'h-full', 'items-center', 'flex', 'text-slate-500', 'hover:text-slate-100', 'hover:bg-slate-700', 'rounded-md', 'hover:drop-shadow-lg')}>
                  <FaBasketShopping className={classNames('w-4', 'h-4', 'ml-4', 'mr-3')}></FaBasketShopping>
                  Cómo Comprar
                </a>
              </li>
              <li className={classNames('w-full', 'h-10', 'active:bg-slate-900', 'active:text-white', 'focus:bg-slate-900', 'focus:text-white', 'rounded-md')}>
                <a href='#' className={classNames('w-full', 'h-full', 'items-center', 'flex', 'text-slate-500', 'hover:text-slate-100', 'hover:bg-slate-700', 'rounded-md', 'hover:drop-shadow-lg')}>
                  <FaRotate className={classNames('w-4', 'h-4', 'ml-4', 'mr-3')}></FaRotate>
                  Cómo hacer un reclamo
                </a>
              </li>
              <li className={classNames('w-full', 'h-10', 'active:bg-slate-900', 'active:text-white', 'focus:bg-slate-900', 'focus:text-white', 'rounded-md')}>
                <a href='#' className={classNames('w-full', 'h-full', 'items-center', 'flex', 'text-slate-500', 'hover:text-slate-100', 'hover:bg-slate-700', 'rounded-md', 'hover:drop-shadow-lg')}>
                  <FaClock className={classNames('w-4', 'h-4', 'ml-4', 'mr-3')}></FaClock>
                  Cuándo llega mi pedido
                </a>
              </li>
              <li className={classNames('w-full', 'h-10', 'active:bg-slate-900', 'active:text-white', 'focus:bg-slate-900', 'focus:text-white', 'rounded-md')}>
                <a href='#' className={classNames('w-full', 'h-full', 'items-center', 'flex', 'text-slate-500', 'hover:text-slate-100', 'hover:bg-slate-700', 'rounded-md', 'hover:drop-shadow-lg')}>
                  <FaCreditCard className={classNames('w-4', 'h-4', 'ml-4', 'mr-3')}></FaCreditCard>
                  Cuántas cuotas hay
                </a>
              </li>
              <li className={classNames('w-full', 'h-10', 'active:bg-slate-900', 'active:text-white', 'focus:bg-slate-900', 'focus:text-white', 'rounded-md')}>
                <a href='#' className={classNames('w-full', 'h-full', 'items-center', 'flex', 'text-slate-500', 'hover:text-slate-100', 'hover:bg-slate-700', 'rounded-md', 'hover:drop-shadow-lg')}>
                  <FaUserCog className={classNames('w-4', 'h-4', 'ml-4', 'mr-3')}></FaUserCog>
                  Cómo recuperar mi cuenta
                </a>
              </li>
            </ul>
          </div>
        </Accordion>
        {/*
      ------------------------------------
      //* MOBILE - CENTRAL DE RECURSOS -----
      ------------------------------------
      */}
        <Accordion
          trigger={
            <div className={classNames('w-full', 'text-[12px]', 'bg-slate-800', 'p-5', 'text-white', 'text-slate-500', 'px-6', 'rounded-md', 'font-bold', 'flex', 'flex-row', 'gap-5', 'items-center', 'min-h-[40px]', 'text-center')}>
              <FaHeadset className={classNames('w-[15px]', 'h-[15px]')}></FaHeadset>
              <span>Central de Recursos</span>
            </div>
          }
        >
          <div className={classNames('w-full', 'p-2')}>
            <ul className={classNames('w-full', 'p-2', 'text-slate-500', 'gap-1', 'text-sm')}>
              <li className={classNames('w-full', 'h-10', 'active:bg-slate-900', 'active:text-white', 'focus:bg-slate-900', 'focus:text-white', 'rounded-md')}>
                <a href='#' className={classNames('w-full', 'h-full', 'items-center', 'flex', 'text-slate-500', 'hover:text-slate-100', 'hover:bg-slate-700', 'rounded-md', 'hover:drop-shadow-lg')}>
                  <FaShield className={classNames('w-4', 'h-4', 'ml-4', 'mr-3')}></FaShield>
                  Centro de Seguridad
                </a>
              </li>
              <li className={classNames('w-full', 'h-10', 'active:bg-slate-900', 'active:text-white', 'focus:bg-slate-900', 'focus:text-white', 'rounded-md')}>
                <a href='#' className={classNames('w-full', 'h-full', 'items-center', 'flex', 'text-slate-500', 'hover:text-slate-100', 'hover:bg-slate-700', 'rounded-md', 'hover:drop-shadow-lg')}>
                  <FaHeadset className={classNames('w-4', 'h-4', 'ml-4', 'mr-3')}></FaHeadset>
                  Soporte Online 24/7
                </a>
              </li>
              <li className={classNames('w-full', 'h-10', 'active:bg-slate-900', 'active:text-white', 'focus:bg-slate-900', 'focus:text-white', 'rounded-md')}>
                <a href='#' className={classNames('w-full', 'h-full', 'items-center', 'flex', 'text-slate-500', 'hover:text-slate-100', 'hover:bg-slate-700', 'rounded-md', 'hover:drop-shadow-lg')}>
                  <FaUserCheck className={classNames('w-4', 'h-4', 'ml-4', 'mr-3')}></FaUserCheck>
                  Trabaja con Nosotros
                </a>
              </li>
              <li className={classNames('w-full', 'h-10', 'active:bg-slate-900', 'active:text-white', 'focus:bg-slate-900', 'focus:text-white', 'rounded-md')}>
                <a href='#' className={classNames('w-full', 'h-full', 'items-center', 'flex', 'text-slate-500', 'hover:text-slate-100', 'hover:bg-slate-700', 'rounded-md', 'hover:drop-shadow-lg')}>
                  <FaFileLines className={classNames('w-4', 'h-4', 'ml-4', 'mr-3')}></FaFileLines>
                  Comunicados de Prensa
                </a>
              </li>
              <li className={classNames('w-full', 'h-10', 'active:bg-slate-900', 'active:text-white', 'focus:bg-slate-900', 'focus:text-white', 'rounded-md')}>
                <a href='#' className={classNames('w-full', 'h-full', 'items-center', 'flex', 'text-slate-500', 'hover:text-slate-100', 'hover:bg-slate-700', 'rounded-md', 'hover:drop-shadow-lg')}>
                  <FaEnvelopeOpenText className={classNames('w-4', 'h-4', 'ml-4', 'mr-3')}></FaEnvelopeOpenText>
                  Formularios de Contacto
                </a>
              </li>
            </ul>
          </div>
        </Accordion>
      </section>

      {/*
      -----------------------------------------------------------------
      //? SECCIÓN ----------------------------------- BRANDFOOTER -----
      -----------------------------------------------------------------
      */}

      {brandFooter && (
        <div className={classNames('w-full', 'h-auto', 'bg-slate-950')}>
          <div className={classNames('w-10/12', 'h-10', 'flex', 'gap-5', 'flex-grow', 'mx-auto', 'justify-center', 'text-slate-500')}>
            <p className={classNames('text-xs', 'self-center')}>
              &copy; 2024 BlingCompany
              <sup>&reg;</sup>. Todos los derechos reservados.
            </p>
            <p className={classNames('text-xs', 'self-center', 'hidden', 'lg:flex')}>@notibling</p>
            <p className={classNames('text-xs', 'self-center', 'hidden', 'lg:flex')}>#Bling</p>
            <p className={classNames('text-xs', 'self-center', 'hidden', 'lg:flex')}>Bling.uy • Todo a un 🔔 de distancia.</p>
          </div>
        </div>
      )}
    </footer>
  );
};
export { FooterComponent };
