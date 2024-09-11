// src/components/TableRow.tsx
'use client';
import React, { useState } from "react";
import classNames from "classnames";
import { Input, Chip, Button, Item } from "@/components/atoms";
import { ITableRowProps, CellProps } from "./types";
import { Dropdown, DropdownItem } from "@/components/organisms";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";

const TableRow: React.FC<ITableRowProps> = ({
  headers,
  row,
  depth = 0,
  rowClassName,
  rowHeaderClassName
}) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const children = row.children ?? [];

  const renderCell = (cell: CellProps, index: number) => {
    switch (cell.type) {
      case 'input':
        return <Input key={index} {...cell.props} />;
      case 'dropdown':
        return (
          <Dropdown
            key={index}
            bodyClassName={classNames('shadow-xl', 'min-w-[100px]')}
            trigger={
              <Button
                icon={<FaChevronDown />}
                text={cell.props.value as string}  // Asegurando que `cell.props.value` sea de tipo string
                className="flex-row-reverse justify-between w-full h-10 rounded-md btn-sm bling-btn-secondary dark:bling-btn-primary-dark"
              />
            }
            position="bottom"
          >
            {cell.props.options.map((option, i) => (
              <DropdownItem
                key={i}
                className={classNames('min-w-[200px] flex flex-col shadow-md rounded-md')}
                onClick={() => cell.props.onChange({ target: { value: option } } as React.ChangeEvent<HTMLSelectElement>)}
              >
                <Item content="text" text={option} />
              </DropdownItem>
            ))}
          </Dropdown>
        );
      case 'text':
        return <span key={index}>{cell.props.text}</span>;
      case 'user':
        return (
          <div key={index} className="w-auto h-auto flex flex-row gap-2">
            {cell.props.image && (
              <Image
                src={cell.props.image}
                width={50}
                height={50}
                unoptimized
                className="rounded-full"
                alt={cell.props.name?.toString() || 'user'}
              />
            )}
            {cell.props.name && <span>{cell.props.name}</span>}
            {cell.props.surname && <span>{cell.props.surname}</span>}
          </div>
        );
      case 'chip':
        return <Chip key={index} status={cell.props.status} {...cell.props} />;
      default:
        return null;
    }
  };

  return (
    <React.Fragment>
      <tr
        onClick={() => setCollapsed(prev => !prev)}
        className={classNames('cursor-pointer', 'dark:!border-bling-dark-border', 'border-bling-light-border', 'bling-light', 'even:bling-light-bg-3', 'dark:even:bling-dark-bg-3', 'text-nowrap', 'text-xs', 'dark:bling-dark', rowClassName)}
      >
        {row.data.map((cell, index) => (
          <td key={index} className={classNames()}>
            {renderCell(cell, index)}
          </td>
        ))}
      </tr>
      {collapsed && children.length > 0 && (
        <>
          {children.map((child, index) => (
            <TableRow
              key={index}
              rowClassName={rowClassName}
              rowHeaderClassName={rowHeaderClassName}
              headers={headers}
              row={child}
              depth={depth + 1}
            />
          ))}
        </>
      )}
    </React.Fragment>
  );
}

export { TableRow };
