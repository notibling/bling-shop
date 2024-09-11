import React from 'react';
import { Icon, Separator, Tooltip, Input, Button, Title, InputFile, InputRange } from '@/components/atoms';

interface AdvertisementsRentProps {
  blockSize: string | null;
}

interface Option {
  label: string;
  value: number;
  result: string;
}

const AdvertisementsRent: React.FC<AdvertisementsRentProps> = ({ blockSize }) => {
  const handleFilesSelected = (files: FileList | null) => {
    if (files) {
      console.log('Archivos seleccionados:', files);
    }
  };

  const options: Option[] = [
    { label: '1 semana por', value: 1, result: '$50' },
    { label: '2 semanas por', value: 2, result: '$100' },
    { label: '3 semanas por', value: 3, result: '$150' },
    { label: 'Todo el mes por', value: 4, result: '$200' },
  ];

  const resolutionSuggestion = (size: string | null) => {
    switch (size) {
      case 'square':
        return 'Resolución mínima [500px ancho] x [500px alto]';
      case 'horizontal':
        return 'Resolución mínima [1000px ancho] x [500px alto]';
      case 'vertical':
        return 'Resolución mínima [500px ancho] x [1000px alto]';
      case 'large':
        return 'Resolución mínima [1000px ancho] x [1000px alto]';
      default:
        return '';
    }
  };

  return (
    <div className="max-w-[700px] flex flex-col gap-3 ">
      <div className="w-full h-auto gap-3">
        <div className="flex flex-col items-center self-center justify-center w-full h-auto gap-2 p-2 border rounded-md border-slate-200">
          <Title level="h6" title="¿Cómo funciona?" className="mt-1" />
          <Separator size="my-1" noText className="border-slate-200" />
          <table className="w-full h-auto border-collapse table-auto ">
            <tbody>
              <tr className="border-b border-slate-200 ">
                <td className="px-2 py-2 text-xs font-bold text-nowrap">
                  <span className="bg-bling-yellow text-white font-bold w-[25px] h-[25px] flex items-center justify-center rounded-full">1</span>
                </td>
                <td className="px-2 py-2 text-xs text-slate-500">Elija un espacio</td>
              </tr>
              <tr className="border-b border-slate-200 ">
                <td className="px-2 py-2 text-xs font-bold text-nowrap">
                  <span className="bg-bling-yellow text-white font-bold w-[25px] h-[25px] flex items-center justify-center rounded-full">2</span>
                </td>
                <td className="px-2 py-2 text-xs text-slate-500">Cargue el contenido con las dimesiones especificadas</td>
              </tr>
              <tr className="border-b border-slate-200 ">
                <td className="px-2 py-2 text-xs font-bold text-nowrap">
                  <span className="bg-bling-yellow text-white font-bold w-[25px] h-[25px] flex items-center justify-center rounded-full">3</span>
                </td>
                <td className="px-2 py-2 text-xs text-slate-500">Elija el tiempo de duración</td>
              </tr>
              <tr className="border-b border-slate-200 ">
                <td className="px-2 py-2 text-xs font-bold text-nowrap">
                  <span className="bg-bling-yellow text-white font-bold w-[25px] h-[25px] flex items-center justify-center rounded-full">4</span>
                </td>
                <td className="px-2 py-2 text-xs text-slate-500">Realice una oferta</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col items-center self-center justify-center w-full h-auto gap-2 p-2 border rounded-md border-slate-200">
        <Title level="h6" title="Contenido" className="mt-1" />
        <Separator size="my-1" noText className="border-slate-200" />
        <InputFile method="area" labelText={'Formatos: jpg, jpeg, png, WebP, AVIF.<br/> No admite transparencias.'} onFilesSelected={handleFilesSelected} areaText="Arrastre los archivos aquí o haga clic para seleccionar" />
        <p className="text-sm text-center ">{resolutionSuggestion(blockSize)}</p>
      </div>

      <div className="flex flex-col items-center self-center justify-center w-full h-auto gap-2 p-2 border rounded-md border-slate-200">
        <Title level="h6" title="Duración" className="mt-1" />
        <Separator size="my-1" noText className="border-slate-200" />
        <InputRange options={options} isStepped={true} min={1} max={4} step={1} />
        <span className="text-xs font-bold text-center">
          En caso de existir una oferta
          <br />
          tenga en cuenta solo el tiempo de duración
        </span>
      </div>
      <div className="flex flex-col items-center self-center justify-center w-full h-auto gap-2 p-2 border rounded-md border-slate-200">
        <Title level="h6" title="Oferta" className="mt-1" />
        <Separator size="my-1" noText className="border-slate-200" />
        <div className="flex flex-row items-center justify-center w-auto gap-2 text-xs text-slate-700">
          <span className="text-xs bling-badge">Nuevo</span>
          <span className="text-sm">Ahora puedes hacer tu oferta en Dólares.</span>
        </div>
        <div className="flex flex-row w-auto gap-2 p-2 border rounded-md border-slate-200">
          <div className="flex flex-row items-center justify-center w-auto gap-2 p-1 text-xs text-white rounded-md bg-slate-900">
            <span className="px-2 text-xs text-center text-white ">
              Mayor
              <br />
              Oferta
            </span>
            <div className="flex items-center justify-center gap-1 p-2 text-xl text-right border rounded-md bg-emerald-400 bg-opacity-5 border-emerald-500 text-emerald-500">
              <span className="text-xs">$</span>
              <span>12.000</span>
              <span className="text-xs">UY</span>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center w-auto gap-2">
            <Input type="number" placeholder="0.00" name="terms" id="terms" className="w-[100px] h-4 py-6" />

            <Button text="Hacer Ofrerta" className="btn-md ghost bling-btn-primary text-nowrap" />
          </div>
        </div>
        <div className="gap-2 py-4 badge">
          <Icon name="Bell"   color="#ffcc00" size={25} />
          <span>Te notificaremos si alguien supera tu oferta.</span>
        </div>
      </div>
      <div className="flex items-center self-center justify-center w-full h-auto gap-4 py-4 border rounded-md bg-slate-900 border-slate-200">
        <Icon name="ShieldCheck" color="#34d399" size={50}   />
        <div className="flex flex-col w-auto h-auto gap-1">
          <p className="text-xs font-bold text-emerald-400">Alquila este espacio con seguridad y garantía. </p>
          <span className="text-xs text-white ">
            No te cobraremos nada hasta que
            <br /> aprobemos tu publicación.{' '}
            <Tooltip
              position={'top'}
              className={'text-white w-[250px] p-2'}
              content={'Tienes hasta el sabado de cada semana para alquilar el espacio. En caso de tener este espacio reservado, no podras alquilarlo y no se te cobrará absolutamente nada.'}
            >
              <Icon name="InfoCircle" color="#94a3b8" size={15}   />
            </Tooltip>
          </span>{' '}
        </div>{' '}
      </div>
    </div>
  );
};

export { AdvertisementsRent };
