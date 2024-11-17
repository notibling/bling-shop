'use client';
import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useState } from 'react';
import classNames from 'classnames';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

import _ from 'lodash';

import { Input, InputProps } from '@/components/atoms';
import { AutocompleteItem } from './AutocompleteItem';
import { IoMdArrowDropdown } from 'react-icons/io';

interface IAutocompleteProps<T = any> extends Omit<InputProps, 'onChange' | 'onSelect' | 'label' | 'ref'> {
  onChange?: (value: string, selected: T) => void;
  onSelect?: (selected: T, value: string) => void;
  field: keyof T;
  label?: keyof T;
  options: T[];
  value?: string;
  buttonClassName?: string | string[] ;
  defaultValue?: string;

  filter?: (option: T, value: string) => boolean;
  toggle?: boolean;
  strict?: boolean;

}

interface ISimpleAutocompleteRef<T = any> {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setSelected: React.Dispatch<React.SetStateAction<T>>;
  clear: () => void;
}


type Type = <T>(
  props: IAutocompleteProps<T> & { ref?: React.ForwardedRef<ISimpleAutocompleteRef<T>> | any }
) => React.ReactNode;

const SimpleAutocomplete: Type = forwardRef<ISimpleAutocompleteRef<any>, IAutocompleteProps>(function SimpleAutocomplete<T>({
  options,
  field,
  onChange,
  onSelect: _onSelect,
  strict,
  defaultValue,
  toggle,
  label: _label,
  className,
  disabled,
  buttonClassName,
  filter,
  ...inputProps
}: IAutocompleteProps<T>, ref: React.ForwardedRef<ISimpleAutocompleteRef<T>>) {

  const [value, setValue] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [kill, setKill] = useState<boolean>(true);
  const [selected, setSelected] = useState<any>();


  const label = _label ?? field;

  const debouncedChange = _.throttle((value: string) => onChange && onChange(value, selected), 200);

  const setValueAndChange = (value: string) => {
    setValue(value);
    debouncedChange(value);
  };

  const onSelect = (value: any) => {
    setValueAndChange(value?.[label] ?? '');
    setSelected(value);
    setOpen(false);
    _onSelect && _onSelect(value, value?.[field]);
  };

  const filteredOptions = useMemo(() => {
    const filteredOptions: T[] = [];
    const nonFilteredOptions: T[] = [];

    for (let i = 0; i <= options.length - 1; i++) {
      const option = options[i];
      const fieldValue = `${option?.[label] ?? ''}`;

      const condition = filter ? filter(option, value) :
        fieldValue.toLowerCase().includes(value.toLowerCase());

      if (condition) filteredOptions.push(option);
      else nonFilteredOptions.push(option);
    }

    return [
      ...filteredOptions,
      ...nonFilteredOptions
    ];
  }, [options, value, filter, label]);

  const handleClick = () => {
    if (disabled) return;
    setOpen(true);
    if (open && toggle) setOpen(false);
  };

  const handleFocus = () => {
    if (!disabled) setOpen(true);
  };

  const func = _.debounce(() => {
    setKill((prev) => !prev);
  }, 1);


  useImperativeHandle(ref, () => ({
    setValue,
    setSelected,
    clear() {
      setValue('');
      setSelected(undefined);
    }
  }), []);

  useEffect(() => {
    if (!open) func();
    else setKill(false);
  }, [open]);

  useEffect(() => {
    if (kill && strict) {
      setValue(selected?.[label] ?? '');
    }
  }, [kill]);

  useEffect(() => {
    console.log('Residence Country', { defaultValue });
    setValue(defaultValue ?? '');
  }, []);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div className={classNames('relative', 'cursor-pointer', 'rounded-md', className)}>

        <div
          onClick={handleClick}
          className={classNames(
            'flex', 'w-full', 'input',
            'bling-light-bg-3', 
            'px-0',
            'rounded-md',
            'overflow-hidden',
            'bling-light-text', 'dark:bling-dark-text',
            '!shadow-none',
            '!outline-none',
            'dark:bling-dark-bg-3', 'dark:border-bling-dark-bg-3 outline-none',
            { 'opacity-50 cursor-not-allowed': disabled }
          )}>
          <Input
            className={classNames('flex-grow', '!border-0', '!ring-0', 'bling-light-text', '!bg-transparent', 'dark:bling-dark-text', 'rounded-md', 'disabled:bg-grey-600', className)}
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
            onFocus={handleFocus}
            disabled={disabled}
            {...inputProps}
          />
          <div
            className={classNames('px-3', 'bling-light-text', 'dark:bling-dark-text', 'flex', 'm-1', 'rounded-md', 'items-center', 'dark:bg-bling-dark-bg-5', 'bling-light', 'justify-center', buttonClassName)}>
            <IoMdArrowDropdown
              className={classNames({ 'rotate-180': open })}
            />
          </div>
        </div>
        {!kill && (
          <ul
            tabIndex={0}
            className={classNames(
              'absolute', { '!z-[-5] invisible': !open },
              'translate-y-[5px]', 'z-[2]',
              'border', 'border-red-400',
              'w-full', 'max-h-[300px]', 'overflow-y-auto',
              'options-body', 'bling-light-text', 'dark:bling-dark-text', 'rounded-md',
              'border', ' bling-light-border', ' dark:bling-dark-border', ' !bg-opacity-90', 'bling-light', 'dark:bling-dark-bg-3',
              'shadow-md', 'list-none'
            )}>
            {filteredOptions.map((option, index) => (
              <AutocompleteItem key={`autocompleteItem-${index}`} value={option} onSelect={onSelect}>
                <>
                  {option?.[label] || ''}
                </>
              </AutocompleteItem>
            ))}

          </ul>
        )}

      </div>
    </ClickAwayListener>
  );
});


export { SimpleAutocomplete, type ISimpleAutocompleteRef };