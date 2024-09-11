// src/components/BaseTableRow.tsx
'use client';
import React, { useState } from 'react';
import classNames from 'classnames';
import { IBaseTableRowProps, CellProps } from './types';

const BaseTableRow: React.FC<IBaseTableRowProps> = ({ headers, row, depth = 0, rowClassName, rowHeaderClassName }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const children = row.children ?? [];

  const renderCell = (cell: CellProps, index: number) => {
    if (cell) return cell;

    return <></>;
  };

  return (
    <React.Fragment>
      <tr
        style={depth > 0 ? { borderLeft: `${depth*10}px inset solid blue` } : {}}
        onClick={() => setCollapsed((prev) => !prev)}
        className={classNames(
          'cursor-pointer',
          'table-fixed',
          'bling-light',
          'dark:border-bling-dark-bg-4',
          'border-bling-light-bg-4',
          'even:bling-light-bg-2',
          'dark:even:bling-dark-bg-1',
          'text-nowrap',
          'text-xs',
          'dark:bling-dark-bg-2',
          {'shadow-md': collapsed},

          rowClassName
        )}
      >
        {row.data.map((cell, index) => (
          <td key={index} className={classNames({ 'p-4': depth === 0, 'p-2': depth > 0 })}>
            {renderCell(cell, index)}
          </td>
        ))}
      </tr>
      {collapsed && children.length > 0 && (
        <>
          {children.map((child, index) => (
            <BaseTableRow key={index} rowClassName={rowClassName} rowHeaderClassName={rowHeaderClassName} headers={headers} row={child} depth={depth + 1} />
          ))}
        </>
      )}
    </React.Fragment>
  );
};

export { BaseTableRow };
