import { Item, Section, Title } from '@/components/atoms';
import { FooterComponent } from '@/components/molecules';
import { TopMenu } from '@/components/organisms';
import Image from 'next/image';

const Privacy = ({}) => {
  return (
    <>
      <TopMenu FastLinks={false} InfoBar={false} />
      <Section className="bling-light-bg-4 dark:bling-dark-bg-1" classNameContainer="!h-[150px] !flex-col items-right overflow-hidden relative justify-center">
        <Image src="../images/webp/backgrounds/16-9-Salon.webp" width={100} height={100} unoptimized alt="Background Salon" className="w-full z-0 h-full absolute object-cover left-0 top-0 bottom-0 right-0 m-0" />
        <Title level="h2" className="z-[1] w-full px-10" titleClassName="text-white !text-right" title="Privacidad" />
      </Section>
      <Section
        className=" !grow min-h-[80dvh] !justify-start"
        classNameContainer=" !items-start 
      !justify-start"
      >
        <div className="w-3/12 h-auto bling-light-bg-2 dark:bling-dark-bg-2 gap-1 rounded-md p-2 flex flex-col justify-start">
          <Item content="text" text="Introducción" />
          <Item content="text" text="Información que Recopilamos" />
          <Item content="text" text="Uso de la Información Recopilada" />
          <Item content="text" text="Compartición de Información con Terceros" />
          <Item content="text" text="Seguridad de la Información" />
          <Item content="text" text="Derechos del Usuario" />
          <Item content="text" text="Cookies y Tecnologías Similares" />
          <Item content="text" text="Retención de Datos" />
          <Item content="text" text="Enlaces a Sitios Web de Terceros" />
          <Item content="text" text="Modificaciones a la Política de Privacidad" />
          <Item content="text" text="Contacto y Consultas" />
          <Item content="text" text="Disposiciones Adicionales" />
        </div>
        <div className="w-9/12 h-auto flex flex-col items-start justify-start bling-light-text dark:bling-dark-text m-0 p-5 gap-2">
        <Title level='h2' title="Introducción" />
          <Title level='h3' title="Objetivo y Alcance de la Política de Privacidad" />

          <p className='py-2'>
            <span className='font-bold'>Objetivo:</span> Esta política de privacidad tiene como objetivo informar a los usuarios sobre cómo recopilamos, utilizamos, almacenamos y protegemos sus datos personales. Nos comprometemos a garantizar la privacidad y la seguridad
            de la información personal de nuestros usuarios.
          </p>
          <p className='py-2'>
          <span className='font-bold'>Alcance:</span> Esta política se aplica a todos los datos personales recopilados a través de nuestro sitio web, plataformas de comercio electrónico y otros servicios relacionados. Incluye cualquier interacción con nuestra empresa,
            ya sea a través de formularios en línea, correo electrónico, llamadas telefónicas o cualquier otro medio de comunicación.
          </p>
        </div>
      </Section>
      <FooterComponent brandFooter />
    </>
  );
};

export default Privacy;
