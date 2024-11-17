'use client';
import React from 'react';
import { Title, Separator } from '@/components/atoms';
import { CardHorizontal, PreviewerComponent } from '@/components/molecules';
import { FaHeart, FaShoppingBasket, FaShare } from 'react-icons/fa';

interface DocCardHorizontalProps {}

const DocCardHorizontal: React.FC<DocCardHorizontalProps> = () => {
  return (
    <div className='gap-4 flex flex-col justify-start'>
      <Title title="CardHorizontal" level="h3" />
      <p>El componente <code>CardHorizontal</code> es una tarjeta horizontal que se utiliza para mostrar contenido relevante, como productos o servicios. Puede incluir imágenes, botones, información de precios, y más. A continuación se detallan las propiedades disponibles para su configuración.</p>
      <Separator noText />

      <Title title="Propiedades de CardHorizontal" level="h4" />
      <p>Las propiedades que se pueden configurar en <code>CardHorizontal</code> son las siguientes:</p>
      
      <ul>
        <li><code>category</code>: Categoría del producto o servicio.</li>
        <li><code>imageClassName</code>: Clases CSS para la imagen.</li>
        <li><code>title</code>: Título del producto o servicio (requerido).</li>
        <li><code>description</code>: Descripción del producto o servicio.</li>
        <li><code>badge</code>: Insignia para mostrar información adicional (ej. oferta).</li>
        <li><code>content</code>: Contenido adicional que se muestra en el card.</li>
        <li><code>badgeCountry</code>: Insignia del país del producto.</li>
        <li><code>freeShipping</code>: Indica si tiene envío gratis.</li>
        <li><code>priceBefore</code>: Precio original antes de la oferta (opcional).</li>
        <li><code>price</code>: Precio actual del producto o servicio (requerido).</li>
        <li><code>shareButton</code>: Muestra el botón para compartir el producto (opcional).</li>
        <li><code>term</code>: Información adicional sobre términos y condiciones.</li>
        <li><code>imageAlt</code>: Texto alternativo para la imagen.</li>
        <li><code>height</code>: Altura de la tarjeta.</li>
        <li><code>className</code>: Clases CSS adicionales para el componente.</li>
        <li><code>stock</code>: Información sobre el stock disponible.</li>
        <li><code>padding</code>: Espaciado dentro del componente.</li>
        <li><code>addButton</code>: Muestra el botón para añadir al carrito (opcional).</li>
        <li><code>quantity</code>: Cantidad del producto seleccionado.</li>
        <li><code>actions</code>: Acciones adicionales que se pueden incluir, como botones.</li>
        <li><code>deleteButton</code>: Botón para eliminar el producto.</li>
        <li><code>footer</code>: Pie de página para mostrar información adicional.</li>
      </ul>

      <Separator noText />
      <Title title="Ejemplo de Uso" level="h4" />
      <p>A continuación se muestra un ejemplo de cómo utilizar el componente <code>CardHorizontal</code>:</p>

      <PreviewerComponent name="Card Horizontal Example" className="flex justify-center gap-4">
        <CardHorizontal
          title="Camiseta Deportiva"
          price={25.99}
          image="/images/webp/banners/tshirts.webp"
          description="Una camiseta cómoda y de alta calidad para tu entrenamiento."
          freeShipping={true}
          priceBefore={30.99}
          addButton={true}
          quantity={1}
          actions={true}
          shareButton={true}
          deleteButton={true}
          stock="En stock"
          badge="Nuevo"
          badgeCountry="UY"
          footer={<div>Entrega estimada: 3 días hábiles</div>}
        />
        <CardHorizontal
          title="Zapatos Running"
          price={50.99}
          image="/images/webp/banners/tshirts.webp"
          description="Zapatos running para máximo rendimiento."
          freeShipping={false}
          priceBefore={55.99}
          addButton={true}
          actions={false}
          shareButton={false}
          deleteButton={true}
          stock="Pocas unidades"
          badge="Oferta"
          footer={<div>Entrega estimada: 5 días hábiles</div>}
        />
      </PreviewerComponent>

      <Separator noText />
      <Title title="Código de Implementación" level="h4" />
      <p>Para utilizar el componente en tu proyecto, puedes hacerlo de la siguiente manera:</p>

      <pre className="w-full bling-light-bg-3 dark:bling-dark-bg-1 bling-light-text dark:text-white p-4 rounded-md border bling-light-border dark:bling-dark-border">
        {`
import { CardHorizontal } from '@/components/molecules';

<CardHorizontal
  title="Camiseta Deportiva"
  price={25.99}
  image="/images/webp/banners/tshirts.webp"
  description="Una camiseta cómoda y de alta calidad para tu entrenamiento."
  freeShipping={true}
  priceBefore={30.99}
  addButton={true}
  quantity={1}
  actions={true}
  shareButton={true}
  deleteButton={true}
  stock="En stock"
  badge="Nuevo"
  badgeCountry="UY"
  footer={<div>Entrega estimada: 3 días hábiles</div>}
/>
`}
      </pre>
    </div>
  );
};

export default DocCardHorizontal;
