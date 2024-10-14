'use client';
import React, { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import classNames from 'classnames';

import * as categoryOperations from '@/contexts/GlobalState/product/categoryOperations';
import { BaseTable } from '@/components/organisms';
import { Title, Section, Button, ButtonSize } from '@/components/atoms';
import { usePromise } from '@/hooks';
import { CreateCategoryModal } from './CreateCategoryModal';
import { UpdateCategoryModal } from './UpdateCategoryModal';
import { useSearchParams } from 'next/navigation';
import { IBaseTableRow } from '@/components/organisms/BaseTable/types';
import { INestedCategories } from '@/entities/Category';

function InternalBoardCreateCategory() {
  const [createCategoryOpen, setCreateCategoryOpen] = useState<boolean>(false);
  const [categoryForUpdate, setCategoryForUpdate] = useState<INestedCategories>();

  const search = useSearchParams();
  const router = useRouter();
  const { result, perform } = usePromise(() => categoryOperations.fetchCategories(true));
  const { categories = [] } = result ?? {};
  function generateCategories(category: INestedCategories): IBaseTableRow {
    return {
      data: [
        <span key={`category-${category.id}-0`} className={classNames('w-[20px]')}>
          {category.id}
        </span>,
        <span key={`category-${category.id}-1`} className={classNames('w-1/3')}>
          {category.name}
        </span>,
        <span key={`category-${category.id}-2`} className={classNames('w-2/3')}>
          {category.description}
        </span>,
        <Button key={`category-${category.id}-3`} className={classNames('px-4', 'bg-blue-500', 'text-white')} onClick={() => setCategoryForUpdate(category)}>
          Editar
        </Button>
      ],
      children: category.children.map(generateCategories)
    };
  }

  useEffect(() => {
    perform().then(() => {
      const action = search.get('action');
      if (action === 'create') {
        setCreateCategoryOpen(true);
      }
    });
  }, [search]);

  return (
    <Section classNameContainer='flex !items-start flex-grow lg:!w-11/12'>
      <div className={classNames('w-full', 'px-6 py-6')}>
        <header className={classNames('w-full', 'flex', 'justify-between', 'items-center')}>
          <Title title='Administrar categorias' />

          <Link href='/internal-board/categories?action=create'>
            <Button size={ButtonSize.md} className={classNames('px-4', 'bg-blue-500', 'text-white')}>
              Añadir
            </Button>
          </Link>
        </header>
        <CreateCategoryModal open={createCategoryOpen} setOpen={setCreateCategoryOpen} categories={categories} onClose={() => router.replace('/internal-board/categories')} onSave={() => perform()} />
        <UpdateCategoryModal category={categoryForUpdate} open={Boolean(categoryForUpdate)} setOpen={() => setCategoryForUpdate(undefined)} categories={categories} onSave={() => perform()} />
        <BaseTable headers={['ID', 'Nombre', 'Descripción', 'Acciones']} rows={categories.map(generateCategories)}></BaseTable>
      </div>
    </Section>
  );
}

const SuspensedInternalBoard = () => (
  <Suspense>
    <InternalBoardCreateCategory />
  </Suspense>
);

export default SuspensedInternalBoard;
