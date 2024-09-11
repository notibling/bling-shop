"use client";
import React from "react";
import classNames from "classnames";
import { TableRow } from "./TableRow";
import { TableRowHeader } from "./TableRowHeader";
import { TableProps } from "./types";

const Table: React.FC<TableProps> = ({
  headers = [],
  rows,
  summaryRows = [],
  className,
  rowClassName,
  rowHeaderClassName,
}) => {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <table className={classNames('table', 'bling-light-text','dark:bling-dark-text', 'overflow-x-auto',  'w-full','text-xs', 'mt-4', className)}>
      <thead >
        <TableRowHeader
          headers={headers}
          depth={0}
          setCollapsed={setCollapsed}
          rowHeaderClassName={rowHeaderClassName || ''}
        />
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <React.Fragment key={index}>
            <TableRow
              rowClassName={rowClassName || '' }
              rowHeaderClassName={rowHeaderClassName || ''}
              headers={headers}
              row={row}
              depth={0}
            />
          </React.Fragment>
        ))}
        {summaryRows.map((row, index) => (
          <React.Fragment key={`summary-${index}`}>
            <TableRow
              rowClassName={rowClassName}
              rowHeaderClassName={rowHeaderClassName || ''}
              headers={headers}
              row={row}
              depth={0}
            />
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}

export { Table };
