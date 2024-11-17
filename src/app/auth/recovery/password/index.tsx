import React, { MutableRefObject, useState } from 'react';
import classNames from 'classnames';
import Swiper from 'swiper';
import { Button, Section } from '@/components/atoms';
import RecoveryCard from '@/components/molecules/RecoveryCard';

interface IRecoveryPasswordProps {
  controller: MutableRefObject<Swiper | null>;
}

const RecoveryPassword: React.FC<IRecoveryPasswordProps> = ({ controller }) => {
  // Definir el estado para el correo electrónico
  const [email, setEmail] = useState<string>('');

  // Función para manejar el cambio de correo electrónico
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Función para manejar la recuperación de contraseña
  const handlePasswordRecovery = () => {
    if (!email.trim() || !email.includes('@')) {
      alert('Por favor, ingrese un correo electrónico válido.');
      return;
    }
    // Aquí iría la lógica para enviar la solicitud de recuperación de contraseña
    console.log(`Instrucciones de recuperación enviadas a: ${email}`);
  };

  // Función para avanzar a la siguiente diapositiva
  const handleNext = async () => {
    if (controller.current) {
      await controller.current.slideNext();
    }
  };

  // Función para retroceder a la diapositiva anterior
  const handleBack = async () => {
    if (controller.current) {
      controller.current.slidePrev();
    }
  };

  return (
    <Section Empty={true} className="!bg-transparent items-center justify-center flex p-5" >
      <div className="w-full min-h-[80dvh] flex flex-col gap-4 items-center justify-center align-middle">
        {/* Recovery Card */}
          
            <RecoveryCard
              iconName='Password'
              title="Recuperar Contraseña"
              description="Ingrese su correo para recibir instrucciones de recuperación."
              placeholder="Correo electrónico"
              value={email}
              onChange={handleEmailChange}
              onButtonClick={handlePasswordRecovery}
            />
             <Button
              onClick={handleBack}
              text="Regresar"
              className={classNames(
                'bling-btn-primary border bling-light-border dark:bling-dark-border dark:bling-btn-primary-dark max-w-[200px] w-1/3 py-6'
              )}
            />
       
     
      </div>
    </Section>
  );
};

export { RecoveryPassword };
