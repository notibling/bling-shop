'use client';
import React, { useState } from 'react';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { Icon, Section, Title } from '@/components/atoms';
import { Code2 } from '@/icons/tsx';
import Image from 'next/image';
import { Post } from '@/components/molecules';
import { TitleSection } from '@/components/organisms';


const VersionNotes: React.FC = () => {
  const { conditionalValue } = useBreakpoint();
  const [open, setOpen] = useState(false);
  return (
    <>
      <Section Empty={true} className='flex-col items-start justify-start h-fit p-0 m-0 flex gap-4 bg-transparent rounded-md'>
       
        <TitleSection icon={Code2}
          iconSize={30}
          title='Notas de Versión' 
          description='Descubre todo lo nuevo en BLING'
          level='h5'
          pattern={'dhb-pat-notifications'} />
       
        
        <Section Empty={true} className='flex-col items-start justify-start h-fit p-0 m-0 flex gap-4 bg-transparent rounded-md'>
         
          <Post
            info='Versión 1.0.0'
            title='¿Preparados para la primera versión?'
            description='¡Es hora de comenzar! Creamos todos los elementos necesarios para que puedas disfrutar de una experiencia única e inolvidable.'
            image='/images/webp/version-notes/1.0.0.webp'
            open={open}
            setOpen={setOpen}
            modalTitle='Actualización de la Plataforma Bling: Nuevas Funcionalidades y Mejoras'
            modalContent={
              <>
                <h3>Actualización de la Plataforma Bling: Nuevas Funcionalidades y Mejoras</h3>
                <p>¡Estimados Blingers!</p>
                <p>Nos complace anunciar la última actualización de la plataforma Bling, diseñada para mejorar su experiencia y ofrecer nuevas funcionalidades que facilitarán sus transacciones y la gestión de sus productos. A continuación, les detallamos las novedades más destacadas de esta versión:</p>
                <h2>Nuevas Funcionalidades:</h2>
                <ul>
                  <li><strong>Mejoras en el Panel de Control:</strong> Ahora, el panel de control ofrece una interfaz más intuitiva y personalizable, permitiendo a los usuarios empresariales gestionar sus productos, servicios y ventas de manera más eficiente.</li>
                  <li><strong>Chat Mejorado entre Empresas y Clientes:</strong> Hemos optimizado nuestro sistema de chat para facilitar la comunicación directa y efectiva entre empresas y clientes, mejorando así la atención al cliente y la resolución de dudas.</li>
                </ul>
              </>
            }
          />
     
          <Post
            info='Versión 1.0.0'
            title='¿Preparados para la primera versión?'
            description='¡Es hora de comenzar! Creamos todos los elementos necesarios para que puedas disfrutar de una experiencia única e inolvidable.'
            image='/images/webp/version-notes/1.0.0.webp'
            open={open}
            setOpen={setOpen}

          />
         
          <Post
            info='Versión 1.0.0'
            title='¿Preparados para la primera versión?'
            description='¡Es hora de comenzar! Creamos todos los elementos necesarios para que puedas disfrutar de una experiencia única e inolvidable.'
            image='/images/webp/version-notes/1.0.0.webp'
            open={open}
            setOpen={setOpen}
          />
         
          <Post
            info='Versión 1.0.0'
            title='¿Preparados para la primera versión?'
            description='¡Es hora de comenzar! Creamos todos los elementos necesarios para que puedas disfrutar de una experiencia única e inolvidable.'
            image='/images/webp/version-notes/1.0.0.webp'
            open={open}
            setOpen={setOpen}
          />
         
          <Post
            info='Versión 1.0.0'
            title='¿Preparados para la primera versión?'
            description='¡Es hora de comenzar! Creamos todos los elementos necesarios para que puedas disfrutar de una experiencia única e inolvidable.'
            image='/images/webp/version-notes/1.0.0.webp'
            open={open}
            setOpen={setOpen}
          />
         
      
        </Section>
      </Section>
    </>
  );
};

export default VersionNotes;
