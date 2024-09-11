import React from "react";
import classNames from "classnames";
import { TableProps } from "./types";

interface ITableRowHeaderProps {
  headers: (string | React.ReactNode)[];
  depth: number;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  rowHeaderClassName?: string;
}

const TableRowHeader: React.FC<ITableRowHeaderProps> = ({
  headers = [],
  depth,
  setCollapsed,
  rowHeaderClassName = ''
}) => {
  return (
    <tr
      onClick={() => setCollapsed(prev => !prev)}
      className={classNames('cursor-pointer bling-light dark:bling-dark dark:!border-bling-dark-border border-bling-light-border')}
      style={depth > 0 ? {
        transform: `scale(${1 - (depth / 20)})`,
        backgroundColor: `bling-light-bg-${depth + 1})`
      } : {}}
    >
      {headers.map((header, index) => (
        <th
          key={`header-${index}`}
          className={classNames({ '!text-xs': depth > 0 }, rowHeaderClassName)}
        >
          {typeof header === 'string' ? (
            <span dangerouslySetInnerHTML={{ __html: header }} />
          ) : (
            header
          )}
        </th>
      ))}
    </tr>
  );
};

export { TableRowHeader };
