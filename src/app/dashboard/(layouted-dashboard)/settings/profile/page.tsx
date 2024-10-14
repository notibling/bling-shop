'use client';
import React, { useState } from 'react';
import { FaEyeSlash, FaSquareArrowUpRight, FaSquarePen } from 'react-icons/fa6';

import classNames from 'classnames';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { Title } from '@/components/atoms';
import { FaAddressCard, FaArrowsAlt, FaAsterisk, FaCreditCard, FaEdit, FaEnvelope, FaImage, FaMapMarker, FaMapMarkerAlt, FaMedal, FaPalette, FaPhone, FaUser } from 'react-icons/fa';
import { Button } from '@/components/atoms';
import Image from 'next/image';

const ViewConfigProfileDashboard: React.FC<{}> = () => {
  const [imageSrc, setImageSrc] = useState<string>('');

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target?.result) {
          setImageSrc(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const { conditionalValue } = useBreakpoint();
  return (
    <>
      <div className={classNames('w-full', 'h-auto', 'rounded-sm', 'flex', 'flex-col', 'flex-grow', 'justify-between', 'items-center')}>
        <div className={classNames('w-full', 'h-auto', 'p-2')}>
          <div className={classNames('w-full', 'h-auto', 'rounded-sm', 'flex', 'lg:flex-nowrap', 'flex-wrap', 'gap-2', 'flex-grow', 'justify-between', 'items-center', 'py-2')}>
            <div className={classNames('w-full', 'flex-wrap', 'lg:flex-nowrap', 'gap-2', 'flex')}>
              <Title icon={<FaUser />} iconColor='text-slate-700' titleClassName='text-slate-700' descriptionClassName='text-xs text-nowrap text-slate-700' title='Editar Perfil' description='Personaliza tus espacios' />
            </div>
            <div className={classNames('w-full', 'lg:w-fit', 'bg-slate-200', 'flex-nowrap', 'rounded-md', 'gap-2', 'h-auto', 'p-2', 'flex', 'flex-row', 'justify-end', 'items-left')}>
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
                  'rounded-md',
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
                  'rounded-md',
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
                  'rounded-md',
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
          <div className='w-full h-auto min-h-[60dvh] px-4 overflow-x-auto   bg-slate-100 flex-wrap flex rounded-md flex-col flex-grow py-5  justify-start items-center'>
            <div className='w-full lg:w-1/2 h-auto flex gap-2 flex-col  p-2'>
              <div className='w-full h-auto p-2 flex flex-row gap-2  '>
                <label
                  htmlFor='profileImageInput'
                  className='shadow-md h-[100px] relative aspect-square bg-white text-slate-700 rounded-md flex flex-row justify-center items-center cursor-pointer'
                >
                  {!imageSrc && <FaImage className='text-3xl' />}
                  <input
                    id='profileImageInput'
                    type='file'
                    hidden
                    onChange={handleImageChange}
                  />
                  {imageSrc && (
                    <Image
                      unoptimized
                      src={imageSrc}
                      alt='ImageProfile'
                      width='100'
                      height='100'
                      className={classNames(
                        'flex',
                        'bg-contain',
                        'bg-center',
                        'bg-no-repeat',
                        'text-sm',
                        'w-full',
                        'absolute',
                        'rounded-md',
                        'h-full',
                        'aspect-square'
                      )}
                    />
                  )}
                </label>
                <div className='shadow-md w-full h-[100px] text-1xl  bg-white text-slate-700 rounded-md flex flex-row justify-start px-3  font-bold leading-5 items-center'>
                  NOMBRE <br />
                  APELLIDO
                </div>
                <div className=' w-auto h-[100px] flex flex-col justify-between '>
                  <div className='shadow-md h-[70px] aspect-square  bg-white text-slate-700 rounded-md flex flex-row justify-center items-center'>
                    <FaMedal className='text-3xl' />
                  </div>
                  <div className='shadow-md w-[70px] h-auto  bg-white text-slate-700 rounded-md flex flex-row justify-center p-1 font-bold items-center text-center'>
                    <span className='text-xs'>LVL 12</span>
                  </div>
                </div>
              </div>

              <div className='w-full h-auto p-2 flex flex-row gap-2 '>
                <div className='w-1/3 h-auto shadow-md bg-white text-slate-700 rounded-md flex flex-row justify-between p-3 px-5 font-bold items-center'>
                  <span className='text-xs'>Compras</span>
                  <span className='text-1xl'>34</span>
                </div>
                <div className='w-1/3 h-auto shadow-md bg-white text-slate-700 rounded-md flex flex-row justify-between p-3 px-5 font-bold items-center'>
                  <span className='text-xs'>Reseñas</span>
                  <span className='text-1xl'>34</span>
                </div>
                <div className='w-1/3 h-auto shadow-md bg-white text-slate-700 rounded-md flex flex-row justify-between p-3 px-5 font-bold items-center'>
                  <span className='text-xs'>Devoluciones</span>
                  <span className='text-1xl'>34</span>
                </div>
              </div>
              <div className='w-full h-auto p-2 flex flex-row gap-2 '>
                <div className='w-full h-auto bg-white shadow-md rounded-md flex flex-row justify-between p-2 font-bold items-center'>
                  <div className='w-fit flex text-slate-700 flex-row gap-1 justify-start items-center'>
                    <span className='text-1xl px-4'>
                      <FaEnvelope />
                    </span>
                    <span className='bling-badge text-xs'>Principal</span>
                    <span className='text-sm px-2'>usuario@email.com</span>
                  </div>
                  <div>
                    {' '}
                    <span className='text-1xl flex flex-row flex-nowrap gap-2'>
                      <Button className='bling-btn-secondary p-3 rounded-md py-5 text-1xl'>
                        <FaSquarePen />
                      </Button>
                    </span>
                  </div>
                </div>
              </div>
              <div className='w-full h-auto p-2 flex flex-row gap-2 '>
                <div className='w-full h-auto  bg-white shadow-md rounded-md flex flex-row justify-between p-2 font-bold items-center'>
                  <div className='w-fit flex text-slate-700 flex-row gap-1 justify-start items-center'>
                    <span className='text-1xl px-4'>
                      <FaEnvelope />
                    </span>
                    <span className='badge text-xs'>Recuperación</span>
                    <span className='text-sm px-2'>usuario@email.com</span>
                  </div>
                  <div>
                    {' '}
                    <span className='text-1xl flex flex-row flex-nowrap gap-2'>
                      <Button className='bling-btn-secondary  p-3 py-5  rounded-md  text-1xl'>
                        <FaSquarePen />
                      </Button>
                    </span>
                  </div>
                </div>
              </div>
              <div className='w-full h-auto p-2 flex flex-row gap-2 '>
                <div className='w-full h-auto  bg-white shadow-md rounded-md flex flex-row justify-between p-2 font-bold items-center'>
                  <div className='w-fit flex text-slate-700 flex-row gap-1 justify-start items-center'>
                    <span className='text-1xl px-4'>
                      <FaPhone />
                    </span>
                    <span className='badge text-xs'>Teléfono</span>
                    <span className='text-sm px-2'>+598 999 999</span>
                  </div>
                  <div>
                    {' '}
                    <span className='text-1xl flex flex-row flex-nowrap gap-2'>
                      <Button className='bling-btn-secondary  p-3 py-5  rounded-md  text-1xl'>
                        <FaSquarePen />
                      </Button>
                    </span>
                  </div>
                </div>
              </div>
              <div className='w-full h-auto p-2 flex flex-row gap-2 '>
                <div className='w-full h-auto bg-white shadow-md rounded-md flex flex-row justify-between p-2 font-bold items-center'>
                  <div className='w-fit flex text-slate-700 flex-row gap-1 justify-start items-center'>
                    <span className='text-1xl px-4'>
                      <FaAsterisk />
                    </span>
                    <span className='badge text-xs'>Contraseña:</span>
                    <span className='text-md px-2'>•••••••••••••••</span>
                  </div>
                  <div>
                    {' '}
                    <span className='text-1xl flex flex-row flex-nowrap gap-2'>
                      <Button className='bling-btn-secondary p-3 rounded-md py-5 text-1xl'>
                        <FaEyeSlash />
                      </Button>
                      <Button className='bling-btn-secondary p-3 rounded-md py-5 text-1xl'>
                        <FaSquarePen />
                      </Button>
                    </span>
                  </div>
                </div>
              </div>
              <div className='w-full h-auto p-2 flex flex-row gap-2 '>
                <div className='w-full h-auto  bg-white shadow-md rounded-md flex flex-row justify-between p-2 font-bold items-center'>
                  <div className='w-fit flex text-slate-700 flex-row gap-1 justify-start items-center'>
                    <span className='text-1xl px-4'>
                      <FaAddressCard />
                    </span>
                    <span className='badge text-xs'>C.I:</span>
                    <span className='text-sm px-2'>0.000.000-0</span>
                  </div>
                  <div>
                    {' '}
                    <span className='text-1xl flex flex-row flex-nowrap gap-2'>
                      <Button className='bling-btn-secondary  p-3 py-5  rounded-md  text-1xl'>
                        <FaSquarePen />
                      </Button>
                    </span>
                  </div>
                </div>
              </div>
              <div className='w-full h-auto p-2 flex flex-row gap-2 '>
                <div className='w-1/2 h-auto  bg-white shadow-md rounded-md flex flex-row justify-between p-2 font-bold items-center'>
                  <div className='w-fit flex text-slate-700 flex-row gap-1 justify-start items-center'>
                    <span className='text-1xl px-4'>
                      <FaMapMarkerAlt />
                    </span>

                    <span className='text-sm px-2'>Direcciones</span>
                  </div>

                  <div>
                    {' '}
                    <Button className='bling-btn-secondary  p-3 py-5  rounded-md  text-1xl'>
                      <FaSquareArrowUpRight />
                    </Button>
                  </div>
                </div>
                <div className='w-1/2 h-auto  bg-white shadow-md rounded-md flex flex-row justify-between p-2 font-bold items-center'>
                  <div className='w-fit flex text-slate-700 flex-row gap-1 justify-start items-center'>
                    <span className='text-1xl px-4'>
                      <FaCreditCard />
                    </span>

                    <span className='text-sm px-2'>Metodos de Pago</span>
                  </div>

                  <div>
                    {' '}
                    <Button className='bling-btn-secondary  p-3 py-5  rounded-md  text-1xl'>
                      <FaSquareArrowUpRight />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* //* FIN > VIEW CONFIGURACION PERFIL */}
        </div>
      </div>
    </>
  );
};

export default ViewConfigProfileDashboard;
