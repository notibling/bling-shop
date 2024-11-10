'use client';
import { useState } from 'react';
import React from 'react';
import { Text, Button, Switch, Title } from '@/components/atoms';

interface CookiesProps {}

const Cookies: React.FC<CookiesProps> = ({}) => {
  // Estados para cada switch, "Necesario" está siempre activado
  const [necessary, setNecessary] = useState(true); // Necesario siempre activado
  const [preferences, setPreferences] = useState(true);
  const [statistics, setStatistics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  // Handlers para cada switch
  const handleNecessaryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // No se permite cambiar el estado de 'necessary', siempre es true
  };

  const handlePreferencesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPreferences(event.target.checked);
  };

  const handleStatisticsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatistics(event.target.checked);
  };

  const handleMarketingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMarketing(event.target.checked);
  };

  return (
    <>
      <div className="w-full p-10 min-h-full z-[9999] bg-slate-900 bg-filter-blur bg-opacity-50 text-white fixed bottom-0 left-0 right-0 flex flex-row justify-between items-end box-border">
        <div className="w-full h-auto flex flex-col items-center gap-4 justify-center dark:bg-bling-dark bg-bling-light p-4 rounded-md">
          <div className="w-full h-auto z-[9999] dark:bling-dark bling-light gap-4 text-white grid grid-cols-1">
            <div className="col-span-1">
              <Title title="Privacidad y Cookies" level="h5" />
              <Text
                color="normal"
                text="Utilizamos cookies y tecnologías similares para brindarle el servicio que solicita y ofrecerle la mejor experiencia posible en nuestro sitio. Puede “Rechazar todo”, “Aceptar todo” o configurar sus preferencias de cookies en cualquier momento. Al seleccionar “Aceptar todo”, habilitamos cookies opcionales que nos ayudan a analizar el tráfico, ofrecer funcionalidades mejoradas y personalizar el contenido y anuncios según sus intereses, optimizando su experiencia en Bling. Si selecciona “Rechazar todo,” utilizaremos únicamente las cookies estrictamente necesarias para el funcionamiento de nuestro sitio.

Para obtener más información sobre las cookies que utilizamos y para ajustar sus configuraciones, seleccione “Administrar cookies”. Consulte nuestra Política de Privacidad para saber cómo procesamos los datos recopilados."
                size="small"
              />
            </div>
          </div>
          <div className="w-full h-auto z-[9999] dark:bg-bling-dark-bg-2 p-4 rounded-md bling-light gap-4 text-white grid grid-flow-row grid-cols-2 lg:grid-cols-6 flex-row justify-between items-center">
            {/* Switch "Necesario" siempre activado y deshabilitado */}
            <div className="col-span-1 text-center p-2 flex flex-col justify-between items-center gap-2">
              <Text text="Necesario" align="center" />
              <Switch checked={necessary} onChange={handleNecessaryChange} disabled />
            </div>
            <div className="col-span-1 text-center p-2 flex flex-col justify-between items-center gap-2">
              <Text text="Preferencias" align="center" />
              <Switch checked={preferences} onChange={handlePreferencesChange} />
            </div>
            <div className="col-span-1 text-center p-2 flex flex-col justify-between items-center gap-2">
              <Text text="Estadísticas" align="center" />
              <Switch checked={statistics} onChange={handleStatisticsChange} />
            </div>
            <div className="col-span-1 text-center p-2 flex flex-col justify-between items-center gap-2">
              <Text text="Marketing" align="center" />
              <Switch checked={marketing} onChange={handleMarketingChange} />
            </div>
            <div className="col-span-2 grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <Button text="Solo Seleccionados" className="w-full flex gap-2 px-4 py-5 rounded-md bling-btn-primary dark:bling-btn-primary-dark dark:text-slate-400" />
              </div>
              <div className="col-span-1">
                <Button text="Aceptar Todo" className="w-full flex gap-2 px-4 py-5 rounded-md bg-bling-blue text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Cookies };
