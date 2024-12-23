import React from 'react';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { FaPlus } from 'react-icons/fa';

import * as categoryOperations from '@/contexts/GlobalState/product/categoryOperations';

import { Modal } from '@/components/molecules';
import { Button, ButtonSize, Input } from '@/components/atoms';

import { usePromise } from '@/hooks';

import { ICategory, INestedCategories } from '@/entities/Category';

interface ICreateCategoryModalProps {
  categories: INestedCategories[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSave: () => void;
  onClose: () => void;
}

const formInitialValue = { name: '', description: '', parentId: null };

const CreateCategoryModal: React.FC<ICreateCategoryModalProps> = ({ open, setOpen, categories, onSave, onClose }) => {
  const [form, setForm] = useState(formInitialValue);

  const { perform, loading } = usePromise((_form: Partial<ICategory>) =>
    categoryOperations.createCategory({
      name: _form.name,
      description: _form.description,
      parentId: _form.parentId
    })
  );


  const handleChange = (field: keyof typeof form, value: any) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleCreate = async() => {
    await perform({
      ...form,
      parentId: form.parentId ? Number(form.parentId) : null
    });
    setForm(formInitialValue);
    onSave();
    handleClose();
  };

  function handleClose() {

    setOpen(false);
    onClose();

  }

  useEffect(() => {
    if (!open) {
      setForm(formInitialValue);
    }
  }, [open]);

  return (
    <Modal

      isOpen={open}
      onClose={() => handleClose()}
      title='Crear Categoría'
      content={
        <div className={classNames('flex', 'flex-col', 'gap-4')}>
          <Input value={form.name} onChange={(e) => handleChange('name', e.target.value)} className={classNames('border !border-gray-200')} placeholder='Category Name' />
          <Input value={form.description} onChange={(e) => handleChange('description', e.target.value)} className={classNames('border !border-gray-200')} placeholder='Category Description' />
          <div>
            <select
              value={form.parentId ?? ''}
              onChange={(e) => handleChange('parentId', e.target.value)}
              className={classNames(
                'w-full',
                'select',
                'select-bordered',
                'w-full',
                '!outline-none',
                'text-slate-700')}

            >
              <option value=''>Crear categoría principal, no tiene parent</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>{category.id} - {category.name}</option>
              ))}
            </select>
          </div>

        </div>
      }
      footer={
        <>
          <Button className='bling-btn-secondary btn-md' onClick={() => handleClose()} text='Cerrar' />
          <Button onClick={handleCreate} loading={loading} className='gap-2 bg-blue-500 text-white !px-4 !py-2' size={ButtonSize.small} text='Crear' icon={<FaPlus />} />
        </>
      }
      contentClassName='!h-auto flex-grow'
      className='p-2 min-w-[400px] !h-auto'
      overlayClassName='custom-overlay'
    />
  );
};


export { CreateCategoryModal };