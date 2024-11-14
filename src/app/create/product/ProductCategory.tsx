import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useStepper } from '@/components/organisms/Stepper';

import * as productOperations from '@/contexts/GlobalState/product/operations';
import { usePromiseState } from '@/hooks';
import { INestedCategories } from '@/entities/Product';
import { ICreateProductStepperState } from '../../types'; 
import { Icon, Title } from '@/components/atoms';
import { BookmarkCircle } from '@/icons/tsx';

interface ProductCategoryProps { }

const ProductCategory: React.FC<ProductCategoryProps> = () => {
  const stepper = useStepper<ICreateProductStepperState>();
  const { result } = usePromiseState(() => productOperations.fetchCategories(true));
  const [mainCategory, setMainCategory] = useState<INestedCategories | undefined>();

  // Definir una interfaz para el tipo de resultado esperado
  interface CategoryResult {
    categories: INestedCategories[];
  }
  // Asegurarse de que el resultado no sea undefined antes de hacer la conversión
  const categories = result ? (result as CategoryResult).categories : [];

  function handleChange(field: keyof ICreateProductStepperState, value: any) {
    stepper.setState((prev) => ({ ...prev, [field]: value }));
  }

  function handleSetMainCategory(id: string) {
    setMainCategory(categories.find((category) => category.id === Number(id)));
  }

  useEffect(() => {
    if (!mainCategory && categories.length > 0 && stepper.state?.categories?.[0]) {
      const categoryChildren = categories.flatMap((category) => category.children ?? []);
      const childCategory = categoryChildren.find((category) => category.id === Number(stepper.state?.categories?.[0]));
      const parentCategory = categories.find((category) => category.id === childCategory?.parentId);
      setMainCategory(parentCategory);
    }
  }, [categories, stepper.state, mainCategory]);

  return (
    <>
      {/* //todo PRODUCTOS > Categoría Principal */}.
    
      <div className='w-full h-auto  p-4 flex items-center justify-center flex-col gap-3'>
        <Title icon={<Icon name={BookmarkCircle} size={20} color='#ffcc00' />} title='Categoría Principal' level='p' className={'bling-light dark:bling-dark rounded-md '} iconClassName='!p-2 !pr-0' titleClassName={'pr-3'} />
      </div>
     
      <div className={classNames('w-full', 'lg:w-1/2', 'rounded-brand', 'overflow-hidden', 'border', 'bling-light-border', 'dark:bling-dark-border')}>
        <table className='w-full p-1  rounded-brand overflow-hidden '>
          <tbody className='w-full '>
            <tr className='w-full '>
              <td className='w-full p-3 text-nowrap flex flex-nowrap justify-center items-center gap-2 bling-light-bg-4 dark:bling-dark-bg-5 bling-light-text dark:bling-dark-text'>
                <span>
                  <span className={classNames('w-5', 'h-5', 'text-center', 'flex', 'flex-row', 'font-bold', 'text-xs', 'items-center', 'justify-center', 'bg-blue-500', 'rounded-full', 'text-white')}>1</span>
                </span>
                <span className='font-bold bling-light-text dark:text-white'>Categoría Principal</span>
              </td>
            </tr>
            <tr className='w-full'>
              <td className='w-full py-10 text-nowrap flex flex-nowrap justify-center items-center gap-2 bling-light dark:bling-dark-bg-4 text-white'>


                <select
                  value={mainCategory?.id ?? ''}
                  onChange={(e) => handleSetMainCategory(e.target.value)}
                  className='select select-bordered w-full !outline-none max-w-xs text-slate-700'
                >
                  <option disabled value=''>
                    Categoría Principal
                  </option>

                  {
                    categories.map((category) => (
                      <option value={category.id} key={`category-${category.id}`}>{category.name}</option>
                    ))
                  }
                </select>

              </td></tr>
            <tr className='w-full '>
              <td className='w-full p-3 text-nowrap flex flex-nowrap justify-center items-center gap-2 bling-light-bg-4 dark:bling-dark-bg-5 bling-light-text dark:bling-dark-text'>
                <span>
                  <span className={classNames('w-5', 'h-5', 'text-center', 'flex', 'flex-row', 'font-bold', 'text-xs', 'items-center', 'justify-center', 'bg-blue-500', 'rounded-full', 'text-white')}>2</span>
                </span>
                <span className='font-bold bling-light-text dark:text-white'>Categoría Secundaria</span>
              </td>
            </tr>
            <tr className='w-full'>
              <td className='w-full py-10 text-nowrap flex flex-nowrap justify-center items-center gap-2 bling-light dark:bling-dark-bg-4 text-white'>
                <select
                  value={stepper.state?.categories?.[0] ?? ''}
                  onChange={(e) => handleChange('categories', e.target.value ? [Number(e.target.value)] : [])}
                  className='select select-bordered w-full !outline-none max-w-xs text-slate-700'
                >
                  <option disabled value=''>
                    Categoría Secundaria
                  </option>
                  {
                    mainCategory?.children?.map((category) => (
                      <option value={category.id} key={`category-${category.id}`}>{category.name}</option>
                    ))
                  }
                </select>
              </td></tr>

          </tbody></table>

      </div>


    </>
  );
};

export { ProductCategory };
