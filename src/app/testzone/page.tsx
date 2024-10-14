'use client';
import { useState, useRef } from 'react';
import classNames from 'classnames';
import { Button, Input, Logo, Section, Title } from '@/components/atoms';
import { DarkModeBtn } from '@/components/molecules';
import Image from 'next/image';
import { useDarkMode } from '@/hooks';


const Testzone = () => {

  
  const [cardNumber, setCardNumber] = useState(['', '', '', '']);
  const [cardName, setCardName] = useState('');
  const [cardLastName, setCardLastName] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [ccv, setCcv] = useState('123');
  const inputRefs = useRef([]);
 
  const darkMode = useDarkMode();

  const displayCVV = `${ccv}`;


  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const handleCardNumberChange = (e, index) => {
    const value = e.target.value;

    if (value.length <= 4 && /^\d*$/.test(value)) {
      const updatedCardNumber = [...cardNumber];
      updatedCardNumber[index] = value;
      setCardNumber(updatedCardNumber);
    }

    if (value.length === 4 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };


  const firstDigit = cardNumber.join('')[0];
  let logoSrc;
  if (firstDigit === '4') {
    logoSrc = '/images/svg/Payments/visa.svg';
  } else if (firstDigit === '5') {
    logoSrc = '/images/svg/Payments/mastercard.svg';
  } else {
    logoSrc = `/images/svg/Payments/${darkMode ? 'blingpaylight' : 'blingpaydark'}.svg`;
  }


  return (
    <>
      <DarkModeBtn />
      <Section Empty={true} className='!w-full !h-screen !flex !items-center !relative !justify-center '>
        <div className='w-fit h-fit absolute left-0 right-0 top-0 bottom-0 m-auto'>
          <Logo width={800} className='opacity-10 ' />
        </div>
        <div className='w-auto !h-auto flex flex-row items-center justify-center relative'>
          <span className='w-fit px-2 z-10 text-slate-600 font-bold py-1 text-xs top-[-15px] absolute m-auto left-0 right-0 rounded-md bg-bling-yellow'>BLING | PAY</span>
          <div className={classNames('w-full', '!h-auto', 'rounded-2xl', 'backdrop-blur', 'border', 'bling-light-border', 'dark:bling-dark-border', 'p-6')}>
            <div className='w-[450px] h-auto grid grid-cols-4 bling-light dark:bling-dark-bg-2 rounded-xl p-4'>
              <div className='w-full h-auto relative aspect-video bling-light-bg-3 dark:bling-dark-bg-1 rounded-xl col-span-4'>
                <span className='absolute left-0 bottom-0  right-0 text-end bling-light-text dark:bling-dark-text text-ellipsis text-nowrap  p-2 m-4 border bling-light-border dark:bling-dark-border rounded-md'>CVV {displayCVV}</span>
                <div
                  onClick={handleClick}
                  className={`col-span-4 h-auto bling-light shadow-xl dark:bling-dark-gradient-1 aspect-video absolute bottom-0 top-0 transition-all duration-300 ease-in-out left-0 right-0 m-auto rounded-xl flex flex-col p-6 items-center justify-between ${
                    isClicked ? 'bottom-auto top-[-50px]' : 'bottom-0 top-0'
                  }`}
                >
                  <div className='w-full h-auto flex flex-row items-center justify-end'>
                    <div className='w-auto h-auto bling-light-text dark:text-white'><Logo width={80}/></div>
         
                  </div>
                  <div className='w-full h-auto flex flex-row items-center justify-start'>
          
                    <div className='w-auto h-auto flex flex-row items-center justify-start gap-1'>
                      <Image
                        unoptimized
                        alt='BlingCardChip'
                        width={100}
                        height={100}
                        className='max-w-[60px] aspect-video bg-contain'
                        src='/images/svg/BlingCardChip.svg'
                      />
                      <Image
                        unoptimized
                        alt='BlingCardChip'
                        width={100}
                        height={100}
                        className='max-w-[50px] aspect-video bg-contain'
                        src={`/images/svg/Payments/${darkMode ? 'freecontactlight' : 'freecontactdark'}.svg`}
                      />
                    </div>
                  </div>
                  <div className='w-full h-auto flex flex-col items-center justify-start text-start'>
         
                    <div className='w-full h-auto !text-2xl font-JetBrainsMono text-start bling-light-text dark:text-white'>
                      {cardNumber.map((num, index) => (
                        <span key={index}>{num.padEnd(4, '0')} </span>
                      ))}
                    </div>
                  </div>
                  <div className='w-full h-10 flex flex-row items-center justify-between'>
                    <div className='w-6/12 h-auto '>
                      <div className='w-auto h-auto text-start text-xs text-gray-500'>Propietario</div>
                      <div className='w-auto h-auto text-start font-JetBrainsMono bling-light-text dark:text-white'>
                        {`${cardName || 'Nombre'} ${cardLastName || 'Apellido'}`}
                      </div>
                    </div>
                    <div className='w-3/12 h-auto  px-2'>
                      <div className='w-auto h-auto text-xs text-gray-500'>Válido hasta:</div>
                      <div className='w-auto h-auto text-start  font-JetBrainsMono bling-light-text dark:text-white'>
                        {expiryMonth.padStart(2, '0')} / {expiryYear.padStart(2, '0')}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }} className='w-3/12 h-auto !text-end flex flex-row items-center m-auto justify-end'>
                      {logoSrc && (
                        <Image
                          unoptimized
                          alt='Card Logo'
                          width={100} 
                          height={50}
                          className='w-[90px] block translate-x-3 !text-end    bg-contain'
                          src={logoSrc}
                          style={{ display: 'block' }}
                        />
                      )}
                    </div>
                  </div>
        
                </div>
              </div>

              <div className='col-span-4 h-auto flex flex-col'>
                <Title level='p' title='Nombre Fantasía' titleClassName={'text-xs'} className='py-1 pb-2 w-full' />
              </div>

              <div className='col-span-4 h-auto grid grid-cols-4 gap-2'>
                {[0, 1, 2, 3].map((_, index) => (
                  <Input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type='text'
                    maxLength={4}
                    inputMode='numeric'
                    pattern='\d*'
                    className={classNames('col-span-1 bling-light-bg-3 text-center !px-0 dark:bling-dark-bg-1 dark:border-bling-dark-bg-3 no-spinner')}
                    placeholder='0000'
                    value={cardNumber[index]}
                    onChange={(e) => handleCardNumberChange(e, index)}
                    onInput={(e) => {
                      // Asegura que el valor ingresado sea numérico y limite la longitud
                      const value = e.target.value.replace(/\D/g, '').slice(0, 4);
                      e.target.value = value;
                      handleCardNumberChange(e, index);
                    }}
                  />
                ))}


              </div>

              <div className='col-span-4 h-auto grid grid-cols-4 gap-2'>
                <div className='col-span-2 h-auto flex flex-col'>
                  <Title level='p' title='Nombre' titleClassName={'text-xs'} className='py-1 pb-2 w-full' />
                  <Input 
                    type='text' 
                    maxLength={20} 
                    className={classNames('w-full bling-light-bg-3 text-center !px-0 dark:bling-dark-bg-1 dark:border-bling-dark-bg-3 no-spinner')} 
                    placeholder='Nombre'
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                  />
                </div>

                <div className='col-span-2 h-auto flex flex-col'>
                  <Title level='p' title='Apellido' titleClassName={'text-xs'} className='py-1 pb-2 w-full' />
                  <Input 
                    type='text' 
                    maxLength={20} 
                    className={classNames('w-full bling-light-bg-3 text-center !px-0 dark:bling-dark-bg-1 dark:border-bling-dark-bg-3 no-spinner')} 
                    placeholder='Apellido'
                    value={cardLastName}
                    onChange={(e) => setCardLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className='col-span-4 h-auto grid grid-cols-4 gap-2 '>
                <div className='col-span-1 h-auto flex flex-col'>
                  <Title level='p' title='Mes' titleClassName={'text-xs'} className='py-1 pb-2 w-full' />
                  <Input 
                    type='text' 
                    maxLength={2} 
                    inputMode='numeric' 
                    pattern='\d*' 
                    className={classNames('w-full bling-light-bg-3 text-center !px-0 dark:bling-dark-bg-1 dark:border-bling-dark-bg-3 no-spinner')} 
                    placeholder='00'
                    value={expiryMonth}
                    onInput={(e) => {
                      // Permite solo números y limita la longitud a 2 caracteres
                      const value = e.target.value.replace(/\D/g, '').slice(0, 2);
                      setExpiryMonth(value);
                    }}
                  />
                </div>
                <div className='col-span-1 h-auto flex flex-col'>
                  <Title level='p' title='Año' titleClassName={'text-xs'} className='py-1 pb-2 w-full' />
                  <Input 
                    type='text' 
                    maxLength={2} 
                    inputMode='numeric' 
                    pattern='\d*' 
                    className={classNames('w-full bling-light-bg-3 text-center !px-0 dark:bling-dark-bg-1 dark:border-bling-dark-bg-3 no-spinner')} 
                    placeholder='00'
                    value={expiryYear}
                    onInput={(e) => {
                      // Permite solo números y limita la longitud a 2 caracteres
                      const value = e.target.value.replace(/\D/g, '').slice(0, 2);
                      setExpiryYear(value);
                    }}
                  />
                </div>

                <div className='col-span-1 h-auto flex flex-col'>
                  <Title level='p' title='CVV' titleClassName={'text-xs'} className='py-1 pb-2 w-full' />
                  <Input
                    type='text'
                    maxLength={3}
                    inputMode='numeric'
                    pattern='\d*'
                    className={classNames('col-span-1 bling-light-bg-3 text-center !px-0 dark:bling-dark-bg-1 dark:border-bling-dark-bg-3 no-spinner')}
                    placeholder='000'
                    value={ccv}
                    onInput={(e) => {
                      // Permite solo números y limita la longitud a 3 caracteres
                      const value = e.target.value.replace(/\D/g, '').slice(0, 3);
                      setCcv(value);
                    }}
                  />
                </div>
                <div className='col-span-1 h-auto flex flex-col'>
                  <Title level='p' title='Continuar' titleClassName={'text-xs'} className='py-1 pb-2 w-full' />
                  <Button text='>' className='btn-md bling-btn-primary-light dark:bling-btn-primary-dark' />
                </div>
              </div>


            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Testzone;
