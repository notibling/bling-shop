"use client";
import React from "react";
import classNames from "classnames";

import { TableProps, } from "@/components/organisms/Table/types";
import { Table } from "@/components/organisms/Table";
import * as invoiceTypes from "./InvoiceTypes";
import { Logo } from "@/components/atoms";

import './styles.css';

interface InvoiceProps {
  customer: invoiceTypes.CustomerInfo;
  company: invoiceTypes.CompanyInfo;
  invoice: invoiceTypes.InvoiceInfo;
  tableData: TableProps;
  className?: string;
}

const Invoice: React.FC<InvoiceProps> = ({
  customer,
  company,
  invoice,
  tableData,
  className,
}) => {
  return (
    <div className={classNames("invoice-container  border border-bling-light-border dark:border-bling-dark-border rounded-md", className)}>
      <div className="w-full h-auto flex-row flex items-center justify-between gap-1 my-5">
      
        <Logo  className={classNames('w-20')} />
         <div className="text-right text-xl text-bling-light-text dark:text-bling-dark-text">Factura de compra</div></div>
      <header className="grid grid-cols-2  gap-2 whitespace-nowrap my-5">
        <div className="col-span-1 py-1">
          <h1 className="font-bold text-bling-light-text dark:bling-dark-text" >{company.name}</h1>
          <p className="text-xs truncate overflow-ellipsis ">{company.address}</p>
          <p className="text-xs truncate overflow-ellipsis ">{company.phone}</p>
          <p className="text-xs truncate overflow-ellipsis ">{company.email}</p>
        </div>
        <div className="col-span-1 py-1">
          <h2 className="font-bold text-bling-light-text dark:bling-dark-text" >Factura #{invoice.number}</h2>
          <p className="text-xs truncate overflow-ellipsis ">Fecha: {invoice.date}</p>
          <p className="text-xs truncate overflow-ellipsis ">Plazo de Garantía: {invoice.warrantyPeriod}</p>
          <p className="text-xs truncate overflow-ellipsis ">Método de Pago: {invoice.paymentMethod}</p>
        </div>
      </header>
      <section className="grid grid-cols-2 gap-2 whitespace-nowrap my-5">
        <div className="col-span-1 py-1">
          <h3 className="font-bold text-bling-light-text dark:bling-dark-text" >Facturar a:</h3>
          <p className="text-xs truncate overflow-ellipsis ">{customer.name}</p>
          <p className="text-xs truncate overflow-ellipsis ">ID Cliente: {customer.id}</p>
          <p className="text-xs truncate overflow-ellipsis ">{customer.billingAddress}</p>
        </div>
        <div className="col-span-1 py-1">
          <h3 className="font-bold text-bling-light-text dark:bling-dark-text" >Enviar a:</h3>
          <p className="text-xs truncate overflow-ellipsis ">{customer.name}</p>
          <p className="text-xs truncate overflow-ellipsis ">{customer.shippingAddress}</p>
        </div>
      </section>
      <section className="invoice-table">
        <Table {...tableData} />
      </section>
      <footer className="invoice-footer text-3xl text-bling-light-text dark:bling-dark-text">
        <p>Gracias por su compra.</p>
      </footer>
    </div>
  );
}

export { Invoice };
