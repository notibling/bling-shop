'use client';
import React, { useState, KeyboardEvent, ChangeEvent } from 'react';
import { twMerge } from 'tailwind-merge';
import { FaTimes } from 'react-icons/fa';
import { Button, Icon } from '../atoms';
import { FaLocationDot } from 'react-icons/fa6';
import { MapPointRotate } from '@/icons/tsx';

type TagsInputProps = {
  tags: string[];
  className?: string | string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>> | ((cb: (value: string[]) => string[]) => void);
};

const TagsInput: React.FC<TagsInputProps> = ({ tags, setTags, className }) => {
  const [input, setInput] = useState<string>('');

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!event.currentTarget) {
      return;
    }
    const inputValue = event.currentTarget.value;
    if (event.key === 'Enter' && inputValue.trim() && !tags.includes(inputValue.trim())) {
      setTags((prevTags) => [...prevTags, inputValue.trim()]);
      setInput('');
    } else if (event.key === 'Backspace' && !inputValue && tags.length) {
      setTags((prevTags) => prevTags.slice(0, -1));
    }
  };

  const removeTag = (index: number) => {
    setTags((prevTags) => prevTags.filter((_, i) => i !== index));
  };

  return (
    <div className={twMerge('tags-input-container', 'flex', 'gap-2', 'flex-wrap', className)}>
      <div className='w-full h-auto flex flex-row flex-nowrap gap-2'>
        <input
          className='w-full h-auto input py-3 !outline-none bling-light-bg-3 dark:bling-dark-bg-3 text-sm border bling-light-border dark:border-bling-dark-bg-5  '
          type="text"
          value={input}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setInput(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Añade un Departamento..."
        /><Button text="Todo el País" icon={<Icon name={MapPointRotate} size={20} />} className="w-fit px-3 py-1 h-auto text-nowrap text-xs bling-btn-primary border bling-light-border dark:border-bling-dark-bg-5 dark:bling-btn-primary-dark    text-slate-100 rounded-brand"/>
      </div>
      {tags.map((tag, index) => (
        <div className="tag w-fit h-auto p-1 px-2 text-sm flex flex-row text-nowrap gap-2 justify-center dark:bling-dark-bg-5 bling-light-bg-4 bling-light-text  items-center rounded-md  dark:text-white" key={index}>
          {tag}
          <FaTimes onClick={() => removeTag(index)} className="cursor-pointer" />
        </div>
      ))}

    </div>
  );
};

export { TagsInput };

