'use client';
import React, { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

import _ from 'lodash';

import { Input, InputProps } from '@/components/atoms';
import { AutocompleteItem, IAutocompleteItemProps } from './AutocompleteItem';

interface IAutocompleteProps<T = any> extends Omit<InputProps, 'onChange' | 'onSelect'> {
  children: React.ReactElement | React.ReactElement[];
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: string, selected: T) => void;
  // eslint-disable-next-line no-unused-vars
  onSelect?: (selected: T, value: string) => void;
  field: keyof T;
  value?: string;
  defaultValue?: string;

  toggle?: boolean;
  strict?: boolean;
}

function Autocomplete<T>({
  children,
  field,
  onChange,
  onSelect: _onSelect,
  strict,
  defaultValue,
  toggle,
  ...inputProps
}: IAutocompleteProps<T>) {
  const [value, setValue] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [kill, setKill] = useState<boolean>(true);
  const [selected, setSelected] = useState<any>();
  // const ref = useRef<any>(null);
  const onSelect = (value: any) => {
    setValue(value[field]);
    setSelected(value);
    setOpen(false);
    _onSelect && _onSelect(value, value[field]);
  };


  const items =
    React.Children.map(children, item => {
      return item.props as IAutocompleteItemProps;
    });

  const [filteredItems, nonIncluded] = useMemo(() => {
    const elements = items.filter((element) =>
      element.value?.[field]?.toLowerCase().includes(value.toLowerCase()));
    const keys = elements.map((el) => el.value?.[field]);
    const elementsNotIncluded = items.filter((element) => !keys.includes(element?.value?.[field]));

    return [elements, elementsNotIncluded];
  }, [items, value]);


  const componentProps: InputProps = useMemo(() => {
    return {
      onFocus: () => setOpen(true),
      onClick() {
        if (open && toggle) setOpen(false);
      }
    };
  }, [toggle]);


  const func = _.debounce(() => {
    setKill((prev) => !prev);
  }, 300);


  useEffect(() => {
    if (!open) func();
    else setKill(false);
  }, [open]);

  useEffect(() => {
    if (kill && strict && !selected && value != defaultValue) {
      setValue('');
    }
  }, [kill]);


  useEffect(() => {
    setValue(defaultValue ?? '');
  }, [defaultValue]);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div className={classNames('relative')}>

        <Input
          defaultValue={defaultValue}
          value={value ?? ''}
          onChange={(e: any) => {
            setValue(e.target.value);
            onChange && onChange(e.target.value, selected);
          }}


          {...inputProps}
          {...componentProps}
        />
        {!kill && (
          <ul

            tabIndex={0}
            className={classNames(
              'absolute', { '!z-[-2]': !open },
              'translate-y-[5px]', 'z-[2]',
              'w-full', 'max-h-[300px]', 'overflow-y-auto',
              'options-body', 'bg-white', 'rounded-brand',
              'shadow-md', 'list-none'
            )}>
            {filteredItems.map(({ children, ...props }, index) => (
              <AutocompleteItem {...props} key={props.value?.[field] + index} onSelect={onSelect}>{children}</AutocompleteItem>
            ))}

            {nonIncluded.map(({ children, ...props }, index) => (
              <AutocompleteItem {...props} key={props.value?.[field] + index} onSelect={onSelect}>{children}</AutocompleteItem>
            ))}
          </ul>
        )}

      </div>
    </ClickAwayListener>
  );
}
const _AutocompleteItem = AutocompleteItem as React.FC<IAutocompleteItemProps>;

export { Autocomplete, _AutocompleteItem as AutocompleteItem };