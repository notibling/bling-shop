'use client';
import React, { ChangeEvent, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import classNames from 'classnames';

import * as authOperations from '@/contexts/GlobalState/auth/operations';

import { Input, Button, ButtonSize, InputSize, Alert } from '@/components/atoms';
import { LoginAndRegisterCard } from './LoginAndRegisterCard';
import { RegularExpressions } from '@/common/RegularExpression';
import { useAnimation } from '@/hooks/useAnimation';
import { Form, useForm } from '@/components/organisms';
import { useGlobalState } from '@/contexts/GlobalState';
import { FaInfoCircle } from 'react-icons/fa';

const LoginScreen: React.FC = ({}) => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { animating: shaking, animate } = useAnimation(500);
  const { auth } = useGlobalState();
  const form = useForm();

  const formHasErrors = useMemo(() => form.fields.some((field) => field.hasError), [form.fields]);

  const noData = useMemo(() => form.fields.some((input) => !input.value), [form.fields]);

  const resetFields = () => {
    setEmail('');
    setPassword('');
  };

  const handleError = (reset: boolean = true) => {
    setError(true);
    animate();
    if (reset) resetFields();
  };

  const signIn = async() => {
    setLoading(true);
    try {
      const result = await authOperations.signIn(email, password);
      if (result.success) {
        auth.setUser(result.user);
        auth.setAccessToken(result.token);
        router.replace('/dashboard');
      } else handleError();
    } catch (error: any) {
      if (error.response.status === 401) handleError(false);
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <LoginAndRegisterCard className={classNames({ 'animate-shake': shaking })} title='Ingresar'>
      <fieldset className={classNames('flex', 'flex-col', 'gap-6')}>
        <Input
          controlId='email'
          error='Ingrese un correo electrónico válido'
          errorRegexp={RegularExpressions.EMAIL}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          value={email}
          size={InputSize.base}
          placeholder='Ingrese su correo electrónico'
        />
        <Input
          controlId='password'
          error='Ingrese una contraseña alfanumérica con al menos 8 caracteres y una mayúscula'
          errorRegexp={RegularExpressions.PASSWORD}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          value={password}
          size={InputSize.base}
          type='password'
          placeholder='Ingrese su contraseña'
        />
      </fieldset>
      {error && (
        <Alert icon={<FaInfoCircle className={classNames('text-white')} />} className={classNames('bg-red-500')}>
          <span className={classNames('text-xs', 'text-white', 'font-bold')}>Los datos ingresados son incorrectos</span>
        </Alert>
      )}
      <div className={classNames('w-full', 'flex', 'justify-center')}>
        <Button
          disabled={formHasErrors || loading || noData}
          loading={loading}
          onClick={signIn}
          size={ButtonSize.base}
          className={classNames('w-full', 'text-white', 'bg-blue-500', 'focus:scale-95', 'hover:bg-blue-400', 'text-sm', 'bling-bg-primary', 'conectarme', { 'disabled:bg-opacity-40 cursor-not-allowed': noData || formHasErrors })}
        >
          {' '}
          Conectarme{' '}
        </Button>
      </div>
    </LoginAndRegisterCard>
  );
};

export const Login = (props: any) => (
  <Form>
    <LoginScreen {...props} />
  </Form>
);
