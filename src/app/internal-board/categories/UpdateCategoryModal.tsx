import classNames from "classnames";
import { useEffect, useState } from "react";
import { FaPencil } from "react-icons/fa6";

import * as categoryOperations from '@/contexts/GlobalState/product/categoryOperations';

import { Modal } from "@/components/molecules";
import { Button, ButtonSize, Input } from "@/components/atoms";

import { usePromise } from "@/hooks";

import { ICategory, INestedCategories } from '@/entities/Category';

interface IUpdateCategoryModalProps {
  categories: INestedCategories[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  category?: INestedCategories;
  onSave: () => void;
}

const formInitialValue: Partial<ICategory> = { name: '', description: '', parentId: null };

const UpdateCategoryModal: React.FC<IUpdateCategoryModalProps> = ({ open, setOpen, categories, category, onSave }) => {
  const [form, setForm] = useState(formInitialValue);

  const { perform, loading } = usePromise((_form: Partial<ICategory>) =>
    categoryOperations.updateCategory({
      id: category?.id,
      name: _form.name,
      description: _form.description,
      parentId: _form.parentId
    })
  );


  const handleChange = (field: keyof typeof form, value: any) => {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  const handleUpdate = async () => {
    if (!category?.id) alert('An error has ocurred');

    await perform({
      ...form,
      parentId: form.parentId ? Number(form.parentId) || null : null
    });

    setForm(formInitialValue);
    onSave();
    setOpen(false);
  }

  useEffect(() => {
    setForm({
      name: category?.name ?? '',
      description: category?.description ?? '',
      parentId: category?.parentId || null
    });
  }, [category])


  useEffect(() => {
    if (!open) {
      setForm(formInitialValue);
    }
  }, [open])
  return (
    <Modal

      isOpen={open}
      onClose={() => setOpen(false)}
      title="Editar Categoría"
      content={
        <div className={classNames('flex', 'flex-col', 'gap-4')}>
          <Input value={form.name} onChange={(e) => handleChange('name', e.target.value)} className={classNames('border !border-gray-200')} placeholder="Category Name" />
          <Input value={form.description} onChange={(e) => handleChange('description', e.target.value)} className={classNames('border !border-gray-200')} placeholder="Category Description" />
          <div>
            <select
              value={form.parentId ?? ''}
              onChange={(e) => handleChange('parentId', e.target.value)}
              className={classNames(
                "w-full",
                "select",
                "select-bordered",
                "w-full",
                "!outline-none",
                "text-slate-700")}

            >
              <option value="">Categoría principal, no tiene parent</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>{category.id} - {category.name}</option>
              ))}
            </select>
          </div>

        </div>
      }
      footer={
        <>
          <Button className="bling-btn-secondary btn-md" onClick={() => setOpen(false)} text="Cerrar" />
          <Button
            text="Editar"
            icon={<FaPencil />}
            className="gap-2 bg-blue-500  text-white !px-4 !py-2"
            size={ButtonSize.small}

            onClick={handleUpdate}
            loading={loading}
          />
        </>
      }
      contentClassName="!h-auto flex-grow"
      className="p-2 min-w-[400px] !h-auto"
      overlayClassName="custom-overlay"
    />
  )
}


export { UpdateCategoryModal }