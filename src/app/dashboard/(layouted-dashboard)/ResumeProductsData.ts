import { ITableRow } from '@/components/organisms/Table/types';

export const ResumeProductsDataHeaders: string[] = ['Fecha: <br /> dd / mm/ aaaa', 'SKU', 'Cantidad', 'Importe', 'N° Pedido', 'N° Factura', 'Estado'];

export const ResumeProductsDataRows: ITableRow[] = [
  {
    data: [
      { type: 'text', props: { text: '01-12-2024' } },
      { type: 'text', props: { text: 'BLING-123456789' } },
      { type: 'chip', props: { status: 'success', text: '1 Unidad' } },
      { type: 'text', props: { text: '$ 150.00 UY' } },
      { type: 'text', props: { text: 'BP-00000001' } },
      { type: 'text', props: { text: 'BF-00000001' } },
      { type: 'chip', props: { status: 'success', text: 'Pago Exitoso' } },
    ],
    children: [
      {
        data: [
          { type: 'text', props: { text: '01-12-2024' } },
          { type: 'text', props: { text: 'BLING-123456789' } },
          { type: 'chip', props: { status: 'success', text: '1 Unidad' } },
          { type: 'text', props: { text: '$ 150.00 UY' } },
          { type: 'text', props: { text: 'BP-00000001' } },
          { type: 'text', props: { text: 'BF-00000001' } },
          { type: 'chip', props: { status: 'success', text: 'Pago Exitoso' } },
        ],
      },
    ],
  },
  {
    data: [
      { type: 'text', props: { text: '02-12-2024' } },
      { type: 'text', props: { text: 'BLING-987654321' } },
      { type: 'chip', props: { status: 'success', text: '2 Unidades' } },
      { type: 'text', props: { text: '$ 1,200.00 UY' } },
      { type: 'text', props: { text: 'BP-00000002' } },
      { type: 'text', props: { text: 'BF-00000002' } },
      { type: 'chip', props: { status: 'info', text: 'Pago Pendiente' } },
    ],
  },
  {
    data: [
      { type: 'text', props: { text: '03-12-2024' } },
      { type: 'text', props: { text: 'BLING-112233445' } },
      { type: 'chip', props: { status: 'success', text: '1 Unidad' } },
      { type: 'text', props: { text: '$ 3,500.00 UY' } },
      { type: 'text', props: { text: 'BP-00000003' } },
      { type: 'text', props: { text: 'BF-00000003' } },
      { type: 'chip', props: { status: 'error', text: 'Pago Fallido' } },
    ],
  },
  {
    data: [
      { type: 'text', props: { text: '04-12-2024' } },
      { type: 'text', props: { text: 'BLING-223344556' } },
      { type: 'chip', props: { status: 'success', text: '3 Unidades' } },
      { type: 'text', props: { text: '$ 4,500.00 UY' } },
      { type: 'text', props: { text: 'BP-00000004' } },
      { type: 'text', props: { text: 'BF-00000004' } },
      { type: 'chip', props: { status: 'warning', text: 'Pago Parcial 2/6' } },
    ],
  },
  {
    data: [
      { type: 'text', props: { text: '05-12-2024' } },
      { type: 'text', props: { text: 'BLING-334455667' } },
      { type: 'chip', props: { status: 'success', text: '2 Unidades' } },
      { type: 'text', props: { text: '$ 700.00 UY' } },
      { type: 'text', props: { text: 'BP-00000005' } },
      { type: 'text', props: { text: 'BF-00000005' } },
      { type: 'chip', props: { status: 'success', text: 'Pago Exitoso' } },
    ],
  },
];
