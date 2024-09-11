'use client';
import React from 'react';
import classNames from 'classnames';
import { BaseTableRow } from './BaseTableRow';
import { BaseTableRowHeader } from './BaseTableRowHeader';
import { BaseTableRowContainer } from './BaseTableRowContainer';
import { BaseTableProps } from './types';

const BaseTable: React.FC<BaseTableProps> = ({ headers = [], rows, summaryRows = [], className, rowClassName, rowHeaderClassName }) => {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <div className={classNames(
      'max-w-full w-full h-auto rounded-md',
      'overflow-auto', 'overflow-y-visible',
      'box-border', 
    
    )}>
      <table className={classNames(
        'table w-full h-auto box-border text-xs',
        'max-w-full', 'overflow-y-visible',
        'overflow-y-auto',
        className
      )}>
        <thead>
          <BaseTableRowHeader headers={headers} depth={0} setCollapsed={setCollapsed} rowHeaderClassName={rowHeaderClassName || ''} />
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <React.Fragment key={index}>
              <BaseTableRow rowClassName={rowClassName} rowHeaderClassName={rowHeaderClassName || ''} headers={headers} row={row} depth={0} />
            </React.Fragment>
          ))}
          {summaryRows.map((row, index) => (
            <React.Fragment key={`summary-${index}`}>
              <BaseTableRow rowClassName={rowClassName} rowHeaderClassName={rowHeaderClassName || ''} headers={headers} row={row} depth={0} className="table-cell" />
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { BaseTable, BaseTableRowContainer };
