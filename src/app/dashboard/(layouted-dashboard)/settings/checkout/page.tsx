'use client'
import React from 'react';
import classNames from 'classnames';
import { FaMoneyCheckDollar } from 'react-icons/fa6';
import { FaCheck, FaDollarSign, FaFileInvoice, FaMoneyBill, FaMoneyCheck, FaPercent, FaReceipt, FaTrash, FaTruck } from 'react-icons/fa';

import { Input, Title, Button } from '@/components/atoms';
import { CardHorizontal } from '@/components/molecules';


import { useBreakpoint } from '@/hooks/useBreakpoint';
interface ViewCheckoutDashboardProps { }
const ViewCheckoutDashboard: React.FC<ViewCheckoutDashboardProps> = ({ }) => {
  const { conditionalValue } = useBreakpoint();
  return (
    <>
      <div className={classNames('w-full', 'h-auto', 'rounded-sm', 'flex', 'flex-col', 'flex-grow', 'justify-between', 'items-center')}>
        <div className={classNames('w-full', 'h-auto', 'p-2')}>
          <div className={classNames('w-full', 'h-auto', 'rounded-sm', 'flex', 'lg:flex-nowrap', 'flex-wrap', 'gap-2', 'flex-grow', 'justify-between', 'items-center', 'py-2')}>
            <div className={classNames('w-full', 'flex-wrap', 'lg:flex-nowrap', 'gap-2', 'flex')}>
              <Title icon={<FaFileInvoice />} iconColor="text-slate-700" titleClassName="text-slate-700" descriptionClassName="text-xs text-nowrap text-slate-700" title="Checkout" description="Personaliza tus espacios" />
            </div>

          </div>
          {/* //* INICIO > VIEW CONFIGURACION PERFIL  */}
          <div className="w-full h-auto min-h-[60dvh] px-4 overflow-x-auto  bg-slate-100 flex-wrap flex rounded-md flex-col lg:flex-row flex-grow py-5 justify-start items-start">
            <div className="w-full lg:w-3/5  h-auto flex p-2 gap-2 flex-col  ">
              <CardHorizontal
                shareButton={false}
                title="Kit de semillas orgánicas de hierbas aromáticas"
                description="Kit de semillas orgánicas de hierbas aromáticas"
                price="399"
                badge="UY $"
                imageClassName='!h-[100px]'
                image="true"
                imageAlt="product"
                freeShipping={true}
                quantity={true}
                actions={true}
                deleteButton={true}
              />
              <CardHorizontal
                shareButton={false}
                title="Kit de semillas orgánicas de hierbas aromáticas"
                description="Kit de semillas orgánicas de hierbas aromáticas"
                price="399"
                badge="UY $"
                imageClassName='!h-[100px]'
                image="true"
                imageAlt="product"
                freeShipping={true}
                quantity={true}
                actions={true}
                deleteButton={true}
              />
              <CardHorizontal
                shareButton={false}
                title="Kit de semillas orgánicas de hierbas aromáticas"
                description="Kit de semillas orgánicas de hierbas aromáticas"
                price="399"
                badge="UY $"
                imageClassName='!h-[100px]'
                image="true"
                imageAlt="product"
                freeShipping={true}
                quantity={true}
                actions={true}
                deleteButton={true}
              />
              <CardHorizontal
                shareButton={false}
                title="Kit de semillas orgánicas de hierbas aromáticas"
                description="Kit de semillas orgánicas de hierbas aromáticas"
                price="399"
                badge="UY $"
                imageClassName='!h-[100px]'
                image="true"
                imageAlt="product"
                freeShipping={true}
                quantity={true}
                actions={true}
                deleteButton={true}
              />
              <CardHorizontal
                shareButton={false}
                title="Kit de semillas orgánicas de hierbas aromáticas"
                description="Kit de semillas orgánicas de hierbas aromáticas"
                price="399"
                badge="UY $"
                imageClassName='!h-[100px]'
                image="true"
                imageAlt="product"
                freeShipping={true}
                quantity={true}
                actions={true}
                deleteButton={true}
              />
              <CardHorizontal
                shareButton={false}
                title="Kit de semillas orgánicas de hierbas aromáticas"
                description="Kit de semillas orgánicas de hierbas aromáticas"
                price="399"
                badge="UY $"
                imageClassName='!h-[100px]'
                image="true"
                imageAlt="product"
                freeShipping={true}
                quantity={true}
                actions={true}
                deleteButton={true}
              />
              <CardHorizontal
                shareButton={false}
                title="Kit de semillas orgánicas de hierbas aromáticas"
                description="Kit de semillas orgánicas de hierbas aromáticas"
                price="399"
                badge="UY $"
                imageClassName='!h-[100px]'
                image="true"
                imageAlt="product"
                freeShipping={true}
                quantity={true}
                actions={true}
                deleteButton={true}
              />


            </div>

            <div className="w-full lg:w-2/5  h-auto flex gap-1 flex-col  p-2">
              <div className="w-full bg-white rounded-md h-auto p-2 flex flex-col gap-1  ">
                <Title level="h4" icon={<FaReceipt />} iconColor="text-slate-700" titleClassName="text-slate-700" title="Orden de Compra" />

                <div className="w-full h-auto p-1 rounded-md text-xs bg-white text-slate-700 justify-between items-center flex flex-row gap-2 ">
                  <div className=" flex-row flex flex-nowrap items-center justify-center">
                    <span className="px-3 font-bold text-nowrap">x 1</span>
                    <span className="">Nombre de Producto aaaaa igualito la campera con corderito oasdokasdoaskdoo</span>
                  </div>
                  <div className="flex flex-row items-center justify-center flex-nowrap gap-2">
                    <span>$0.00</span>
                    <Button className="w-[35px] h-[35px] px-3 py-3 rounded-md bling-btn-secondary">
                      <FaTrash />
                    </Button>
                  </div>
                </div>
                <div className="w-full h-auto p-1 rounded-md text-xs bg-white text-slate-700 justify-between items-center flex flex-row gap-2 ">
                  <div className=" flex-row flex flex-nowrap items-center justify-center">
                    <span className="px-3 font-bold text-nowrap">x 1</span>
                    <span className="">Nombre de Producto</span>
                  </div>
                  <div className="flex flex-row items-center justify-center flex-nowrap gap-2">
                    <span>$0.00</span>
                    <Button className="w-[35px] h-[35px] px-3 py-3 rounded-md bling-btn-secondary">
                      <FaTrash />
                    </Button>
                  </div>
                </div>
                <div className="w-full h-auto p-1 rounded-md text-xs bg-white text-slate-700 justify-between items-center flex flex-row gap-2 ">
                  <div className=" flex-row flex flex-nowrap items-center justify-center">
                    <span className="px-3 font-bold text-nowrap">x 1</span>
                    <span className="">Nombre de Producto</span>
                  </div>
                  <div className="flex flex-row items-center justify-center flex-nowrap gap-2">
                    <span>$0.00</span>
                    <Button className="w-[35px] h-[35px] px-3 py-3 rounded-md bling-btn-secondary">
                      <FaTrash />
                    </Button>
                  </div>
                </div>

                <div className="border-b border-slate-300 my-1"></div>

                <div className="w-full h-auto p-1 rounded-md text-xs bg-white text-slate-700 justify-between items-center flex flex-row gap-2 ">
                  <div className=" flex-row flex flex-nowrap items-center justify-center">
                    <span className="px-3 font-bold">
                      <FaTruck />
                    </span>
                    <span className="">Costo por Envío</span>
                  </div>
                  <div className="flex flex-row items-center justify-center flex-nowrap gap-2">
                    <span>$0.00</span>
                    <Button className="w-[35px] h-[35px] px-3 py-3 rounded-md bling-btn-secondary">
                      <FaCheck />
                    </Button>
                  </div>
                </div>
                <div className="w-full h-auto p-1 rounded-md text-xs bg-white text-slate-700 justify-between items-center flex flex-row gap-2 ">
                  <div className=" flex-row flex flex-nowrap items-center justify-center">
                    <span className="px-3 font-bold">
                      <FaPercent />
                    </span>
                    <span className="">Descuento de Promoción</span>
                  </div>
                  <div className="flex flex-row items-center justify-center flex-nowrap gap-2">
                    <span>-$40.00</span>
                    <Button className="w-[35px] h-[35px] px-3 py-3 rounded-md bling-btn-secondary">
                      <FaCheck />
                    </Button>
                  </div>
                </div>
                <div className="border-b border-slate-300 my-1"></div>

                <div className="w-full h-auto p-1 rounded-md text-xs bg-white text-slate-700 justify-between items-center flex flex-row gap-2 ">
                  <div className=" flex-row flex flex-nowrap items-center justify-center">
                    <span className="px-3 font-bold">
                      <FaMoneyCheck />
                    </span>
                    <span className="">Total (Sin I.V.A.)</span>
                  </div>
                  <div className="flex flex-row items-center justify-center flex-nowrap gap-2">
                    <span>$0.00</span>
                    <Button className="w-[35px] h-[35px] px-3 py-3 rounded-md bling-btn-secondary">
                      <FaCheck />
                    </Button>
                  </div>
                </div>
                <div className="w-full h-auto p-1 rounded-md text-xs bg-white text-slate-700 justify-between items-center flex flex-row gap-2 ">
                  <div className=" flex-row flex flex-nowrap items-center justify-center">
                    <span className="px-3 font-bold">
                      <FaMoneyCheckDollar />
                    </span>
                    <span className="">I.V.A.</span>
                  </div>
                  <div className="flex flex-row items-center justify-center flex-nowrap gap-2">
                    <span>$0.00</span>
                    <Button className="w-[35px] h-[35px] px-3 py-3 rounded-md bling-btn-secondary">
                      <FaCheck />
                    </Button>
                  </div>
                </div>
                <div className="my-1 flex-row flex flex-nowrap bg-green-400 font-bold text-green-600 bg-opacity-35 rounded-md border border-green-500  py-3 text-xs items-center gap-2 justify-center">
                  <span className="font-bold">
                    <FaMoneyBill />
                  </span>
                  <span className="">Ahorrás en esta compra</span>
                  <div className="w-auto h-auto flex flex-row items-center items-center justify-center flex-nowrap gap-2">
                    <span>-$59.00</span>
                    <FaCheck className="text-1xl" />
                  </div>
                </div>

                <div className="my-1 w-full h-auto rounded-md text-xs  text-slate-700 justify-between items-center flex flex-row gap-2 ">
                  <div className="w-2/3 flex flex-row justify-center items-center">
                    <Input className=" text-sm !outline-none" placeholder="Código Cupón" />
                  </div>
                  <div className="w-1/3 flex flex-row justify-center items-center">
                    <Button className="border border-slate-200 bling-btn-secondary !outline-none py-6 w-full text-sm ">Aplicar</Button>
                  </div>
                </div>
                <div className="my-1 w-full h-auto p-1 py-2 rounded-md text-xs bg-slate-900 text-white border-slate-700 border font-bold  justify-between items-center flex flex-row gap-2 ">
                  <div className=" flex-row flex flex-nowrap items-center justify-center">
                    <span className="px-3 font-bold">
                      <FaDollarSign />
                    </span>
                    <div className="flex flex-row items-center text-nowrap justify-center gap-2">
                      <span>Total</span>
                      <span className="text-[10px] text-slate-400">(Con I.V.A.)</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center mr-2 flex-nowrap gap-2">
                    <span className="badge text-xs p-3 font-bold">$299.99</span>
                  </div>
                </div>

                <div className=" w-full h-auto rounded-md text-xs  text-white  border font-bold  justify-between items-center flex flex-row  ">
                  <Button className="bling-btn-primary !outline-none py-6 w-full text-sm ">Pagar</Button>
                </div>
              </div>
            </div>
          </div>
          {/* //* FIN > VIEW CONFIGURACION PERFIL */}
        </div>
      </div>
    </>
  );
};

export default ViewCheckoutDashboard;
