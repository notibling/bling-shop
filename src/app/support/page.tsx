import Image from 'next/image';
import { FooterComponent, SearchBar } from '@/components/molecules';
import { Accordion, TopMenu } from '@/components/organisms';
import Link from 'next/link';
import { Icon, Section, Title, Button, AccordionTitle } from '@/components/atoms';

const SupportCenter = ({}) => {
  return (
    <>
      <TopMenu FastLinks={false} InfoBar={false} />
     <Section className="bling-light-bg-4 dark:bling-dark-bg-1" classNameContainer="!h-[400px] !flex-col items-center overflow-hidden relative justify-center">
        <Image src="./images/webp/backgrounds/16-9-Salon.webp" width={100} height={100} unoptimized alt="Background Salon" className="w-full z-0 h-full absolute object-cover left-0 top-0 bottom-0 right-0 m-0" />
        <Title level="h2" className="z-[1] " titleClassName="text-white" title="¿Cómo podemos ayudarte?" />
       <SearchBar className="lg:w-1/2 z-[1] w-full" />
      </Section>
      <Section className="py-5" classNameContainer="h-auto !bg-transparent gap-2 items-stretch justify-center flex-col lg:flex-row !p-0">
        <div className="w-full lg:w-1/3  flex flex-col items-center gap-2 text-center justify-between p-5 rounded-md shadow-md bling-light dark:bling-dark">
          <div className="w-[150px] aspect-square flex justify-center items-center">
            <Icon name="EyeScan" size={80} />
          </div>
          <h3 className="w-full h-auto text-2xl">Políticas de Privacidad</h3>
          <span className="w-full h.auto text-center">
            Manténgase al tanto de nuestras políticas de privacidad, estas detallan cómo gestionamos y protegemos los datos que usted comparte con nosotros, garantizando su confidencialidad y seguridad en todo momento.
          </span>
          <Button text="Ver Más" className="btn-md bling-btn-primary dark:bling-btn-primary-dark px-10" />
        </div>
        <div className="w-full lg:w-1/3  flex flex-col items-center gap-2 text-center justify-between p-5 rounded-md shadow-md bling-light dark:bling-dark">
          <div className="w-[150px] aspect-square flex justify-center items-center">
            <Icon name="Documents" size={80} />
          </div>
          <h3 className="w-full h-auto text-2xl">Términos y Condiciones</h3>
          <span className="w-full h.auto text-center">Conozca nuestros términos y condiciones los cuales detallan nuestras políticas respecto a compras, envíos, devoluciones y más, garantizando una experiencia de compra segura y satisfactoria.</span>
          <Button text="Ver Más" className="btn-md bling-btn-primary dark:bling-btn-primary-dark px-10" />
        </div>
        <div className="w-full lg:w-1/3  flex flex-col items-center gap-2 text-center justify-between p-5 rounded-md shadow-md bling-light dark:bling-dark">
          <div className="w-[150px] aspect-square flex justify-center items-center">
            <Icon name="ShieldUser" size={80} />
          </div>
          <h3 className="w-full h-auto text-2xl">Seguridad</h3>
          <span className="w-full h.auto text-center">
            La protección más avanzada para su información personal y asegurar cada transacción. Nuestra plataforma está diseñada con estándares de seguridad rigurosos para garantizar la confidencialidad y protección de sus datos en todo momento.
          </span>
          <Button text="Ver Más" className="btn-md bling-btn-primary dark:bling-btn-primary-dark px-10" />
        </div>
      </Section>

      <Section className="py-5" classNameContainer="!h-[400px] !bg-transparent gap-2  relative overflow-hidden justify-center !p-0">
        <Image src="./images/webp/backgrounds/16-9-Consultory.webp" width={100} height={100} unoptimized alt="Background Salon" className="w-full z-0 h-full absolute object-cover left-0 top-0 bottom-0 right-0 m-0" />
        <div className="w-fit z-[1] flex box-border flex-col lg:flex-row items-center gap-5 text-center justify-between p-5 rounded-md shadow-md bling-light dark:bling-dark">
          <h3 className="w-full h-auto text-2xl text-left">
            Atención <br />
            Personalizada
          </h3>
          <div className="w-auto h-auto flex-row flex justify-center items-center">
            <div className="w-auto h-auto px-5  text-center flex flex-col items-center justify-center">
              <Icon name="UserSpeak" size={50} />
              <span className="text-center text-sm leading-5">
                Consulta
                <br /> Guiada
              </span>
            </div>
            <div className="w-auto h-auto px-5  text-center flex flex-col items-center justify-center">
              <Icon name="Screencast2" size={50} />
              <span className="text-center text-sm leading-5">
                Soporte <br /> Remoto
              </span>
            </div>
            <div className="w-auto h-auto px-5  text-center flex flex-col items-center justify-center">
              <Icon name="Bug" size={50} />
              <span className="text-center text-sm leading-5">
                Reporte&zwj;&nbsp;&zwj;de
                <br /> Errores
              </span>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-5" classNameContainer="h-auto  !bg-transparent gap-2 items-stretch justify-center !p-0">
        <div className="w-full *:lg:w-1/3  flex flex-row items-center gap-2  justify-between p-5 rounded-md shadow-md bling-light dark:bling-dark">
          <Icon name="" size={50} className="flex items-start !text-left justify-center !w-auto" />
          <Title level="h4" titleClassName="text-right" title="Asistencia Automática" />
        </div>
        <div className="w-full *:lg:w-1/3  flex flex-row items-center gap-2  justify-between p-5 rounded-md shadow-md bling-light dark:bling-dark">
          <Icon name="UserCircle" size={50} className="flex !text-left items-start justify-center !w-auto" />
          <Title level="h4" titleClassName="text-right" title="Control de Cuentas" />
        </div>
        <div className="w-full *:lg:w-1/3  flex flex-row items-center gap-2  justify-between p-5 rounded-md shadow-md bling-light dark:bling-dark">
          <Icon name="ScreenCast" size={50} className="flex !text-left items-start justify-center !w-auto" />
          <Title level="h4" titleClassName="text-right" title="Soporte Remoto" />
        </div>
      </Section>
      <Section className="!bg-bling-dark py-5" classNameContainer="!p-5 gap-2 items-center justify-between shadow-md">
        <Title level="h4" title="A continuación conozca algunas respuestas a preguntas frecuentes" description='Recuerde que puede visitar nuestro espacio de Preguntas Frecuentes "F.A.Q." para saber más.' />{' '}
        <Button text="Visitar F.A.Q." className="btn-md bling-btn-primary dark:bling-btn-primary-dark px-10" />
      </Section>
      <Section className="!bg-bling-yellow py-5" classNameContainer="h-auto !bg-transparent gap-2 items-stretch !justify-start !p-0">
        <div className="w-full lg:w-1/3  flex flex-col items-center gap-2  !justify-start p-5 rounded-md shadow-md bling-light dark:bling-dark ">
          <Title icon={<Icon name="UserCircle" size={25} />} level="h4" title="Cuentas" />
          <Accordion className="bling-light-bg-3 " childrenClassName="p-5 gap-2" trigger={<AccordionTitle content="text" className="text-left text-sm" text="¿Cómo puedo crear una cuenta en Bling?" />}>
            <span className="text-sm text-left">Para crear una cuenta puede seguir los pasos de este tutorial, o dirigirse a /register</span>
          </Accordion>
          <Accordion className="bling-light-bg-3 " childrenClassName="p-5 gap-2" trigger={<AccordionTitle content="text" className="text-left text-sm" text="¿He olvidado mi contraseña, cómo puedo restablecerla?" />}>
            <span className="text-sm text-left">Puede restablecer su contraseña mediante el formulario disponible en /reset-password</span>
          </Accordion>
          <Accordion className="bling-light-bg-3 " childrenClassName="p-5 gap-2" trigger={<AccordionTitle content="text" className="text-left text-sm" text="¿Cómo puedo actualizar mi información personal?" />}>
            <span className="text-sm text-left">Para actualizar su información personal, ingrese a su cuenta y diríjase a la sección {'"Perfil"'} donde podrá editar sus datos.</span>
          </Accordion>
          <Accordion className="bling-light-bg-3 " childrenClassName="p-5 gap-2" trigger={<AccordionTitle content="text" className="text-left text-sm" text="¿Puedo eliminar mi cuenta?" />}>
            <span className="text-sm text-left">Sí, puede eliminar su cuenta en su panel de configuración, o contactando a nuestro servicio de atención al cliente a través de support@bling.uy</span>
          </Accordion>
          <Accordion className="bling-light-bg-3 " childrenClassName="p-5 gap-2" trigger={<AccordionTitle content="text" className="text-left text-sm" text="¿Cómo puedo gestionar mis preferencias de notificación?" />}>
            <span className="text-sm text-left">Puede gestionar sus preferencias de notificación en la sección {'"Configuración"'}de su cuenta.</span>
          </Accordion>
          <Accordion className="bling-light-bg-3 " childrenClassName="p-5 gap-2" trigger={<AccordionTitle content="text" className="text-left text-sm" text="¿Cómo puedo ver mi historial de pedidos?" />}>
            <span className="text-sm text-left">Para ver su historial de pedidos, inicie sesión y diríjase a {'"Mis Pedidos"'} en su cuenta.</span>
          </Accordion>
          <Accordion className="bling-light-bg-3 " childrenClassName="p-5 gap-2" trigger={<AccordionTitle content="text" className="text-left text-sm" text="¿Qué hago si detecto actividad sospechosa en mi cuenta?" />}>
            <span className="text-sm text-left">Si detecta actividad sospechosa en su cuenta, cambie su contraseña inmediatamente y contacte a nuestro soporte a través de support@bling.uy</span>
          </Accordion>
        </div>

        <div className="w-full lg:w-1/3  flex flex-col items-center gap-2  !justify-start p-5 rounded-md shadow-md bling-light dark:bling-dark">
          <Title icon={<Icon name="UserCircle" size={25} />} level="h4" title="Finanzas y Transacciones" />
          <Accordion className="bling-light-bg-3 " childrenClassName="p-5 gap-2" trigger={<AccordionTitle content="text" className="text-left text-sm" text="¿Qué métodos de pago aceptan?" />}>
            <span className="text-sm text-left">Aceptamos pagos con MercadoPago y todas las tarjetas asociadas a dicho sistema.</span>
          </Accordion>
          <Accordion className="bling-light-bg-3 " childrenClassName="p-5 gap-2" trigger={<AccordionTitle content="text" className="text-left text-sm" text="¿Es seguro realizar pagos en línea en su sitio?" />}>
            <span className="text-sm text-left">Sí, nuestra plataforma utiliza medidas de seguridad avanzadas para proteger sus datos y transacciones.</span>
          </Accordion>
          <Accordion className="bling-light-bg-3 " childrenClassName="p-5 gap-2" trigger={<AccordionTitle content="text" className="text-left text-sm" text="¿Puedo pagar en cuotas?" />}>
            <span className="text-sm text-left">Sí, ofrecemos la opción de pagar en cuotas a través de MercadoPago.</span>
          </Accordion>
          <Accordion className="bling-light-bg-3 " childrenClassName="p-5 gap-2" trigger={<AccordionTitle content="text" className="text-left text-sm" text="¿Qué hago si mi pago es rechazado?" />}>
            <span className="text-sm text-left">Si su pago es rechazado, intente con otro método de pago o contacte a su entidad bancaria. También puede comunicarse con nuestro soporte.</span>
          </Accordion>
          <Accordion className="bling-light-bg-3 " childrenClassName="p-5 gap-2" trigger={<AccordionTitle content="text" className="text-left text-sm" text="¿Cómo solicito una factura?" />}>
            <span className="text-sm text-left">Para solicitar una factura, por favor envíe un correo a hello.blingcompany@gmail.com con su número de pedido.</span>
          </Accordion>
          <Accordion className="bling-light-bg-3 " childrenClassName="p-5 gap-2" trigger={<AccordionTitle content="text" className="text-left text-sm" text="¿Cuál es el límite de compra para obtener envío gratis?" />}>
            <span className="text-sm text-left">El envío es gratis para compras mayores a $3500 UY.</span>
          </Accordion>
          <Accordion className="bling-light-bg-3 " childrenClassName="p-5 gap-2" trigger={<AccordionTitle content="text" className="text-left text-sm" text="¿Cómo se manejan los reembolsos?" />}>
            <span className="text-sm text-left">Los reembolsos se procesan a través del método de pago original y pueden tardar hasta 10 días hábiles en reflejarse en su cuenta.</span>
          </Accordion>
        </div>
        <div
          className="w-full lg:w-1/3  flex flex-col items-center gap-2 
         !justify-start p-5 rounded-md shadow-md bling-light dark:bling-dark"
        >
          <Title icon={<Icon name="UserCircle" size={25} />} level="h4" title="Cuentas" />
          <Accordion className="bling-light-bg-3 " childrenClassName="p-5 gap-2" trigger={<AccordionTitle content="text" className="text-left text-sm" text="¿Dónde puedo encontrar los términos y condiciones completos?" />}>
            <span className="text-sm text-left">
              Puede encontrar nuestros términos y condiciones completos en el siguiente enlace: <Link href="https://bling.uy/policies">bling.uy/policies</Link> .
            </span>
          </Accordion>
          <Accordion className="bling-light-bg-3 " childrenClassName="p-5 gap-2" trigger={<AccordionTitle content="text" className="text-left text-sm" text="¿Cuáles son las políticas de devolución y reembolso?" />}>
            <span className="text-sm text-left">
              Nuestras políticas de devolución y reembolso están detalladas en <Link href="https://bling.uy/policies">bling.uy/policies</Link> .
            </span>
          </Accordion>
          <Accordion className="bling-light-bg-3 " childrenClassName="p-5 gap-2" trigger={<AccordionTitle content="text" className="text-left text-sm" text="¿Cuánto tiempo tengo para devolver un producto?" />}>
            <span className="text-sm text-left">Tiene 30 días desde la fecha de compra para devolver un producto.</span>
          </Accordion>
          <Accordion className="bling-light-bg-3 " childrenClassName="p-5 gap-2" trigger={<AccordionTitle content="text" className="text-left text-sm" text="¿Cómo se manejan los productos defectuosos?" />}>
            <span className="text-sm text-left">En caso de recibir un producto defectuoso, contáctenos dentro de los 30 días para gestionar un reemplazo o reembolso.</span>
          </Accordion>
          <Accordion className="bling-light-bg-3 " childrenClassName="p-5 gap-2" trigger={<AccordionTitle content="text" className="text-left text-sm" text="¿Tienen políticas específicas para productos en oferta o descuento?" />}>
            <span className="text-sm text-left">Sí, los productos en oferta o descuento también están sujetos a nuestras políticas de devolución y reembolso estándar.</span>
          </Accordion>
          <Accordion className="bling-light-bg-3 " childrenClassName="p-5 gap-2" trigger={<AccordionTitle content="text" className="text-left text-sm" text="¿Cómo se protegen mis datos personales según su política de privacidad?" />}>
            <span className="text-sm text-left">
              Su privacidad es importante para nosotros. Consulte nuestra política de privacidad en <Link href="https://bling.uy/policies">bling.uy/policies</Link> para más detalles.
            </span>
          </Accordion>
          <Accordion className="bling-light-bg-3 " childrenClassName="p-5 gap-2" trigger={<AccordionTitle content="text" className="text-left text-sm" text="¿Qué debo hacer si no estoy de acuerdo con alguna política?" />}>
            <span className="text-sm text-left">Si no está de acuerdo con alguna de nuestras políticas, puede contactarnos a través de hello.blingcompany@gmail.com para discutir su caso.</span>
          </Accordion>
        </div>
      </Section>
      <FooterComponent brandFooter />
    </>
  );
};

export default SupportCenter;
