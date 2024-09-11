'use client'
import { HTMLProps, forwardRef, useContext, useEffect, useRef, useState } from "react"
import classNames from "classnames"
import { FormContext } from "../organisms/Form";
import _ from "lodash";

// Definición de enum para los tamaños de Input
enum InputSize {
  xs = 'text-xs h-6',
  small = 'text-sm h-8',
  md = 'text-md h-10',
  base = 'text-base h-12',
  lg = 'text-lg h-14',
  xl = 'text-xl h-16',
  xxl = 'text-2xl h-18',
  xxxl = 'text-3xl h-20'
}

// Definición de props para el componente Input
interface InputProps extends Omit<HTMLProps<HTMLInputElement>, 'size' | 'onChange'> {
  size?: InputSize;
  label?: string;
  className?: string | string[] | Record<string, any> | any;
  showError?: boolean;
  maxLength?: number;
  error?: string;
  errorRegexp?: RegExp;
  controlId?: string;
  type?: string | 'password' | 'text-number' | 'number' | 'postal-code' | 'file' | 'search' | 'color' | 'date' | 'datetime-local' | 'email' | 'month' | 'range' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week';
  debounce?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

// Función de validación modularizada
const validateInput = (type: string | undefined, value: string): boolean => {
  switch (type) {
    case 'number':
      return !isNaN(Number(value));
    case 'range':
      return /^\d+$/.test(value);
    case 'text':
      return /^[a-zA-Z\s]*$/.test(value);
    case 'email':
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    case 'tel':
      return /^\+?(\d[\d-. ]+)?(\([\d-. ]+\))?[\d-. ]+\d$/.test(value);
    case 'url':
      return /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(value);
    case 'date':
      return /^\d{4}-\d{2}-\d{2}$/.test(value);
    case 'text-number':
      return /^[a-zA-Z0-9\s]*$/.test(value);
    case 'postal-code':
      return /^\d{4,6}$/.test(value);
    default:
      return true;
  }
};

// Componente Input
const Input = forwardRef<HTMLInputElement, InputProps>(({
  id, controlId, className, label, debounce, type,
  showError, error, errorRegexp, onChange,
  right, left, value: _value, maxLength,
  size = InputSize.md, ...rest
}, ref: any) => {
  const [value, setValue] = useState<string>('');
  const [hasError, setHasError] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const formContext = useContext(FormContext);

  const reference = ref ?? inputRef;

  const setFormInput = () => {
    if (controlId && formContext)
      formContext.setField(controlId, {
        hasError,
        errorText: error,
        value: reference.current?.value
      })
  }

  // Manejo de errores
  const handleError = (value: string) => {
    setFormInput();

    if (errorRegexp) {
      const hasValidationError = !errorRegexp.test(value);
      setHasError(hasValidationError);
    }
  }

  // Manejo de cambios en el input
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (!validateInput(type, inputValue)) return;

    setValue(inputValue);
    handleError(inputValue);
    onChange && onChange(event);
  };

  useEffect(() => {
    if (controlId) {
      setFormInput();
    }
  }, [controlId, reference])

  useEffect(() => {
    setFormInput()
  }, [hasError, _value])

  useEffect(() => {
    if (value !== _value) setValue(_value as string);
  }, [_value])

  return (
    <div className={classNames('flex', 'w-full', 'flex-col')}>
      {label && <label className={classNames('text-gray-600','border','border-red-500', 'font-bold')} htmlFor={id}>{label}</label>}
      <div className={classNames('flex','w-full','bling-light-bg-2','rounded-md','flex-row','items-center','justify-between','dark:bling-dark',
       className, 
      )}>
        {left && <span className='pl-2'>{left}</span>}
        <input
          value={value}
          id={id}
          type={type}
          maxLength={maxLength}
          className={classNames(
            className,
            'input',
            'h-12',
            'text-sm',
            'w-full',
            'bling-light-text',
            'dark:bling-dark-text',
            'bling-light-bg-3', 'dark:bling-dark-bg-1','dark:border-bling-dark-bg-3',
            '!shadow-none',
            '!outline-none',
            'px-2',
            'grow',            
            size
          )}
          onChange={handleChange}
          ref={reference}
          {...rest}
        />
        {right && <span className='pr-2'>{right}</span>}
      </div>
      {error && hasError && (
        <p className={classNames('text-red-600', 'text-xs', 'px-1 pt-2.5', 'font-medium')}>
          {error}
        </p>
      )}
    </div>
  )
});

export { Input, InputSize, type InputProps }
