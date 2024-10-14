import React from 'react';
import classNames from 'classnames';
import { Button as AtomButton, Icon } from '@/components/atoms';

interface AddToCartButtonProps {
    fastAdd?: boolean,
    id?: string,
    className?: string,
    children?: React.ReactNode,
    text?: string,
    size?: string,
    loading?: boolean,
    disabled?: boolean,
    icon?: React.ReactNode,
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    width?: string,
    height?: string,
    cartItemCount?: number, // Nueva propiedad para contar los productos en el carrito
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  id,
  className,
  children,
  text = 'Añadir al Carrito',
  fastAdd = false,
  size = 'xs',
  loading,
  disabled,
  icon,
  onClick,
  width = '100%',
  height = '3rem',
  cartItemCount = 0, // Valor predeterminado
  ...rest
}) => {
  const buttonProps = {
    ...rest,
    id,
    onClick,
    disabled
  };

  const defaultIcon = cartItemCount > 5 ? (
    <Icon name='Box' color='#fff' size={25} />
  ) : (
    <Icon name='CartLarge' color='#fff' size={25} />
  );

  const buttonText = fastAdd ? 'Compra rápida' : 'Añadir al Carrito';

  const buttonStyle = {
    width,
    height,
    backgroundColor: fastAdd ? '#f97316' : '' // Color de fondo naranja si fastAdd es true
  };

  return (
    <AtomButton
      {...buttonProps}
      className={classNames(
        'bling-add-to-cart',
        'flex',
        'text-nowrap',
        'hover:bling-bright',
        'px-2',
        'btn-md',
        'items-center',
        'justify-center',
        'gap-2',
        'flex-row',
        'rounded-md',
        className
      )}
      style={buttonStyle}
      icon={fastAdd ? (
        <Icon name='Bolt' color='#fff' size={25} />
      ) : (
        defaultIcon
      )}
      text={buttonText}
    />
  );
};

export { AddToCartButton };
