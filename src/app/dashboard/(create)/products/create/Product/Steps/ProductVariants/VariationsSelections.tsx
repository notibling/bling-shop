import React, { useMemo } from 'react';
import { FaTrash, FaEllipsisV, FaChevronDown } from 'react-icons/fa';

import { Button, Item } from '@/components/atoms';
import { IAttribute } from '@/entities/Attribute';
import classNames from 'classnames';
import { Dropdown, DropdownItem } from '@/components/organisms';

interface ISelection {
  attributeId?: number;
  attributeValue?: string;
}

interface VariationsSelectionsProps {
  attributes: IAttribute[];
  attributeId: number;
  attributeValue: string;
  control: boolean;
  removeVariantAttribute: () => void;
  onChange: (selection: ISelection) => void;
}

const VariationsSelections: React.FC<VariationsSelectionsProps> = ({ attributes, attributeId, attributeValue, removeVariantAttribute, onChange, control }) => {
  const currentAttribute = useMemo(() => {
    return attributes.find((attr) => attr.id === attributeId);
  }, [attributeId, attributes]);
  const handleSelectAttribute = (attributeId: number) => {
    onChange({
      attributeId: Number(attributeId),
    });
  };

  console.log('heeeei?', attributes);
  const handleSelectAttributeValue = (attributeValue: string) => {
    onChange({
      attributeValue,
    });
  };

  return (
    <div className="w-full lg:w-[200px] h-auto rounded-md text-sm items-center text-center justify-center text-slate-700 flex flex-row order-2 lg:order-1">
      <div className="flex flex-row w-full h-full gap-1 m-auto">
        <div className="w-full h-[80px] flex border-box flex-col gap-1">
          <Dropdown
            bodyClassName={classNames('shadow-xl', 'min-w-[100px]')}
            trigger={<Button icon={<FaChevronDown />} text={currentAttribute?.name ?? 'Variante'} className="flex-row-reverse justify-between w-full h-10 rounded-md btn-sm bling-btn-secondary dark:bling-btn-primary-dark" />}
            position="bottom"
          >
            <DropdownItem className={classNames('min-w-[200px] flex flex-col shadow-md rounded-md ')}>
              {attributes.map((attribute, index) => (
                <Item key={`attribute-${index}-${attribute.id}`} onClick={() => handleSelectAttribute(attribute.id)} content="text" text={attribute.name} />
              ))}
            </DropdownItem>
          </Dropdown>

          <Dropdown
            bodyClassName={classNames('shadow-xl', 'min-w-[100px]')}
            trigger={<Button icon={<FaChevronDown />} text={attributeValue || 'Valor de Variante'} className="flex-row-reverse justify-between w-full h-10 rounded-md btn-sm bling-btn-secondary dark:bling-btn-primary-dark " />}
            position="bottom"
          >
            <DropdownItem className={classNames('min-w-[200px]  flex flex-col shadow-md rounded-md ')}>
              {currentAttribute?.values.map((attribute, index) => (
                <Item key={`attribute-${index}-${attribute.id}`} onClick={() => handleSelectAttributeValue(attribute.value)} content="text" text={attribute.value} />
              ))}
            </DropdownItem>
          </Dropdown>
        </div>
        <div className="!w-[50px] m-auto flex gap-1 flex-col h-full">
          <Button icon={<FaTrash />} className={classNames(' w-full h-[40px] bling-btn-secondary dark:bling-dark-bg-3 clickable  flex flex-row p-0 text-md items-center justify-center rounded-md', {})} onClick={() => removeVariantAttribute()} />
          <Button icon={<FaEllipsisV />} className=" w-full h-[40px] bling-btn-secondary dark:bling-dark-bg-3 clickable  flex flex-row p-0 text-md items-center justify-center rounded-md" />
        </div>
      </div>
    </div>
  );
};
export { type ISelection };
export { VariationsSelections };
