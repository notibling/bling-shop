'use client';
import React from 'react';
import { Title, Separator, Icon } from '@/components/atoms';
import { PreviewerComponent } from '@/components/molecules';
import { House, Star } from '@/icons/tsx';

interface DocTitleProps {}

const DocTitle: React.FC<DocTitleProps> = ({}) => {
  return (
    <div className="gap-4 flex flex-col  justify-start">
      <Title title="Títulos" level="h3" />
      <p>El componente <code>Title</code> es utilizado para mostrar títulos de diferentes niveles con opciones de personalización. Permite agregar iconos, descripciones, y tooltips para enriquecer la presentación del texto. A continuación se detallan todas las opciones disponibles para su configuración.</p>
      <Separator noText />

      <Title title="Propiedades del Componente Title" level="h4" />
      <p>Este componente acepta una serie de propiedades para personalizar su comportamiento:</p>

      <ul>
        <li><code>title</code>: El contenido principal del título (puede ser un texto o un componente React).</li>
        <li><code>level</code>: Define el nivel del título, que puede ser <code>h1</code>, <code>h2</code>, <code>h3</code>, <code>h4</code>, <code>h5</code>, <code>h6</code> o <code>p</code>.</li>
        <li><code>icon</code>: Un componente de icono que se muestra junto al título.</li>
        <li><code>description</code>: Texto o componente React que sirve como descripción adicional al título.</li>
        <li><code>tooltip</code>: Booleano que habilita la visualización de un tooltip al pasar el cursor sobre el título.</li>
        <li><code>tooltipContent</code>: El contenido que se mostrará dentro del tooltip.</li>
        <li><code>iconSize</code>: Tamaño del icono.</li>
        <li><code>iconColor</code>: Color del icono.</li>
        <li><code>tooltipPosition</code>: Posición del tooltip respecto al título (opciones como <code>top</code>, <code>bottom</code>, etc.).</li>
      </ul>

      <Separator noText />
      <Title title="Ejemplo de Uso del Componente Title" level="h4" />
      <p>A continuación, un ejemplo de cómo usar el componente <code>Title</code> con diferentes configuraciones:</p>

      <PreviewerComponent name="Title Example" className="!w-full gap-4 flex flex-row items-start justify-center flex-wrap">
        <Title 
          title="Título Principal"
          level="h2"
          icon={<Icon name={Star} size={45}/>}
          description="Esta es una descripción del título"
          tooltip={true}
          tooltipContent="Información adicional"
        />
      </PreviewerComponent>

      <Separator noText />
      <Title title="Configuración del Tooltip" level="h4" />
      <p>El tooltip se activa mediante la propiedad <code>tooltip</code> y puede mostrar contenido adicional con la propiedad <code>tooltipContent</code>. La posición del tooltip se puede ajustar utilizando la propiedad <code>tooltipPosition</code>.</p>

      <PreviewerComponent name="Title Tooltip" className="!w-full gap-4 flex flex-row items-start justify-center flex-wrap">
        <Title 
          title="Título con Tooltip"
          level="h3"
          tooltip={true}
          tooltipContent="Este es un tooltip"
          tooltipPosition="top"
        />
      </PreviewerComponent>

      <Separator noText />
      <Title title="Usar Iconos en el Título" level="h4" />
      <p>El componente permite agregar iconos al lado del título utilizando la propiedad <code>icon</code>. También se puede personalizar el tamaño y color del icono.</p>

      <div className="flex flex-wrap gap-4">
        <Title 
          title="Título con Icono" 
          level="h3" 
          icon={<Icon name={House} size={45}/>} 
          iconSize={24}
          iconColor="blue"
        />
      </div>

      <Separator noText />
      <Title title="Ejemplo de Código" level="h4" />
      <p>Para usar el componente <code>Title</code> en tu proyecto, puedes hacerlo de la siguiente manera:</p>

      <pre className="w-full bling-light-bg-3 dark:bling-light-bg-5 rounded-md p-4">
        {`<Title 
  title="Título con Icono"
  level="h2"
  icon={<Icon name={Star} size={45}/>}
  description="Una descripción para el título"
  tooltip={true}
  tooltipContent="Tooltip de información adicional"
  tooltipPosition="top"
/>`}
      </pre>
    </div>
  );
};

export default DocTitle ;
