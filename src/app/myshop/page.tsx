'use client';
import React from 'react';
import classNames from 'classnames';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { Title } from '@/components/atoms';
import { FaArrowsAlt, FaBell, FaBox, FaCalendarDay, FaEdit, FaPalette } from 'react-icons/fa';
import { Button } from '@/components/atoms';
import { FaShop, FaSquareArrowUpRight } from 'react-icons/fa6';
import { CardVertical } from '@/components/molecules';

interface ViewConfigShopDashboardProps {}

const ViewConfigShopDashboard: React.FC<ViewConfigShopDashboardProps> = ({}) => {
  const { conditionalValue } = useBreakpoint();
  return (
    <>
      <div className={classNames('w-full', 'h-auto', 'rounded-sm', 'flex', 'flex-col', 'flex-grow', 'justify-between', 'items-center')}>
        <div className={classNames('w-full', 'h-auto', 'p-2')}>
          <div className={classNames('w-full', 'h-auto', 'rounded-sm', 'flex', 'lg:flex-nowrap', 'flex-wrap', 'gap-2', 'flex-grow', 'justify-between', 'items-center', 'py-2')}>
            <div className={classNames('w-full', 'flex-wrap', 'lg:flex-nowrap', 'gap-2', 'flex')}>
              <Title icon={<FaShop />} iconColor='text-slate-700' titleClassName='text-slate-700' descriptionClassName='text-xs text-nowrap text-slate-700' title='Editar Tienda' description='Personaliza tus espacios' />
            </div>
            <div className={classNames('w-full', 'lg:w-fit', 'bg-slate-200', 'flex-nowrap', 'rounded-brand', 'gap-2', 'h-auto', 'p-2', 'flex', 'flex-row', 'justify-end', 'items-left')}>
              <Button
                className={classNames(
                  'w-fit',
                  'bling-btn-secondary',
                  'h-auto',
                  'p-4',
                  'lg:p-2',
                  'px-4',
                  'text-slate-700',
                  'lg:flex-nowrap',
                  'flex',
                  'flex-row',
                  'justify-center',
                  'bg-white',
                  'rounded-brand',
                  'gap-2',
                  'font-bold',
                  'items-center',
                  'text-sm',
                  'font-bold'
                )}
              >
                <FaArrowsAlt />
                <span className='text-nowrap hidden lg:flex'>Modificar Disposición</span>{' '}
                <span>
                  <FaEdit />
                </span>
              </Button>
              <Button
                className={classNames(
                  'w-fit',
                  'bling-btn-secondary',
                  'h-auto',
                  'p-4',
                  'lg:p-2',
                  'px-4',
                  'text-slate-700',
                  'lg:flex-nowrap',
                  'flex',
                  'flex-row',
                  'justify-center',
                  'bg-white',
                  'rounded-brand',
                  'gap-2',
                  'font-bold',
                  'items-center',
                  'text-sm',
                  'font-bold'
                )}
              >
                <FaPalette />
                <span className='text-nowrap hidden lg:flex'>Editar Estilos</span>{' '}
                <span>
                  <FaEdit />
                </span>
              </Button>
              <Button
                className={classNames(
                  'w-fit',
                  'bling-btn-secondary',
                  'h-auto',
                  'p-4',
                  'lg:p-2',
                  'px-4',
                  'text-slate-700',
                  'lg:flex-nowrap',
                  'flex',
                  'flex-row',
                  'justify-center',
                  'bg-white',
                  'rounded-brand',
                  'gap-2',
                  'font-bold',
                  'items-center',
                  'text-sm',
                  'font-bold'
                )}
              >
                <FaSquareArrowUpRight />
                <span className='text-nowrap hidden lg:flex'>Vista Previa</span>
              </Button>
            </div>
          </div>
          {/* //* INICIO > VIEW CONFIGURACION PERFIL  */}
          <div className='w-full h-auto min-h-[60dvh] px-4 overflow-x-auto   bling-bg-dots bg-gradiant-for-dots flex-wrap flex rounded-brand flex-col flex-grow py-5  justify-center items-start'>
            <div className='w-full  h-auto flex flex-col justify-between items-center'>
              <div className='w-full h-auto flex flex-col justify-between'>
                <section className='w-full h-[60px] text-slate-700 flex flex-row justify-center bg-white items-center  bling-business-section'>
                  <header className='w-11/12 h-full  self-center text-slate-700 flex flex-row justify-between  items-center '>
                    <div className='w-fit h-auto flex items-center'>
                      <div className='w-[150px] h-[60px] flex- items-center flex justify-center  bg-slate-200'>LOGO</div>
                    </div>
                    <nav className='w-fit h-auto flex items-center gap-4'>
                      <a href='#' className='font-bold text-slate-700 px-2 text-sm'>
                        Nosotros
                      </a>
                      <a href='#' className='font-bold text-slate-700 px-2 text-sm'>
                        Productos
                      </a>
                      <a href='#' className='font-bold text-slate-700 px-2 text-sm'>
                        Ubicación
                      </a>
                      <a href='#' className='font-bold text-slate-700 px-2 text-sm'>
                        Contacto
                      </a>
                    </nav>
                  </header>
                </section>

                <section className='w-full h-auto flex flex-row justify-center  bling-business-section'>
                  <div className='w-full h-[450px]  bg-slate-800 flex justify-center items-center'>
                    <div className='w-11/12 h-auto flex flex-row text-center gap-2 items-center justify-center'>
                      <div className='w-2/3 p-0 h-auto text-left'>
                        <span className='bling-badge m-3'>Nuevo!</span>
                        <Title titleClassName='text-slate-100 ' level='h1' descriptionClassName='text-xs text-nowrap text-slate-100 leading-5' title='Estamos en BLING!' description='Abrimos nuestra tienda oficial en BLING' />
                      </div>
                      <div className='w-1/3  h-auto text-center'>
                        <Title titleClassName='text-slate-100 ' level='h2' descriptionClassName='text-xs text-nowrap text-slate-100' title='¡Mes de Mamá!' description='Encontrá los mejores productos al mejor precio' />
                      </div>
                    </div>
                  </div>
                </section>
                <section className='w-full h-auto bg-slate-100 flex flex-col justify-center items-center  bling-business-section'>
                  <div className='w-full h-auto justify-center items-center bg-white flex flex-col '>
                    <div className='w-11/12 h-auto bg-white flex flex-col gap-4 py-5'>
                      <Title icon={<FaCalendarDay />} iconColor='text-slate-700' titleClassName='text-slate-700 ' level='h6' descriptionClassName='text-xs text-nowrap text-slate-700' title='Más recientes' description='Conoce nuevas propuestas' />
                    </div>
                  </div>
                  <div className='w-11/12 h-auto flex flex-col gap-4 py-5'>
                    <div className={classNames('w-full', 'h-fit', 'flex', 'flex-row', 'flex-wrap')}>
                      {new Array(12).fill(0).map((_val, index) => (
                        <CardVertical
                          key={index}
                          shareButton={false}
                          basketButton={false}
                          padding='5px'
                          className='h-[285px] lg:h-fit w-1/3 lg:w-1/6 flex-grow-0'
                          title='Altavoz Bluetooth resistente al agua y golpes'
                          priceBefore='1800'
                          price='399'
                          badge='UY $'
                          stock=''
                          image='true'
                          alt='product'
                        />
                      ))}
                    </div>
                  </div>
                </section>

                <section className='w-full h-auto bg-slate-800 py-5 flex flex-col justify-center items-center  bling-business-section'>
                  <div className='w-11/12 h-[200px] justify-between items-center flex flex-row '>
                    <Title titleClassName='text-slate-100 ' level='h3' descriptionClassName='text-xs text-nowrap text-slate-100' title='Seguinos y obtené más novedades!' description='Suscribite a nuestro catálogo de productos' />
                    <Button className='bling-btn-primary	py-5'>
                      <FaBell className='mr-3 text-bling-yellow' />
                      Suscribirme Gratis
                    </Button>
                  </div>
                </section>

                <section className='w-full h-auto bg-slate-100 flex flex-col justify-center items-center  bling-business-section'>
                  <div className='w-full h-auto justify-center items-center bg-white flex flex-col '>
                    <div className='w-11/12 h-auto bg-white flex flex-col gap-4 py-5'>
                      <Title icon={<FaBox />} iconColor='text-slate-700' titleClassName='text-slate-700 ' level='h6' descriptionClassName='text-xs text-nowrap text-slate-700' title='Los más vendidos' description='Productos mejor calificados' />
                    </div>
                  </div>
                  <div className='w-11/12 h-auto flex flex-col gap-4 py-5'>
                    <div className={classNames('w-full', 'h-fit', 'flex', 'flex-row', 'flex-wrap')}>
                      {new Array(12).fill(0).map((_val, index) => (
                        <CardVertical
                          key={index}
                          shareButton={false}
                          basketButton={false}
                          padding='5px'
                          className='h-[285px] lg:h-fit w-1/3 lg:w-1/6 flex-grow-0'
                          title='Altavoz Bluetooth resistente al agua y golpes'
                          priceBefore='1800'
                          price='399'
                          badge='UY $'
                          stock=''
                          image='true'
                          alt='product'
                        />
                      ))}
                    </div>
                  </div>
                </section>
                <section className='w-full h-auto bg-slate-800 flex flex-col justify-center items-center  bling-business-section'>
                  <div className='w-11/12 h-fit py-5 flex flex-col justify-center items-center  bling-business-section'>
                    <div className='w-full h-auto flex flex-col justify-center items-center '>
                      <div className='w-full h-auto flex flex-row justify-start items-start py-5'>
                        <div className='w-1/4 h-auto px-2 py-2 flex flex-col justify-start items-start'>
                          <h4 className='text-slate-100 text-sm font-bold'>Empresa</h4>
                          <p className='text-slate-400 text-xs'>Sobre nosotros</p>
                          <p className='text-slate-400 text-xs'>Contacto</p>
                          <p className='text-slate-400 text-xs'>Trabaja con nosotros</p>
                        </div>
                        <div className='w-1/4 h-auto px-2 py-2 flex flex-col justify-start items-start'>
                          <h4 className='text-slate-100 text-sm font-bold'>Servicios</h4>
                          <p className='text-slate-400 text-xs'>Productos</p>
                          <p className='text-slate-400 text-xs'>Servicios</p>
                        </div>
                        <div className='w-1/4 h-auto px-2 py-2 flex flex-col justify-start items-start'>
                          <h4 className='text-slate-100 text-sm font-bold'>Ayuda</h4>
                          <p className='text-slate-400 text-xs'>Preguntas frecuentes</p>
                          <p className='text-slate-400 text-xs'>Políticas de privacidad</p>
                          <p className='text-slate-400 text-xs'>Políticas de envío</p>
                        </div>
                        <div className='w-1/4 h-auto px-2 py-2 flex flex-col justify-start items-start'>
                          <h4 className='text-slate-100 text-sm font-bold'>Suscribete</h4>
                          <p className='text-slate-400 text-xs'>Recibe novedades y ofertas</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className='w-full h-[45px] py-2 bg-slate-900 flex flex-col justify-center items-center  bling-business-section'>
                  <span className='text-xs text-slate-700'>Nombre de la empresa - Created By © BlingCompany. Todos los derechos reservados</span>
                </section>
              </div>
            </div>
          </div>
          {/* //* FIN > VIEW CONFIGURACION PERFIL */}
        </div>
      </div>
    </>
  );
};

export default ViewConfigShopDashboard;
