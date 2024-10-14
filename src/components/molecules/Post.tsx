'use client';
import React, { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Button, Title } from '../atoms';
import Image from 'next/image';
import { Modal } from './Modal';
import classNames from 'classnames';

interface PostProps {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  info?: string | React.ReactNode;
  image?: string;
  modalTitle?: string | React.ReactNode | undefined;
  open: boolean;
  modalContent?: React.ReactNode | string | string[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Post: React.FC<PostProps> = ({ title, description, info, image, open, modalContent, modalTitle, setOpen }) => {
  const formInitialValue = { parentId: '' };
  const [form, setForm] = useState(formInitialValue);

  useEffect(() => {
    if (!open) {
      setForm(formInitialValue);
    }
  }, [open]);

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <>
      <div className='w-full lg:w-1/2 max-w-[500px] h-auto rounded-md bling-light dark:bling-dark-bg-3 flex flex-col gap-2 p-2'>
        <div className='w-full h-auto text-right text-sm bling-light-text dark:bling-dark-text'>{info}</div>
        <PhotoProvider>
          <PhotoView src={image}>
            <Image
              src={image}
              unoptimized
              alt='Descripción de la imagen'
              className='aspect-square object-cover rounded-md'
              width={500}
              height={500}
            />
          </PhotoView>
        </PhotoProvider>
        <Title
          level='h4'
          title={title}
          titleClassName={'leading-normal'}
          description={description}
          descriptionClassName={'leading-normal'}
        />
        <Button text='Ver más' onClick={() => setOpen(true)} className='btn-md border bling-light-border dark:border-bling-dark-bg-5 bling-btn-primary dark:bling-btn-primary-dark' />
      </div>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title={modalTitle}
        className='p-2 min-w-[400px]'
        content={
          <div className={classNames('w-full', 'max-w-[500px]', 'flex', 'flex-col', 'gap-4')}>
            <div className='text-sm w-full h-auto leading-normal'>{modalContent}</div>
          </div>
        }
      />
    </>
  );
};

export { Post };
