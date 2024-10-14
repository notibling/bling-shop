'use client';
import React, { ChangeEvent, useMemo, useState } from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/navigation';
import { FaInfoCircle } from 'react-icons/fa';
import { useGlobalState } from '@/contexts/GlobalState';
import * as authOperations from '@/contexts/GlobalState/auth/operations';
import { useAnimation } from '@/hooks/useAnimation';
import { LoginAndRegisterCard } from './LoginAndRegisterCard';
import { RegularExpressions } from '@/common/RegularExpression';
import { Form, useForm } from '@/components/organisms';
import {
  Input, Button, ButtonSize,
  InputSize, Checkbox, Alert
} from '@/components/atoms';
export const RegisterScreen : React.FC = ({
}) => {
  const router = useRouter();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('hello.blingcompany@gmail.com');
  const [password, setPassword] = useState<string>('11232121234');
  const [termsAndConditions, setTermsAndConditions] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { animating: shaking, animate } = useAnimation(500);
  const { auth } = useGlobalState();
  const form = useForm();
  const formHasErrors = useMemo(
    () => form.fields.some((field) => field.hasError) || !termsAndConditions,
    [form.fields, termsAndConditions]
  );
  const noData = useMemo(() => form.fields.some(input => !input.value), [form.fields]);
  const resetFields = () => {
    setEmail('');
    setPassword('');
  };
  const register = async() => {
    setLoading(true);
    try {
      const result = await authOperations.register(name, email, password);
      if (result.success) {
        auth.setUser(result.user);
        auth.setAccessToken(result.token);
        router.push('/dashboard');
      } else {
        resetFields();
        animate();
      }
    } catch (error: any) {
      if (error.response.status === 400) {
        resetFields();
        setError(true);
        animate();
      }
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <LoginAndRegisterCard className={classNames({ 'animate-shake': shaking })} title='Registrarme'>
      <fieldset className={classNames('flex', 'flex-col', 'gap-4')}>
        <Input
          error='Debes ingresar un nombre de almenos 3 letras'
          errorRegexp={RegularExpressions.TEXT_LENGTH_RANGE(3, 12)}
          controlId='name'
          size={InputSize.base}
          placeholder='Ingrese su Nombre'
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        />
        <Input
          controlId='email'
          error='Ingrese un correo electrónico válido'
          errorRegexp={RegularExpressions.EMAIL}
          size={InputSize.base}
          placeholder='Ingrese su correo electrónico'
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
        <Input
          controlId='password'
          error='Ingrese una contraseña alfanumérica con al menos 8 caracteres y una mayúscula'
          errorRegexp={RegularExpressions.PASSWORD}
          size={InputSize.base}
          type='password'
          placeholder='Ingrese su contraseña'
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />
      </fieldset>
      <div
        className={classNames(
          'w-full',
          'flex',
          'justify-center',
          'bling-light-text',
          'dark:bling-dark-text',
          'text-xs',
          'flex',
          'flex-row',
          'gap-2'
        )}
      >
        <Checkbox
          checked={termsAndConditions}
          onChange={(value) => setTermsAndConditions(value)}
        ></Checkbox> <span className={classNames(
       
          'bling-light-text',
          'dark:bling-dark-text'
        
        )}>Al registrarte,
          entendemos que has leido, comprendes y aceptas nuestros <a className='text-blue-500' href=''>Términos y
            Condiciones</a>, Nuestras <a href='' className='text-blue-500'>Políticas Generales</a> y de <a className='text-blue-500' href=''>terceros</a>.</span>
      </div>
      {error && (
        <Alert icon={<FaInfoCircle className={classNames('text-white')} />} className={classNames('bg-red-500')}>
          <span className={classNames('text-xs', 'text-white', 'font-bold')}>Los datos ingresados son incorrectos</span>
        </Alert>
      )}
      
      <div className={classNames('w-full', 'flex', 'justify-center')}>
        <Button
          disabled={formHasErrors || loading || noData}
          onClick={register}
          loading={loading}
          size={ButtonSize.base}
          className={classNames(
            'w-full',
            'text-white',
            'bg-green-500',
            'focus:scale-95',
            'hover:bg-green-400',
            'text-sm',
            'bling-bg-primary',
            { 'disabled:bg-opacity-40 cursor-not-allowed': noData || formHasErrors }
          )}
        >
          Registrarme
        </Button>
      </div>
    </LoginAndRegisterCard>
  );
};

export const Register = (props: any) => <Form><RegisterScreen {...props} /></Form>;