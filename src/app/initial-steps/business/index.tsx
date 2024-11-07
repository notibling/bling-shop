import React, { ChangeEvent, MutableRefObject, useEffect, useRef } from 'react';
import classNames from 'classnames';
import Swiper from 'swiper';
import { Button, Input, Title, Separator, Section, Icon, Checkbox } from '@/components/atoms';
import { IUser } from '@/entities/User';
import { useInitialStepsState } from '@/contexts/InitialSteps';
import { ISimpleAutocompleteRef, SimpleAutocomplete } from '@/components/organisms/Autocomplete';
import _ from 'lodash';

import { commercialSector } from '@/constants/commercialSector';
import Image from 'next/image';
import { BellBing } from '@/icons/tsx';
import { format } from 'date-fns'; // Importar format de date-fns

interface IBusinessInformationProps {
  controller: MutableRefObject<Swiper | null>;
}


const BusinessInformation: React.FC<IBusinessInformationProps> = ({ controller }) => {
  const { user, setUser, setUserShippings, countries } = useInitialStepsState();
  const countryRef = useRef<ISimpleAutocompleteRef<unknown>>(null);
  const residenceCountryRef = useRef<ISimpleAutocompleteRef<unknown>>(null);
  const commercialSectorRef = useRef<ISimpleAutocompleteRef<unknown>>(null);

  function handleUpdateField(key: keyof IUser, value: unknown) {
    setUser((prev) => ({
      ...prev,
      [key]: value
    }));
  }
  const handleNext = async() => {
    if (controller.current) {
      await controller.current.slideNext();
    }
  };

  const handleBack = async () => {
    if (controller.current) {
      controller.current.slidePrev();  // Retrocede una diapositiva
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
    if (commercialSectorRef.current) {
      commercialSectorRef.current.setValue(_.find(commercialSector, { value: user?.sex ?? '' })?.name ?? '');
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
       

          <div className='col-span-1 lg:col-span-7 py-4 !px-10 bling-light shadow-sm dark:bling-dark-bg-2 !bg-opacity-95 rounded-md flex flex-col items-center justify-between'>
            <div className='w-full h-auto flex flex-col items-center justify-start'>
              <div className='w-full h-auto mb-4 flex flex-col'>
                <Title level='h4' title='Información Empresarial' className='py-5' />
                <Separator noText={true} size='my-0' />
              </div>
              <div className='w-full h-auto grid grid-cols-1 lg:grid-cols-4 gap-2'>
                <div className='col-span-2 h-auto flex flex-col'>
                  <Title level='p' title='Nombre Fantasía' titleClassName={'text-xs'} className='py-1 pb-2 w-full' />
                  <Input type='text' className={classNames('w-full bling-light-bg-3  dark:bling-dark-bg-1 dark:border-bling-dark-bg-3')} value={user?.firstName ?? ''} onChange={(e: ChangeEvent<HTMLInputElement>) => handleUpdateField('firstName', e.target?.value)} placeholder='Bling' />
                </div>
                <div className='col-span-2 h-auto flex flex-col'>
                  <Title level='p' title='Razón Social' titleClassName={'text-xs'} className='py-1 pb-2 w-full' />
                  <Input type='text' className={classNames('w-full bling-light-bg-3  dark:bling-dark-bg-1 dark:border-bling-dark-bg-3')} value={user?.lastName ?? ''} onChange={(e: ChangeEvent<HTMLInputElement>) => handleUpdateField('lastName', e.target?.value)} placeholder='BlingCompany SAS' />
                </div>

               
                <div className='col-span-2 h-auto flex flex-col'>
                  <Title level='p' title='Teléfono de contacto' titleClassName={'text-xs'} className='py-1 pb-2 w-full' />
                  <Input type='number' className={classNames('w-full bling-light-bg-3 no-spinner  dark:bling-dark-bg-1 dark:border-bling-dark-bg-3')} value={user?.lastName ?? ''} onChange={(e: ChangeEvent<HTMLInputElement>) => handleUpdateField('lastName', e.target?.value)} placeholder='+59800000000' />
                </div>
                <div className='col-span-2 h-auto flex flex-col'>
                  <Title level='p' title='sitio web' titleClassName={'text-xs'} className='py-1 pb-2 w-full' />
                  <Input
                    className={classNames('w-full bling-light-bg-3  dark:bling-dark-bg-1 dark:border-bling-dark-bg-3')}
                    placeholder='https://www.bling.uy'
                    type='text'
                  />
                </div>
                <div className='col-span-2 h-auto flex flex-col'>
                  <Title level='p' title='Fecha de Fundación' titleClassName={'text-xs'} className='py-1 pb-2 w-full' />
                  <Input
                    className={classNames('w-full bling-light-bg-3  dark:bling-dark-bg-1 dark:border-bling-dark-bg-3')}
                    value={user?.birth ? format(new Date(user.birth), 'yyyy-MM-dd') : ''} // Cambiar moment por date-fns
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleUpdateField('birth', e.target?.value)}
                    placeholder='Fecha de Nacimiento'
                    type='date'
                  />
                </div>
                
                <div className='col-span-2 h-auto flex flex-col'>
                  <Title level='p' title='Rubro' titleClassName={'text-xs'} className='py-1 pb-2 w-full' />
                  <SimpleAutocomplete<{ name: string; value: string }>
                    strict
                    ref={commercialSectorRef}
                    placeholder='Seleccione su rubro'
                    field='value'
                    label='name'
                    onSelect={(selected) => handleUpdateField('sex', selected.value)}
                    options={commercialSector}
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
                  <Title level='p' title='Ingrese su RUT' titleClassName={'text-xs'} className='py-1 pb-2 w-full'/>
                  <Input
                    type='number'
                    className={classNames('w-full bling-light-bg-3  dark:bling-dark-bg-1 no-spinner  dark:border-bling-dark-bg-3')}
                    value={user?.legalIdentification ?? ''}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleUpdateField('legalIdentification', e.target?.value)}
                    placeholder='00000000000'
                  ></Input>
                </div>
                
                <div className='col-span-2 h-auto flex flex-col'>
                  <Title level='p' title='Casa central / Sucursal' titleClassName={'text-xs'} className='py-1 pb-2 w-full' />
                  <div className='w-full h-12 flex flex-row items-center justify-center gap-2'>
                    <div className='w-1/2 h-auto  flex flex-row items-center justify-start gap-2'>
               
                      <Input
                        type='number'
                        className={classNames('w-full bling-light-bg-3 dark:bling-dark-bg-1 no-spinner dark:border-bling-dark-bg-3')}
                        placeholder='N° Sucursal'
                      ></Input></div>
                    <div className='w-1/2 h-auto  flex flex-row items-center justify-start gap-2'> <Checkbox onClick={() => {}}/><Title level='p' title='Casa Central' titleClassName={'text-xs'} className=' w-full' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full h-auto flex flex-row items-center justify-between'>
                <Button
                  onClick={handleBack}
                  text='Anterior'
                  className={classNames('bling-btn-primary border bling-light-border dark:bling-dark-border dark:bling-btn-primary-dark max-w-[200px] w-1/3 py-6')}
                />

                <Button onClick={handleNext} text='Siguiente' className={classNames('bling-btn-primary border bling-light-border dark:bling-dark-border dark:bling-btn-primary-dark max-w-[200px] w-1/3 py-6')} />
              </div>
          </div>

          <div className='col-span-1 lg:col-span-3 py-4 overflow-hidden !px-14 bling-light-bg-1 shadow-sm dark:bling-dark-bg-3 rounded-md items-center relative justify-center flex flex-col'>
            <Image unoptimized={true} width={100} height={100} alt='bg-reg-prof' className='w-full h-full  object-cover z-[0] absolute left-0 right-0 bottom-0 top-0 m-auto' src='/images/avif/business-background.avif' />
            <div className='w-full h-auto flex flex-col items-center justify-center gap-10 py-10 z-10'>
              <div className='w-[300px] h-[300px] flex justify-center items-center '>
                <div className='circles  flex items-center justify-center  '>
                  <Image unoptimized={true} width={100} height={100} src='/images/avif/business-img.avif' className='w-[200px] h-[200px] bling-dark-bg-4 rounded-full object-contain p-2 z-50' alt='register-profile-image' />
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
        </div>
        
         
      </Section>
    </>
  );
};

export { BusinessInformation };
