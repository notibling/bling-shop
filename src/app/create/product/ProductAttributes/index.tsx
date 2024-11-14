import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import * as productOperations from '@/contexts/GlobalState/product/operations';
import { Button, Checkbox, Icon, Title, Tooltip } from '@/components/atoms';
import { useStepper } from '@/components/organisms/Stepper';
import { usePromiseState } from '@/hooks';
import { ClipboardList, QuestionCircle, TrashBin2 } from '@/icons/tsx';

import { ICreateProductStepperState } from '../../../types';

interface ProductAttributeProps { }

interface ITmpAttribute {
  attributeId?: number;
  attributeValue?: string;
  attributeName?: string;
}

const ProductAttribute: React.FC<ProductAttributeProps> = () => {
  const stepper = useStepper<ICreateProductStepperState>();

  const [attributes, setAttributes] = useState<ITmpAttribute[]>([]);
  const [condition, setCondition] = useState<'new' | 'used' | 'refurbished' | null>(null);

  const { result: availableAttributesResponse } = usePromiseState(() =>
    productOperations.fetchAttributes('product_variant')
  );

  const availableAttributes = availableAttributesResponse?.attributes ?? [];

  const addAttribute = () => {
    setAttributes((prevAttributes) => [
      ...prevAttributes,
      {}
    ]);
  };

  const handleAttributeChange = (index: number, value: Partial<ITmpAttribute>) => {
    setAttributes((prev) => {
      const _attributes = _.cloneDeep(prev);
      const _attribute = _attributes[index] ?? {};
      const currentAttribute = _.find(availableAttributes, ['id', _attribute.attributeId]);
      _attributes[index] = { ...value, attributeName: currentAttribute?.name };

      return _attributes;
    });
  };

  const removeAttribute = (index: number) => {
    setAttributes((prev) => prev.filter((_val, i) => i !== index));
  };

  useEffect(() => {
    setAttributes(stepper.state?.attributes ?? []);
    setCondition(stepper.state?.condition ?? 'new');
  }, []);

  useEffect(() => {
    if (attributes.length > 0) {
      stepper.setState((prev) => ({ ...prev, attributes }));
    }
  }, [attributes]);

  useEffect(() => {
    stepper.setState((prev) => ({ ...prev, condition }));
  }, [condition]);

  return (
    <>
      <div className='w-full h-auto p-4 flex items-center justify-center flex-col gap-3'>
        <Title
          icon={<Icon name={ClipboardList} size={20} color='#ffcc00' />}
          title='Atributos de Producto'
          level='p'
          className={'bling-light dark:bling-dark rounded-md '}
          iconClassName='!p-2 !pr-0'
          titleClassName={'pr-3'}
        />
      </div>

      <div className={classNames('w-full', 'lg:w-1/2', 'rounded-brand', 'border', 'bling-light-border', 'dark:bling-dark-border')}>
        <div className={classNames('w-full')}>
          <div className={classNames('grid-cols-8', 'grid', 'bling-light-bg-4', 'dark:bling-dark-bg-5', 'text-slate-100', 'text-center')}>
            <div className={classNames('py-2', 'col-span-2', 'bling-light-text', 'dark:bling-dark-text', 'text-sm', 'px-4')}>Atributo</div>
            <div className={classNames('py-2', 'col-span-5', 'bling-light-text', 'dark:bling-dark-text', 'text-sm', 'px-4')}>Valor</div>
           
          </div>

          <div className='w-full'>
            {attributes.map((attribute, index) => (
              <div key={index} className={classNames('grid', 'grid-cols-9', 'bg-slate-100', 'dark:bling-dark-bg-4', 'bling-light-bg-1')}>
                <div className={classNames('flex', 'flex-row', 'items-center', 'justify-center', 'col-span-3', 'lg:col-span-2', 'py-2', 'text-sm', 'border', 'dark:border-bling-dark-bg-5', 'px-2')}>
                  <select
                    className='py-3 px-4 text-capitalize dark:bling-dark-bg-4 bling-light rounded-md bling-light-bg-1 !outline-none text-sm dark:bling-dark-text w-full'
                    value={attribute.attributeId}
                    onChange={(e) =>
                      handleAttributeChange(index, {
                        attributeId: Number(e.target.value),
                        attributeValue: undefined
                      })}
                  >
                    {availableAttributes?.map((availableAttribute) => (
                      <option key={availableAttribute.id} value={availableAttribute.id}>
                        {availableAttribute.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={classNames('flex', 'flex-row', 'items-center', 'justify-center', 'col-span-5', 'lg:col-span-6', 'px-2', 'border', 'dark:border-bling-dark-bg-5', 'dark:bling-dark-bg-4', 'bling-light-bg-1')}>
                  <input
                    placeholder='Escribe el valor del atributo'
                    type='text'
                    className='py-3 px-4 text-capitalize bling-light-bg-1 dark:bling-dark-bg-4 rounded-md !outline-none text-sm dark:bling-dark-text w-full'
                    value={attribute.attributeValue ?? ''}
                    onChange={(event) => handleAttributeChange(index, {
                      attributeValue: event.target.value
                    })}
                  />
                </div>
                <div className='col-span-1 flex flex-row items-center justify-center border bling-light-border dark:border-bling-dark-bg-5'>
                  <Button icon={<Icon name={TrashBin2} size={20} />} color='red' onClick={() => removeAttribute(index)} className='btn-sm aspect-square border bling-light-border bling-btn-primary dark:bling-btn-primary-dark dark:border-bling-dark-bg-5 rounded-md bling-light dark:bling-dark-bg-3' />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        
        <div className={classNames('w-full grid grid-cols-3')}>
          <div onClick={() => setCondition('new')} className={classNames('dark:border-bling-dark-bg-5 flex gap-2 col-span-1', 'cursor-pointer', 'py-3', 'text-sm', 'border', 'bling-light-border', 'bling-light-bg-3', 'dark:bling-dark-bg-4', 'gap-2', 'bling-light-text', 'dark:bling-dark-text', 'px-4')}>
            <Checkbox className='!bling-light dark:!bling-dark-bg-3' checked={condition === 'new'} onChange={() => setCondition('new')} /><span>Nuevo</span>
          </div>
          <div onClick={() => setCondition('used')} className={classNames('dark:border-bling-dark-bg-5 flex gap-2 col-span-1', 'cursor-pointer', 'py-3', 'text-sm', 'border', 'bling-light-border', 'bling-light-bg-3', 'dark:bling-dark-bg-4', 'gap-2', 'bling-light-text', 'dark:bling-dark-text', 'px-4')}>
            <Checkbox className='!bling-light dark:!bling-dark-bg-3' checked={condition === 'used'} onChange={() => setCondition('used')} /><span>Usado</span>
          </div>
          <div onClick={() => setCondition('refurbished')} className={classNames('dark:border-bling-dark-bg-5 flex gap-2 col-span-1', 'cursor-pointer', 'py-3', 'text-sm', 'border', 'bling-light-border', 'bling-light-bg-3', 'dark:bling-dark-bg-4', 'gap-2', 'bling-light-text', 'dark:bling-dark-text', 'px-4')}>
            <Checkbox className='!bling-light dark:!bling-dark-bg-3' checked={condition === 'refurbished'} onChange={() => setCondition('refurbished')} /><span>Refabricado</span>
          </div>
        </div>


        <table className={classNames('w-full', 'rounded-brand')}>
          <tbody>
            <tr className={classNames('bling-light-bg-3', 'dark:bling-dark-bg-4', 'w-full', 'items-center', 'flex', 'justify-center', 'relative', 'items-center', 'p-3', 'text-slate-100', 'text-center')}>
              <td className={classNames('w-auto', 'items-center', 'flex', 'flex-row', 'items-center', 'justify-center', 'text-slate-100', 'text-center')}>

                <Button text='Añadir Atributo' onClick={addAttribute} className='order-2 w-[200px] btn-md border bling-light-border bling-btn-primary dark:bling-btn-primary-dark dark:border-bling-dark-bg-5' />
                <div className='-translate-y-0 z-20 right-5 absolute'>
                  <Tooltip content='Necesitas mas atributos?' position='top-right' className='min-w-[200px] !z-[999]'>
                    <Button iconClassName='bling-light-text dark:bling-dark-text' icon={<Icon name={QuestionCircle} size={20} />} className=' w-10 h-10 text-nowrap order-2  text-xs  btn-sm border bling-light-border bling-btn-primary dark:bling-btn-primary-dark dark:border-bling-dark-bg-5'/></Tooltip></div>
              </td></tr>
          </tbody>

        </table>


      </div>
    </>
  );
};

export { ProductAttribute };
