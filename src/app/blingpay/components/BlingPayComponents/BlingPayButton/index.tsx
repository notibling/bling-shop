import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import classNames from 'classnames';
import './styles.css';

// Rutas de los logos
const blingpayDarkLogo = './BlingPayAssets/brands/blingpaydark.svg';
const blingpayLightLogo = './BlingPayAssets/brands/blingpaylight.svg';

// Rutas de las marcas de tarjetas
const brandIcons = {
  mastercard: './BlingPayAssets/brands/mastercard.svg',
  visa: './BlingPayAssets/brands/visa.svg',
  dinnersclub: './BlingPayAssets/brands/dinnersclub.svg',
  oca: './BlingPayAssets/brands/oca.svg',
  amex: './BlingPayAssets/brands/amex.svg',
  maestro: './BlingPayAssets/brands/maestro.svg',
  discover: './BlingPayAssets/brands/discover.svg'
};

interface BlingPayButtonProps {
  cardBrands?: string;
  theme?: 'light' | 'dark';
  width?: number | string;
  height?: number;
  locale?: string;

}

const BlingPayButton: React.FC<BlingPayButtonProps> = ({
  cardBrands = '',
  theme = 'light',
  width = 'auto',
  height = 50
  // locale = 'en-US' // Comentado o eliminado si no se usa
}) => {
  // Selección del logo basado en el tema
  const blingpayLogo =
    theme === 'dark' ? blingpayLightLogo : blingpayDarkLogo;

  // Procesamiento de las marcas de tarjetas
  const brandsArray = cardBrands
    .split(',')
    .map(brand => brand.trim().toLowerCase())
    .filter(brand => brandIcons.hasOwnProperty(brand));

  return (
    <button
      className={classNames('BPBtn', theme)}
      style={{ width, height }}
    >
      <img
        src={blingpayLogo}
        className='bpaylogo'
        width={height * 1.2}
        height={height * 1.2}
        alt='BlingPay logo'
      />
      {brandsArray.length > 0 && <span className='separator'>|</span>}
      {brandsArray.map((brand, index) => (
        <img
          key={index}
          src={brandIcons[brand]}
          width={height * 0.5}
          height={height * 0.5}
          alt={`${brand} logo`}
          className='brands'
        />
      ))}
    </button>
  );
};

// Convertir el componente React a Web Component
const BlingPayButtonWebComponent = reactToWebComponent(BlingPayButton, React, ReactDOM);

// Definir el Web Component bajo el nombre personalizado
customElements.define('blingpay-button', BlingPayButtonWebComponent);

export { BlingPayButton };
export default BlingPayButtonWebComponent;
