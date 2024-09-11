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
export type CellProps =  React.ReactNode;
// Interface para las filas de la tabla
export interface IBaseTableRow {
  data: CellProps[];
  children?: IBaseTableRow[];
  className?: string | string[];
}

export interface BaseTableProps {
  headers: (string | React.ReactNode)[];
  rows: IBaseTableRow[];
  summaryRows?: IBaseTableRow[];
  className?: string | string[];
  rowClassName?: string;
  rowHeaderClassName?: string;
}

export interface IBaseTableRowProps {
  headers: (string | React.ReactNode)[];
  row: IBaseTableRow;
  depth?: number;
  rowClassName?: string;
  className?: string | string[];
  rowHeaderClassName?: string;
}
