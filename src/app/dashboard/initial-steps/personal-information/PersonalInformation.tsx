import React, { ChangeEvent, MutableRefObject, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { format } from 'date-fns';
import Swiper from 'swiper';
import { Button, Input, Title, Separator, Section, Icon} from '@/components/atoms';
import { IUser } from '@/entities/User';
import { useInitialStepsState } from '@/contexts/InitialSteps';
import { ISimpleAutocompleteRef, SimpleAutocomplete } from '@/components/organisms/Autocomplete';
import _ from 'lodash';
import { DEFAULT_SEX_OPTIONS } from '@/constants/forms';
import Image from 'next/image';
import { BellBing } from '@/icons/tsx';

interface IPersonalInformationProps {
  controller: MutableRefObject<Swiper | null>;
}


const PersonalInformation: React.FC<IPersonalInformationProps> = ({ controller }) => {
  const { user, setUser, setUserShippings, countries } = useInitialStepsState();
  const countryRef = useRef<ISimpleAutocompleteRef<string>>(null);
  const residenceCountryRef = useRef<ISimpleAutocompleteRef<string>>(null);
  const sexRef = useRef<ISimpleAutocompleteRef<string>>(null);

  function handleUpdateField(key: keyof IUser, value: string | null) {
    setUser((prev) => ({
      ...prev,
      [key]: value
    }));
  }

  const handleNext = async() => {
    if (controller.current) {
      controller.current.slideNext();
    }
  };

  const handleSetResidenceCountry = (country: string) => {
    setUserShippings((shippings) => {
      let _shippings = _.cloneDeep(shippings);

      _shippings = _shippings.map((shipping) => {
        return {
          ...shipping,
          province: '',
          city: ''
        };
      });

      return _shippings;
    });
    handleUpdateField('residenceCountry', country || null);
  };

  useEffect(() => {
    if (countries) {
      countryRef.current?.setValue(_.find(countries, { iso: user?.country ?? '' })?.name ?? '');
      residenceCountryRef.current?.setValue(_.find(countries, { iso: user?.residenceCountry ?? '' })?.name ?? '');
    }
  }, [countries]);

  useEffect(() => {
    if (sexRef.current) {
      sexRef.current.setValue(_.find(DEFAULT_SEX_OPTIONS, { value: user?.sex ?? '' })?.name ?? '');
    }
    if (countryRef.current) {
      countryRef.current.setValue(_.find(countries, { iso: user?.country ?? '' })?.name ?? '');
    }
    if (residenceCountryRef.current) {
      residenceCountryRef.current.setValue(_.find(countries, { iso: user?.residenceCountry ?? '' })?.name ?? '');
    }
  }, [user]);

  return (
    <>
      <Section Empty={true} className='!bg-transparent'>
     
        <div className='w-full min-h-[80dvh] grid-cols-1 lg:grid-cols-10 grid  gap-4 rounded-md'>
          <div className='col-span-1 lg:col-span-3 py-4 overflow-hidden !px-14 bling-light-bg-1 shadow-sm dark:bling-dark-bg-3 rounded-md items-center relative justify-center flex flex-col'>
            <Image unoptimized={true} width={100} height={100} alt='bg-reg-prof' className='w-full h-full  object-cover z-[0] absolute left-0 right-0 bottom-0 top-0 m-auto' src='/images/avif/brand-version.avif' />
            <div className='w-full h-auto flex flex-col items-center justify-center gap-10 py-10 z-10'>
              <div className='w-[300px] h-[300px] flex justify-center items-center '>
                <div className='circles  flex items-center justify-center  '>
                  <Image unoptimized={true} width={100} height={100} src='/images/webp/user/undefined.webp' className='w-[200px] h-[200px] bling-dark-bg-4 rounded-full object-contain p-2 z-50' alt='register-profile-image' />
                  <div className='circle1 objetiveripple'></div>
                  <div className='circle2 objetiveripple'></div>
                  <div className='circle3 objetiveripple'></div>
                </div>
              </div>

              <Title
                level='p'
                titleClassName={'shadow-xl leading-tight p-2 bling-light rounded-md dark:bling-dark bling-light-text dark:text-white'}
                title='Con Bling podés comprar todo lo que soñaste tener de la forma más fácil, más segura y con ofertas increibles!'
              />
              <Button className={'w-16 h-16 bling-btn-primary shadow-md dark:bling-btn-primary-dark rounded-full btn-md'} icon={<Icon name={BellBing} color={'#ffcc00'} size={25} />} />
            </div>
          </div>

          <div className='col-span-1 lg:col-span-7 py-4 !px-10 bling-light shadow-sm dark:bling-dark-bg-2 !bg-opacity-95 rounded-md flex flex-col items-center justify-between'>
            <div className='w-full h-auto flex flex-col items-center justify-start'>
              <div className='w-full h-auto mb-4 flex flex-col'>
                <Title level='h4' title='Información Personal' className='py-5' />
                <Separator noText={true} size='my-0' />
              </div>
              <div className='w-full h-auto grid grid-cols-1 lg:grid-cols-4 gap-2'>
                <div className='col-span-2 h-auto flex flex-col'>
                  <Title level='p' title='Nombre' titleClassName={'text-xs'} className='py-1 pb-2 w-full' />
                  <Input type='text' className={classNames('w-full bling-light-bg-3  dark:bling-dark-bg-1 dark:border-bling-dark-bg-3')} value={user?.firstName ?? ''} onChange={(e: ChangeEvent<HTMLInputElement>) => handleUpdateField('firstName', e.target?.value)} placeholder='Nombre' />
                </div>
                <div className='col-span-2 h-auto flex flex-col'>
                  <Title level='p' title='Apellido' titleClassName={'text-xs'} className='py-1 pb-2 w-full' />
                  <Input type='text' className={classNames('w-full bling-light-bg-3  dark:bling-dark-bg-1 dark:border-bling-dark-bg-3')} value={user?.lastName ?? ''} onChange={(e: ChangeEvent<HTMLInputElement>) => handleUpdateField('lastName', e.target?.value)} placeholder='Apellido' />
                </div>

                <div className='col-span-2 h-auto flex flex-col'>
                  <Title level='p' title='Fecha de Nacimiento' titleClassName={'text-xs'} className='py-1 pb-2 w-full' />
                  <Input
                    className={classNames('w-full bling-light-bg-3  dark:bling-dark-bg-1 dark:border-bling-dark-bg-3')}
                    value={user?.birth ? format(new Date(user.birth), 'yyyy-MM-dd') : ''}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleUpdateField('birth', e.target?.value)}
                    placeholder='Fecha de Nacimiento'
                    type='date'
                  />
                </div>

                <div className='col-span-2 h-auto flex flex-col'>
                  <Title level='p' title='Sexo' titleClassName={'text-xs'} className='py-1 pb-2 w-full' />
                  <SimpleAutocomplete<{ name: string; value: string }>
                    strict
                    ref={sexRef}
                    placeholder='Seleccione sexo'
                    field='value'
                    label='name'
                    onSelect={(selected) => handleUpdateField('sex', selected.value)}
                    options={DEFAULT_SEX_OPTIONS}
                    className={classNames('w-full bling-light-bg-3  dark:bling-dark-bg-1 dark:border-bling-dark-bg-3')}
                  />
                </div>

                <div className='col-span-2 h-auto flex flex-col'>
                  <Title level='p' title='Nacionalidad' titleClassName={'text-xs'} className='py-1 pb-2 w-full' />
                  <SimpleAutocomplete strict ref={countryRef} placeholder='Nacionalidad' field='iso' label='name' onSelect={(selected) => handleUpdateField('country', selected.iso)} options={countries} className={classNames('w-full bling-light-bg-3  dark:bling-dark-bg-1 dark:border-bling-dark-bg-3')} />
                </div>

                <div className='col-span-2 h-auto flex flex-col'>
                  <Title level='p' title='Localidad' titleClassName={'text-xs'} className='py-1 pb-2 w-full' />
                  <SimpleAutocomplete
                    strict
                    ref={residenceCountryRef}
                    defaultValue={_.find(countries, { iso: user?.residenceCountry ?? '' })?.name ?? ''}
                    placeholder='País de residencia'
                    field='iso'
                    label='name'
                    onSelect={(selected) => handleSetResidenceCountry(selected.iso)}
                    options={countries}
                    className={classNames('w-full ')}
                  />
                </div>

                <div className='col-span-2 h-auto flex flex-col'>
                  <Title level='p' title='Documento de Identidad' titleClassName={'text-xs'} className='py-1 pb-2 w-full' />
                  <Input
                    type='number'
                    className={classNames('w-full bling-light-bg-3  dark:bling-dark-bg-1 no-spinner  dark:border-bling-dark-bg-3')}
                    value={user?.legalIdentification ?? ''}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleUpdateField('legalIdentification', e.target?.value)}
                    placeholder='Cédula de Identidad'
                  ></Input>
                </div>
              </div>
            </div>
            <div className={classNames('flex', 'w-full', 'py-4', 'text-md', 'gap-2', 'flex-col', 'flex-nowrap', 'justify-center items-end')}>
              <Separator noText={true} size='mt-0 mb-4' />
              <Button onClick={handleNext} text='Siguiente' className={classNames('bling-btn-primary border bling-light-border dark:bling-dark-border dark:bling-btn-primary-dark max-w-[200px] w-1/3 py-6')} />
            </div>
          </div>
        </div>
        
         
      </Section>
    </>
  );
};

export { PersonalInformation };
