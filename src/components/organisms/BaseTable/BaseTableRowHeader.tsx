import React from 'react';
import classNames from 'classnames';

interface IBaseTableRowHeaderProps {
  headers: (string | React.ReactNode)[];
  depth: number;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  rowHeaderClassName?: string;
}

const BaseTableRowHeader: React.FC<IBaseTableRowHeaderProps> = ({ headers = [], depth, setCollapsed, rowHeaderClassName = '' }) => {
  return (
    <tr className={classNames('bling-light-text', 'dark:border-bling-dark-bg-5',
    'border-bling-light-bg-4','dark:bling-dark-text','dark:bling-dark-bg-4')}>
      {headers.map((header, index) => (
        <th key={`header-${index}`} className={classNames({ '!text-xs': depth > 0 }, 'p-4', rowHeaderClassName)}>
          {typeof header === 'string' ? <span dangerouslySetInnerHTML={{ __html: header }} /> : header}
        </th>
      ))}
    </tr>
  );
};

export { BaseTableRowHeader };
