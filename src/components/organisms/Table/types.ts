import React from "react";

// Definición de tipos de celdas
export type CellType = 'input' | 'dropdown' | 'text' | 'statusBadge' | 'user';

// Interfaces para las propiedades de cada tipo de componente
export interface IInputProps {
  type: 'text' | 'number' | 'file';
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IDropdownProps {
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface ITextProps {
  text: string;
}

export interface IChipProps {
  status?: 'success' | 'inactive' | 'disabled' | 'warning' | 'info' | 'neutro' | 'error' | string | string[]| number | undefined;
  text?: string;
}

// Unión de todos los tipos de celdas
export type CellProps = 
  | { type: 'input'; props: IInputProps }
  | { type: 'dropdown'; props: IDropdownProps }
  | { type: 'text'; props: ITextProps }
  | { type: 'chip'; props: { status?: 'success' | 'inactive' | 'disabled' | 'warning' | 'info' | 'error' | 'inherit' | 'neutral' | undefined; text?: string } }
  | { type: 'user'; props: { name?: string | string[]; surname?: string | string[]; image?: string | undefined } }
  | { type: 'number'; props: { name?: string | string[] | number | undefined } }
// Interface para las filas de la tabla
export interface ITableRow {
  data: CellProps[];
  children?: ITableRow[];
  className?: string | string[];
}

export interface TableProps {
  headers: (string | React.ReactNode)[];
  rows: ITableRow[];
  summaryRows?: ITableRow[];
  className?: string | string[];
  rowClassName?: string;
  rowHeaderClassName?: string;
}

export interface ITableRowProps {
  headers: (string | React.ReactNode)[];
  row: ITableRow;
  depth?: number;
  rowClassName?: string;
  className?: string | string[];
  rowHeaderClassName?: string;
}
