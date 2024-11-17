'use client';
import React, { useState } from 'react';
import { Icon, Item, Section, Separator, Title } from '@/components/atoms';
import DocButton from './DocButton';
import DocTitle from './DocTitle'; 
import { LinkMinimalistic, QrCode, Translation, AltArrowDown, AltArrowUp, BellBing, Card, TextSquare, TextBold, Feed, TextBoldSquare } from '@/icons/tsx';
import { Accordion } from '@/components/organisms';
import DocCardHorizontal from './DocCardHorizontal';


interface IComponentPageProps {
  children: React.ReactNode;
}

const ComponentPage: React.FC<IComponentPageProps> = ({ children }) => {
  const [openItem, setOpenItem] = useState<string | null>(null); // Estado para controlar qué item está abierto
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null); // Estado para controlar qué componente de documentación se debe mostrar

  // Estructura de datos para los acordeones y los items
  const accordionData = [
    {
      title: 'Componentes',
      items: [
        { id: 'botones', label: 'Botones', icon: <Icon name={TextBoldSquare} size={20} /> },
        { id: 'titulos', label: 'Títulos', icon: <Icon name={TextSquare} size={20} /> },
        { id: 'cardhorizontal', label: 'Card Horizontal', icon: <Icon name={Feed} size={20} /> },
        
      ],
    },
    {
      title: 'Servicios',
      items: [
        { id: 'solucionesQR', label: 'Soluciones con QR', icon: <Icon name={QrCode} size={20} /> },
        { id: 'linksPago', label: 'Links de Pago', icon: <Icon name={LinkMinimalistic} size={20} /> },
      ],
    },
    {
      title: 'Integraciones',
      items: [
        { id: 'api', label: 'API', icon: <Icon name={Translation} size={20} /> },
        { id: 'checkout', label: 'Checkout Externo', icon: <Icon name={Translation} size={20} /> },
      ],
    },
  ];

  // Función para manejar el clic y mostrar el componente correspondiente en la zona azul
  const handleItemClick = (itemId: string) => {
    setSelectedDoc(itemId); // Establecer qué componente mostrar
  };

  return (
    <Section classNameContainer="p-10 flex justify-start items-start grid grid-cols-10 p-4 gap-2">
      <div className='col-span-2 h-full rounded-md'>
        <div className='w-full h-auto flex flex-col items-center justify-center p-5'>
          <Title title="BLING | Components" level="h5" />
          <Separator noText />
          <Item text='Para mostrar la documentación de los componentes' />
        </div>

        {/* Mapeamos los acordeones */}
        {accordionData.map((accordion, index) => (
          <div key={index} className="w-full mb-4">
            <Accordion
              className='border bling-light-border dark:bling-dark-border !bg-transparent !rounded-lg'
              trigger={
                <Item
                  contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 dark:bling-dark-bg-2  bling-light hover:bg-white'}
                  content="icon"
                  suffix={<Icon name={openItem === accordion.title ? AltArrowUp : AltArrowDown} size={15} />}
                  icon={<Icon name={BellBing} size={20} />}
                  text={accordion.title}
                />
              }
            >
              {/* Mapeamos los items dentro de cada acordeón */}
              {accordion.items.map((item) => (
                <div key={item.id}>
                  <Item
                    contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'}
                    textClassName={'text-start text-balance'}
                    content="icon"
                    icon={item.icon}
                    text={item.label}
                    onClick={() => handleItemClick(item.id)} // Clic para mostrar el DocButton o DocTitle en la zona azul
                  />
                </div>
              ))}
            </Accordion>
          </div>
        ))}
      </div>

      {/* Zona Azul - Donde se mostrarán los componentes seleccionados */}
      <div className='col-span-8 h-full rounded-md p-5'>
        {selectedDoc === 'botones' && <DocButton />} 
        {selectedDoc === 'titulos' && <DocTitle />} 
        {selectedDoc === 'cardhorizontal' && <DocCardHorizontal />}
      
      </div>
    </Section>
  );
};

export default ComponentPage;
