import { ChangeEvent, MutableRefObject, useEffect, useState } from 'react';

import classNames from 'classnames';
import _ from 'lodash';
import Swiper from 'swiper';
import { FaBuilding, FaFileInvoice, FaHome } from 'react-icons/fa';
import { useInitialStepsState } from '@/contexts/InitialSteps';
import { IUserShipping } from '@/entities/UserShipping';
import { Button, Input, Title, Separator, Section, Icon } from '@/components/atoms';
import { SimpleAutocomplete } from '@/components/organisms';
import { Select, Option } from '@/components/molecules';
import { BillList, Buildings, Home, House } from '@/icons/tsx';
import { BiBuilding } from 'react-icons/bi';

interface IShippingInformationProps {
  controller: MutableRefObject<Swiper | null>;
}

const ShippingInformation: React.FC<IShippingInformationProps> = ({ controller }) => {
  const [mostrarDiv1, setMostrarDiv1] = useState(false);
  const [mostrarDiv2, setMostrarDiv2] = useState(false);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [selectedAddress1, setSelectedAddress1] = useState<string>('Utilizar la misma dirección');
  const [selectedAddress2, setSelectedAddress2] = useState<string>('Utilizar la misma dirección');
  const [selectedAlternativeAddress1, setSelectedAlternativeAddress1] = useState<string>('Definir dirección como');
  const [selectedAlternativeAddress2, setSelectedAlternativeAddress2] = useState<string>('Definir dirección como');

  const {
    userShippings,
    setUserShippings,
    states,
    user,
    sync,
    getCities,

    shippingInformationCityRef,
    shippingInformationStateRef,
  } = useInitialStepsState();

  const setShipping = (index: number, data: Partial<IUserShipping>) => {
    setUserShippings((prev) => {
      const value = prev ?? [];

      value[index] = {
        ...(value[index] ?? {}),
        ...data,
      };

      return _.cloneDeep(value);
    });
  };

  const handleNext = async () => {
    controller.current && controller.current.slideNext();
    sync();
  };

  const getShipping = (index: number) => {
    return userShippings[index];
  };

  const citiesShipping = (index: number) => {
    console.log(index, getShipping(index)?.province);
    return getCities(getShipping(index)?.province ?? '') || [];
  };



  useEffect(() => {
    if (controller.current && !loaded)
      controller.current?.once('slideChange', () => {
        console.log('hello world');
        setLoaded(true);
      });
  }, [controller, loaded]);

  useEffect(() => {
    shippingInformationStateRef.current && shippingInformationStateRef.current.setValue(getShipping(0)?.province ?? '');
    shippingInformationCityRef.current && shippingInformationCityRef.current.setValue(getShipping(0)?.city ?? '');
  }, [userShippings]);

  const handleSelectChange1 = (value: string) => {
    setSelectedAddress1(value);
    setMostrarDiv1(value === 'Añadir otra dirección');
  };

  const handleSelectChange2 = (value: string) => {
    setSelectedAddress2(value);
    setMostrarDiv2(value === 'Añadir otra dirección');
  };



  useEffect(() => {
    shippingInformationStateRef.current?.setValue(getShipping(0)?.province ?? '');
    shippingInformationCityRef.current?.setValue(getShipping(0)?.city ?? '');
  }, [userShippings]);

  return (
    loaded && (
      <>
        <Section Empty={true} className='!bg-transparent'>
          <div className="w-full  flex flex-col px-4 bling-light  dark:bling-dark-bg-2 shadow-sm !bg-opacity-95 rounded-md">
            <div className="w-full h-auto mb-4 flex flex-col ">
              <Title level="h4" title="Recepción de envios" className="py-5" />
              <Separator noText={true} size="my-0" />
            </div>
            <div className="w-full grid-cols-1 lg:grid-cols-6 grid gap-2 ">
              <div className="col-span-1 lg:col-span-2 p-4 border bling-light-border dark:bling-dark-border rounded-md  items-center justify-start flex flex-col gap-2">
                <Title level="h4" iconClassName={'!py-0 !px-1'} icon={<Icon name={House} size={30} />} title=" Dirección de Envío Principal" description="¿Dónde deseas que enviemos tus compras?" className="py-1 w-full " />
                <Separator noText={true} size="my-0" />
                <SimpleAutocomplete<{ name: string }>
                  strict
                  ref={shippingInformationStateRef}
                  placeholder="Departamento"
                  field="name"
                  onSelect={(selected) => setShipping(0, { province: selected?.name ?? '', city: '' })}
                  options={states}
                  disabled={states.length === 0}
                  className={classNames('w-full')}
                />
                <SimpleAutocomplete<{ name: string }>
                  placeholder="Ciudad"
                  ref={shippingInformationCityRef}
                  field="name"
                  onSelect={(selected) => setShipping(0, { city: selected.name ?? '' })}
                  options={citiesShipping(0)}
                  disabled={citiesShipping(0).length === 0}
                  className={classNames('w-full')}
                />

                <Input type="text" maxLength={60}  value={getShipping(0)?.street1 ?? ''} onChange={(e: ChangeEvent<HTMLInputElement>) => setShipping(0, { street1: e.target.value ?? '' })} placeholder="Calle Principal" />
                <Input type="text" maxLength={60}  value={getShipping(0)?.streetCorner ?? ''} onChange={(e: ChangeEvent<HTMLInputElement>) => setShipping(0, { streetCorner: e.target.value ?? '' })} placeholder="Esquina" />

                <div className={classNames('w-full', 'h-auto', 'flex', 'flex-row', 'gap-2')}>
                  <Input type="number" maxLength={6} className={classNames('w-1/2 no-spinner')} value={getShipping(0)?.postalCode ?? ''} onChange={(e: ChangeEvent<HTMLInputElement>) => setShipping(0, { postalCode: e.target.value ?? '' })} placeholder="Código Postal" />
                  <Input type="number" maxLength={5} className={classNames('w-10/12  no-spinner')} value={getShipping(0)?.doorNumber ?? ''} placeholder="N° de Puerta" onChange={(e: ChangeEvent<HTMLInputElement>) => setShipping(0, { doorNumber: e.target.value ?? '' })} />{' '}
                </div>
                <div className={classNames('w-full', 'h-auto', 'flex', 'flex-row', 'gap-2')}>
                  <Input type="number" maxLength={5}  className={classNames('w-1/2  no-spinner')} value={getShipping(0)?.solar ?? ''} placeholder="Solar" onChange={(e: ChangeEvent<HTMLInputElement>) => setShipping(0, { solar: e.target.value ?? '' })} />
                  <Input type="text-number" maxLength={5}  className={classNames('w-1/2 ')} value={getShipping(0)?.apartmentNumber ?? ''} placeholder="Apto" onChange={(e: ChangeEvent<HTMLInputElement>) => setShipping(0, { apartmentNumber: e.target.value ?? '' })} />
                </div>
                <Title level="p" title="¿Deseas añadir una dirección alternativa??" titleClassName={'text-xs'} className="py-1 pb-2 w-full" />
                <div className={classNames('w-full', 'h-auto', 'flex-col', 'gap-2', 'flex')}>
                  <Select text={selectedAddress1}>
                    <>
                      <Option text="Añadir otra dirección" onClick={() => handleSelectChange1('Añadir otra dirección')} />
                      <Option text="Utilizar la misma dirección" onClick={() => handleSelectChange1('Utilizar la misma dirección')} />
                    </>
                  </Select>
                </div>
                <Title level="p" title="¿Deseas añadir una dirección de facturación?" titleClassName={'text-xs'} className="py-1 pb-2 w-full" />
            
                <div className={classNames('w-full', 'h-auto', 'flex-col', 'gap-2', 'flex')}>
                  <Select text={selectedAddress2}>
                    <>
                      <Option text="Añadir otra dirección" value="Añadir otra" onClick={() => handleSelectChange2('Añadir otra dirección')} />
                      <Option text="Utilizar la misma dirección" onClick={() => handleSelectChange2('Utilizar la misma dirección')} />
                    </>
                  </Select>
                </div>
              </div>

              {mostrarDiv1 && (
                <div className="col-span-1 lg:col-span-2 p-4 border relative  bling-light-border dark:bling-dark-border rounded-md items-center justify-start flex flex-col gap-2">
                 <div className='w-[120px] h-[120px] z-0 border bling-light-border dark:bling-dark-border  rounded-md bottom-5 right-5 m-auto absolute flex justify-center items-center'>
                 <Icon name={Buildings} size={80} className={''} />
                  </div>
                  <Title level="h4" iconClassName={'!py-0 !px-1'} icon={<Icon name={Buildings} size={30} />} title="Dirección de Envío Alternativa" description="¿Dónde deseas que enviemos tus compras?" className="py-1 w-full " />
                  <Separator noText={true} size="my-0" />

                  <div className={classNames('w-full','z-30', 'h-auto', 'flex-col', 'gap-2', 'flex')}>
                  <Select 
  text={selectedAlternativeAddress1} 
  value={getShipping(1)?.description}
  onChange={(value) => setShipping(1, { description: String(value) })}
>                    
                      <Option value="Hogar" text="Hogar" />
                      <Option value="Trabajo" text="Trabajo" />
                      <Option value="Oficina" text="Oficina" />
                      <Option value="Casa de un amigo" text="Casa de un amigo" />
                      <Option value="Casa de un familiar" text="Casa de un familiar" />
                      <Option value="Sin especificar" text="Sin especificar" />
                    </Select>

                    <div className={classNames('w-full', 'h-auto', 'gap-1', 'flex', 'flex-row', 'flex-nowrap')}>
                      <SimpleAutocomplete<{ name: string }>
                        strict
                        ref={shippingInformationStateRef}
                        placeholder="Departamento"
                        field="name"
                        onSelect={(selected) => setShipping(1, { province: selected?.name ?? '', city: '' })}
                        options={states}
                        disabled={states.length === 0}
                        className={classNames('w-full')}
                      />

                      <SimpleAutocomplete<{ name: string }>
                        placeholder="Ciudad"
                        ref={shippingInformationCityRef}
                        field="name"
                        onSelect={(selected) => setShipping(1, { city: selected.name ?? '' })}
                        options={citiesShipping(1)}
                        disabled={citiesShipping(1).length === 1}
                        className={classNames('w-full')}
                      />
                    </div>
                    <Input type="text" maxLength={60} value={getShipping(1)?.street1 ?? ''} onChange={(e: ChangeEvent<HTMLInputElement>) => setShipping(1, { street1: e.target.value ?? '' })} placeholder="Calle Principal" />
                    <Input type="text" maxLength={60} value={getShipping(1)?.streetCorner ?? ''} onChange={(e: ChangeEvent<HTMLInputElement>) => setShipping(1, { streetCorner: e.target.value ?? '' })} placeholder="Esquina" />
                    <div className={classNames('w-full', 'h-auto', 'flex', 'flex-row', 'gap-2')}>
                      <Input type="number" maxLength={6} className={classNames('w-1/2 no-spinner')} value={getShipping(1)?.postalCode ?? ''} onChange={(e: ChangeEvent<HTMLInputElement>) => setShipping(1, { postalCode: e.target.value ?? '' })} placeholder="Código Postal" />
                      <Input type="number" maxLength={5} className={classNames('w-1/2 no-spinner')} value={getShipping(1)?.doorNumber ?? ''} placeholder="N° de Puerta" onChange={(e: ChangeEvent<HTMLInputElement>) => setShipping(1, { doorNumber: e.target.value ?? '' })} />{' '}
                    </div>
                    <div className={classNames('w-full', 'h-auto', 'flex', 'flex-row', 'gap-2')}>
                      <Input type="number" maxLength={5} className={classNames('w-1/2 no-spinner ')} value={getShipping(1)?.solar ?? ''} placeholder="Solar" onChange={(e: ChangeEvent<HTMLInputElement>) => setShipping(1, { solar: e.target.value ?? '' })} />
                      <Input type="text-number" maxLength={5} className={classNames('w-1/2 no-spinner')} value={getShipping(1)?.apartmentNumber ?? ''} placeholder="Apto" onChange={(e: ChangeEvent<HTMLInputElement>) => setShipping(1, { apartmentNumber: e.target.value ?? '' })} />
                    </div>
                  </div>
                </div>
              )}

              {mostrarDiv2 && (
                <div className="col-span-1 lg:col-span-2 p-4 relative border bling-light-border dark:bling-dark-border rounded-md items-center justify-start flex flex-col gap-2">
                <div className='w-[120px] h-[120px] z-0 border bling-light-border dark:bling-dark-border  rounded-md bottom-5 right-5 m-auto absolute flex justify-center items-center'>
                 <Icon name={BillList} size={80} className={''} />
                  </div>
                  <Title level="h4" iconClassName={'!py-0 !px-1'} icon={<Icon name={BillList} size={30} />} title=" Dirección de Facturación " description="¿Dónde deseas que enviemos tus facturas?" className="py-1 w-full " />
                  <Separator noText={true} size="my-0" />

                  <div className={classNames('w-full','z-10', 'h-auto', 'flex-col', 'gap-2', 'flex')}>
                  
                  <Select 
  text={selectedAlternativeAddress1} 
  value={getShipping(2)?.description}
  onChange={(value) => setShipping(2, { description: String(value) })}
>                    
                      <Option value="Hogar" text="Hogar" />
                      <Option value="Trabajo" text="Trabajo" />
                      <Option value="Oficina" text="Oficina" />
                      <Option value="Casa de un amigo" text="Casa de un amigo" />
                      <Option value="Casa de un familiar" text="Casa de un familiar" />
                      <Option value="Sin especificar" text="Sin especificar" />
                    </Select>
                  
                
                    <div className={classNames('w-full', 'h-auto', 'gap-1', 'flex', 'flex-row', 'flex-nowrap')}>
                      <SimpleAutocomplete<{ name: string }>
                        strict
                        ref={shippingInformationStateRef}
                        placeholder="Departamento"
                        field="name"
                        onSelect={(selected) => setShipping(1, { province: selected?.name ?? '', city: '' })}
                        options={states}
                        disabled={states.length === 0}
                        className={classNames('w-full')}
                      />

                      <SimpleAutocomplete<{ name: string }>
                        placeholder="Ciudad"
                        ref={shippingInformationCityRef}
                        field="name"
                        onSelect={(selected) => setShipping(1, { city: selected.name ?? '' })}
                        options={citiesShipping(2)}
                        disabled={citiesShipping(2).length === 1}
                        className={classNames('w-full')}
                      />
                    </div>
                    <Input type="text" maxLength={60} value={getShipping(2)?.street1 ?? ''} onChange={(e: ChangeEvent<HTMLInputElement>) => setShipping(2, { street1: e.target.value ?? '' })} placeholder="Calle Principal" />
                    <Input type="text" maxLength={60} value={getShipping(2)?.streetCorner ?? ''} onChange={(e: ChangeEvent<HTMLInputElement>) => setShipping(2, { streetCorner: e.target.value ?? '' })} placeholder="Esquina" />
                    <div className={classNames('w-full', 'h-auto', 'flex', 'flex-row', 'gap-2')}>
                      <Input type="number" maxLength={6} className={classNames('w-1/2 no-spinner')} value={getShipping(2)?.postalCode ?? ''} onChange={(e: ChangeEvent<HTMLInputElement>) => setShipping(2, { postalCode: e.target.value ?? '' })} placeholder="Código Postal" />
                      <Input type="number" maxLength={5} className={classNames('w-1/2 no-spinner')} value={getShipping(2)?.doorNumber ?? ''} placeholder="N° de Puerta" onChange={(e: ChangeEvent<HTMLInputElement>) => setShipping(2, { doorNumber: e.target.value ?? '' })} />{' '}
                    </div>
                    <div className={classNames('w-full', 'h-auto', 'flex', 'flex-row', 'gap-2')}>
                      <Input type="number" maxLength={5} className={classNames('w-1/2 no-spinner ')} value={getShipping(2)?.solar ?? ''} placeholder="Solar" onChange={(e: ChangeEvent<HTMLInputElement>) => setShipping(2, { solar: e.target.value ?? '' })} />
                      <Input type="text-number" maxLength={5} className={classNames('w-1/2 no-spinner')} value={getShipping(2)?.apartmentNumber ?? ''} placeholder="Apto" onChange={(e: ChangeEvent<HTMLInputElement>) => setShipping(2, { apartmentNumber: e.target.value ?? '' })} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className={classNames('flex', 'w-full', 'py-4', 'text-md', 'gap-2', 'flex-col', 'flex-nowrap', 'justify-center items-end')}>
              <Separator noText={true} size="mt-0 mb-4" />
              <div className="w-full h-auto flex flex-row items-center justify-between">
                <Button
                  onClick={() => controller.current && controller.current.slidePrev()}
                  text="Anterior"
                  className={classNames('bling-btn-primary border bling-light-border dark:bling-dark-border dark:bling-btn-primary-dark max-w-[200px] w-1/3 py-6')}
                />

                <Button onClick={handleNext} text="Siguiente" className={classNames('bling-btn-primary border bling-light-border dark:bling-dark-border dark:bling-btn-primary-dark max-w-[200px] w-1/3 py-6')} />
              </div>
            </div>
          </div>
        </Section>
      </>
    )
  );
};
export { ShippingInformation };
