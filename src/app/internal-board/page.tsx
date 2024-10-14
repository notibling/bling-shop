'use client';
import React from 'react';
import classNames from 'classnames';
import { FaArrowUpShortWide, FaMoneyBillTrendUp } from 'react-icons/fa6';
import * as metricsOperations from '@/contexts/GlobalState/metrics/operations';
import { DropdownItem, Dropdown, Table } from '@/components/organisms';
import { Title, Button, Item, Icon, Section } from '@/components/atoms';
import { usePromiseState } from '@/hooks';
import { CellProps } from '@/components/organisms/Table/types';

export default function InternalBoardHome() {
  const { result } = usePromiseState(() => metricsOperations.getGeneralMetrics(), []);

  const { sales, account } = result ?? {};

  const convertToCellProps = (value: number): CellProps => ({
    type: 'text',
    props: { text: value.toString() }
  });

  return (
    <Section classNameContainer='flex !flex-col !p-4'>
      <div className='flex flex-row items-center justify-between w-full h-auto'>
        <Title level='h4' title='Estadísticas Generales' />
        <div className='flex flex-row flex-wrap items-center justify-end gap-2 w-fit '>
          <Dropdown
            disabled
            bodyClassName={classNames('shadow-xl', 'border', 'min-w-[100px]', 'border-slate-100')}
            trigger={<Button icon={<FaArrowUpShortWide />} text='Filtros' className='flex gap-2 px-4 py-5 border rounded-md bling-btn-secondary border-slate-200 hover:border-transparent ' />}
            position='bottom-right'
          >
            <DropdownItem className={classNames('w-[200px] flex flex-col shadow-md rounded-md')}>
              <Item content='text' text='Hoy' />
              <Item content='text' text='Esta semana' />
              <Item content='text' text='Este Mes' />
              <Item content='text' text='Este año' />
              <Item content='text' text='Más Recientes' />
              <Item content='text' text='Alfabetico' />
              <Item content='text' text='Orden Inverso' />
            </DropdownItem>
          </Dropdown>
        </div>
      </div>

      <div className='flex flex-col w-full h-auto gap-2'>
        <div>
          <Title className={classNames('mb-0')} level='h5' title='Personas registradas' icon={<Icon name='User' color='#000000' size={25} />} />
          <Table
            headers={['Hoy', 'Esta semana', 'Este mes', 'Este Año']}
            rows={[
              { data: [convertToCellProps(account?.today ?? 0), convertToCellProps(account?.thisWeek ?? 0), convertToCellProps(account?.thisMonth ?? 0), convertToCellProps(account?.thisYear ?? 0)] }
            ]}
          />
        </div>
        <div>
          <Title className={classNames('mb-0')} level='h5' title='Transacciones realizadas' icon={<FaMoneyBillTrendUp />} />
          <Table
            headers={['Hoy', 'Esta semana', 'Este mes', 'Este Año']}
            rows={[
              { data: [convertToCellProps(sales?.today ?? 0), convertToCellProps(sales?.thisWeek ?? 0), convertToCellProps(sales?.thisMonth ?? 0), convertToCellProps(sales?.thisYear ?? 0)] }
            ]}
          />
        </div>
      </div>
    </Section>
  );
}
