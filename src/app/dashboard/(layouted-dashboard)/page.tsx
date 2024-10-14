'use client';

import { Button, Icon, Item, Section } from '@/components/atoms';
import { Dropdown, TitleSection } from '@/components/organisms';
import { ChecklistMinimalistic, InfoSquare } from '@/icons/tsx';
import { StatCard, StatCardBarChart, StatCardCircular, StatDataCard, StatDataNumberCard } from '@/components/molecules';
import { useGeneralResumeData } from './dataGeneralResume';
import { ProfileListClient } from '@/components/molecules/ProfileListClient';
import { dataProfileListClient, handleChatClick, handleViewClick } from './dataProfileListClient';
import { UruguayMap, WaveChart } from '@/components/molecules/Charts';
import { dataCircularMarketingPerformance, dataCircularReviewsResume, dataCircularSalesByCategory, dataCircularUserAgeDistribution } from './dataCircularReviewsResume';
import { dataBestSellersCardDataResume, salesByChannelData, regionalSalesData, paymentMethodData } from './dataStatDataCardResume';
import { abandonedCartsData, averageOrderValueData, conversionRateData, retentionRateData } from './dataStatDatNumberResume';
import { TableInProgressSales } from '@/components/Views/Dashboard/Sales';
import { TableInProgressShipping } from '@/components/Views/Dashboard/Shipping';
import Calendar from '@/components/molecules/Calendar';
const events = [
  { date: new Date(2024, 7, 15), title: 'Evento 1' },
  { date: new Date(2024, 7, 20), title: 'Evento 2' }
];
const salesData = [
  { name: 'Montevideo', sales: 1570, color: '#4A90E2' }, // Azul
  { name: 'Maldonado', sales: 70, color: '#BD10E0' }, // Morado
  { name: 'Durazno', sales: 2370, color: '#F5A623' }, // Naranja
  { name: 'Canelones', sales: 1200, color: '#50E3C2' }, // Verde Agua
  { name: 'Artigas', sales: 450, color: '#B8E986' } // Verde Claro
];
export default function DashboardPage() {
  const { dataGeneralResume, optionsGeneralResume } = useGeneralResumeData();
  return (
    <>
      <Section Empty={true} className='!flex-col !p-0 !flex !gap-4 !bg-transparent rounded-md '>
        <TitleSection icon={ChecklistMinimalistic} iconSize={30} title='Resumen general' description='Este es el estado general de tu cuenta' className={'dark:!bg-transparent border bling-light-border dark:bling-dark-border'} level='h5'>
          <div className='w-full h-auto flex flex-row items-center justify-end'>
            <Dropdown
              bodyClassName='p-1 '
              trigger={<Button className='w-auto text-nowrap rounded-md btn-sm my-1 mx-2 bling-btn-primary dark:bling-btn-primary-dark' text='Ordenar' />}
            >
              <div className='min-w-[200px] flex flex-col gap-1'>
                <Item content='icon' contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'} icon={<Icon name='ClockCircle' size={20} />} text='Hoy' />
                <Item content='icon' contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'} icon={<Icon name='CalendarMark' size={20} />} text='Esta Semana' />
                <Item content='icon' contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'} icon={<Icon name='CalendarDate' size={20} />} text='Este Mes' />
                <Item content='icon' contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'} icon={<Icon name='CalendarMinimalistic' size={20} />} text='Este Año' />
                <Item content='icon' contentClassName={'bg-transparent dark:hover:!bling-dark-bg-2 hover:bg-white'} icon={<Icon name='CalendarSearch' size={20} />} text='Histórico' />
            
              </div>
            </Dropdown>
          </div>
        </TitleSection>

        <div className='w-full !h-auto  !p-0 !m-0  !items-stretch gap-4  grid  grid-cols-2 lg:grid-cols-4'>
          <div className='col-span-1 bling-light dark:bling-dark-bg-1 border bling-light-border dark:bling-dark-border  shadow-sm bling-light px-5   gap-2 justify-between items-center p-2 rounded-md  flex flex-row'>
            <span className='text-2xl text-right font-JetBrainsMono dark:text-white bling-light-text'>0</span>
            <span className='text-xs text-left dark:text-gray-500  bling-light-text'>Pausados</span>
          </div>
          <div className='col-span-1 bling-light dark:bling-dark-bg-1 border bling-light-border dark:bling-dark-border  shadow-sm bling-light px-5   gap-2 justify-between items-center p-2 rounded-md  flex flex-row'>
            <span className='text-2xl text-right font-JetBrainsMono dark:text-white bling-light-text'>0</span>
            <span className='text-xs text-left dark:text-gray-500  bling-light-text'>Reclamos</span>
          </div>
          <div className='col-span-1 bling-light dark:bling-dark-bg-1 border bling-light-border dark:bling-dark-border  shadow-sm bling-light px-5   gap-2 justify-between items-center p-2 rounded-md  flex flex-row'>
            <span className='text-2xl text-right font-JetBrainsMono dark:text-white bling-light-text'>0</span>
            <span className='text-xs text-left dark:text-gray-500  bling-light-text'>Devoluciones</span>
          </div>
          <div className='col-span-1 bling-light dark:bling-dark-bg-1 border bling-light-border dark:bling-dark-border  shadow-sm bling-light px-5   gap-2 justify-between items-center p-2 rounded-md  flex flex-row'>
            <span className='text-2xl text-right font-JetBrainsMono dark:text-white bling-light-text'>0</span>
            <span className='text-xs text-left dark:text-gray-500  bling-light-text'>Mensajes</span>
          </div>
        </div>

        {/*    <div className="w-full grid-cols-2 lg:grid-cols-4 grid gap-4">
        <div className="col-span-2 bling-light dark:bling-dark-bg-1">
        <UruguayMap salesData={salesData} />
        </div>
        <div className="col-span-2 bling-light dark:bling-dark-bg-1">
        <Calendar
  initialYear={2024}
  initialMonth={7} // Agosto
  events={events}
  onDateRangeSelect={(startDate, endDate) => {
    console.log('Rango de fechas seleccionado:', startDate, endDate);
  }}
/>
        </div>
        </div>*/} 
        <div className='w-full grid-cols-2 lg:grid-cols-4 grid gap-4'>
          <StatCard
            className='col-span-1 bling-light dark:bling-dark-bg-1'
            title='Ingresos totales'
            icon={<Icon frozen={false} name={InfoSquare} color='text-white' className={'  self-center dark:fill-bling-dark-text fill-bling-light-bg-5'} size={20} />}
            value='$42,548.95'
            percentageChange='+35,3% respecto al año pasado'
          />
          <StatCard
            className='col-span-1 bling-light dark:bling-dark-bg-1'
            title='Ingresos este mes'
            icon={<Icon frozen={false} name={InfoSquare} color='text-white' className={'  self-center dark:fill-bling-dark-text fill-bling-light-bg-5'} size={20} />}
            value='$32,248.13'
            percentageChange='+35,3% respecto al mes pasado'
          />
          <StatCard
            className='col-span-1 bling-light dark:bling-dark-bg-1'
            title='Ingresos esta semana'
            icon={<Icon frozen={false} name={InfoSquare} color='text-white' className={'  self-center dark:fill-bling-dark-text fill-bling-light-bg-5'} size={20} />}
            value='$22,138.34'
            percentageChange='+35,3% respecto a la semana pasada'
          />
          <StatCard
            className='col-span-1 bling-light dark:bling-dark-bg-1'
            title='Ingresos hoy'
            icon={<Icon frozen={false} name={InfoSquare} color='text-white' className={'  self-center dark:fill-bling-dark-text fill-bling-light-bg-5'} size={20} />}
            value='$2,356.32'
            percentageChange='+35,3% respecto a ayer'
          />
        </div>

        <div className='w-full grid-cols-2 lg:grid-cols-4 grid gap-4 items-stretch'>
          <StatCardBarChart
            className='col-span-2 bling-light dark:bling-dark-bg-1 max-h-[360px]'
            title='Ingresos mensuales'
            icon={<Icon frozen={false} name={InfoSquare} color='text-white' className={'self-center dark:fill-bling-dark-text fill-bling-light-bg-5'} size={20} />}
            data={dataGeneralResume}
            options={optionsGeneralResume}
          />

          <ProfileListClient
            title='Ventas Recientes'
            description='350 ventas este mes'
            className='col-span-2 bling-light dark:bling-dark-bg-1 overflow-auto  max-h-[360px] '
            icon={<Icon frozen={false} name={InfoSquare} color='text-white' className={'self-center dark:fill-bling-dark-text fill-bling-light-bg-5'} size={20} />}
            profiles={dataProfileListClient}
            onChatClick={handleChatClick}
            onViewClick={handleViewClick}
          />
        </div>
        <div className='w-full grid-cols-2 lg:grid-cols-4 grid gap-4'>
          <StatDataNumberCard title={conversionRateData.title} description={conversionRateData.description} value={conversionRateData.value} className={'col-span-1 bling-light dark:bling-dark-bg-1'} />
          <StatDataNumberCard title={averageOrderValueData.title} description={averageOrderValueData.description} value={averageOrderValueData.value} className={'col-span-1 bling-light dark:bling-dark-bg-1'} />
          <StatDataNumberCard title={retentionRateData.title} description={retentionRateData.description} value={retentionRateData.value} className={'col-span-1 bling-light dark:bling-dark-bg-1'} />
          <StatDataNumberCard title={abandonedCartsData.title} description={abandonedCartsData.description} value={abandonedCartsData.value} className={'col-span-1 bling-light dark:bling-dark-bg-1'} />
        </div>
        <div className='w-full grid-cols-2 lg:grid-cols-4 grid gap-4'>
          <StatDataCard
            title={dataBestSellersCardDataResume.title}
            value={dataBestSellersCardDataResume.value}
            percentageChange={dataBestSellersCardDataResume.percentageChange}
            sections={dataBestSellersCardDataResume.sections}
            className={`${salesByChannelData.className} col-span-1 bling-light dark:bling-dark-bg-1`}
          />
          <StatDataCard
            title={salesByChannelData.title}
            value={salesByChannelData.value}
            percentageChange={salesByChannelData.percentageChange}
            sections={salesByChannelData.sections}
            className={`${salesByChannelData.className} col-span-1 bling-light dark:bling-dark-bg-1`}
          />
          <StatDataCard
            title={regionalSalesData.title}
            value={regionalSalesData.value}
            percentageChange={regionalSalesData.percentageChange}
            sections={regionalSalesData.sections}
            className={`${regionalSalesData.className} col-span-1 bling-light dark:bling-dark-bg-1`}
          />
          <StatDataCard
            title={paymentMethodData.title}
            value={paymentMethodData.value}
            percentageChange={paymentMethodData.percentageChange}
            sections={paymentMethodData.sections}
            className={`${paymentMethodData.className} col-span-1 bling-light dark:bling-dark-bg-1`}
          />
        </div>

        <div className='w-full grid-cols-2 lg:grid-cols-4 grid gap-4 items-stretch'>
          <StatCardCircular
            className='col-span-1 bling-light dark:bling-dark-bg-1'
            value={100}
            maxValue={100}
            size={150}
            sections={dataCircularReviewsResume}
            title='Reseñas'
            description='Balance total de Reseñas'
            chartTitle='Reseñas'
            chartDescription='Resumen total'
          />

          <StatCardCircular
            className='col-span-1 bling-light dark:bling-dark-bg-1'
            value={100}
            maxValue={100}
            size={150}
            sections={dataCircularSalesByCategory}
            title='Categorías'
            description='Métricas de Ventas por Categoría'
            chartTitle='Categorías'
            chartDescription='Resumen total'
          />
          <StatCardCircular
            className='col-span-1 bling-light dark:bling-dark-bg-1'
            value={100}
            maxValue={100}
            size={150}
            sections={dataCircularUserAgeDistribution}
            title='Rango Etario'
            description='Estadísticas de Usuarios por Edad'
            chartTitle='Rango Etario'
            chartDescription='Resumen total'
          />
    
          <StatCardCircular
            className='col-span-1 bling-light dark:bling-dark-bg-1'
            value={100}
            maxValue={100}
            size={150}
            sections={dataCircularMarketingPerformance}
            title='Presupuestos'
            description='Distribución de Presupuestos'
            chartTitle='Presupuestos'
            chartDescription='Resumen total'
          />
        </div>

        <div className='w-full grid-cols-2 lg:grid-cols-4 grid gap-4 items-stretch'>
          <WaveChart
            className='col-span-2 bling-light dark:bling-dark-bg-1'
            title='Tu tiempo de envío promedio'
            value='8 hr 35 min'
            subtitle='Promedio sobre 12405 envíos'

          />
          <WaveChart
            className='col-span-2 bling-light dark:bling-dark-bg-1'
            title='Tu tiempo de atención promedio'
            value='2 hr 26 min'
            subtitle='Promedio sobre 39248 reseñas'

          />
        </div>
        <div className='w-full grid-cols-2 lg:grid-cols-4 grid gap-4 items-stretch bling-light dark:bling-dark-bg-1 border bling-light-border dark:bling-dark-border rounded-md p-2'>
          <div className=' col-span-4 bling-light dark:bling-dark-bg-1'>
            <div className='w-full flex flex-col justify-center p-2'>
              <span className='w-full bling-light-text dark:text-white font-bold text-xs'>Ventas en progreso</span>
              <span className='w-full bling-light-text dark:text-gray-500 leading-3 text-[10px]'>Resumen de ventas en progreso</span>
            </div>
            <TableInProgressSales />{' '}
          </div>
        </div>
        <div className='w-full grid-cols-2 lg:grid-cols-4 grid gap-4 items-stretch bling-light dark:bling-dark-bg-1 border bling-light-border dark:bling-dark-border rounded-md p-2'>
          <div className=' col-span-4 bling-light dark:bling-dark-bg-1'>
            {' '}
            <div className='w-full flex flex-col justify-center p-2'>
              <span className='w-full bling-light-text dark:text-white font-bold text-xs'>Envíos en progreso</span>
              <span className='w-full bling-light-text dark:text-gray-500 leading-3 text-[10px]'>Resumen de envíos en camino</span>
            </div>
            <TableInProgressShipping />{' '}
          </div>
        </div>
    
      
      </Section>
    </>
  );
}
