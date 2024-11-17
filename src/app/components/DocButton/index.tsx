'use client';
import React, { } from 'react';
import { Button,  Icon,  Separator, Title } from '@/components/atoms';
import { PreviewerComponent } from '@/components/molecules';
import { House } from '@/icons/tsx';

interface DocButtonProps {

}

const DocButton: React.FC<DocButtonProps> = ({ }) => {
    return (
        <div className='gap-4 flex flex-col  justify-start'>
          
        <Title title="Botones" level="h3" />
        <p>Los botones son uno de los componentes fundamentales en nuestra interfaz. Pueden ser personalizados según el tamaño, el color, y otros atributos. A continuación se detallan todas las opciones disponibles para su configuración.</p>
        <Separator noText />

       
        <Title title="Tamaños de Botón" level="h4" />
        <p>El tamaño de los botones puede ser ajustado usando la propiedad <code>size</code>, con las siguientes opciones:</p>
        
        <ul>
          <li><code>xs</code>: Tamaño extra pequeño.</li>
          <li><code>sm</code>: Tamaño pequeño.</li>
          <li><code>md</code>: Tamaño mediano (por defecto).</li>
          <li><code>base</code>: Tamaño base.</li>
          <li><code>lg</code>: Tamaño grande.</li>
          <li><code>xl</code>: Tamaño extra grande.</li>
          <li><code>xxl</code>: Tamaño dos veces extra grande.</li>
          <li><code>xxxl</code>: Tamaño tres veces extra grande.</li>
        </ul>

        <p>Ejemplo de uso de los botones con diferentes tamaños:</p>
        <PreviewerComponent name="Button Size" className='!w-full gap-4 flex flex-row items-start justify-center flex-wrap'>
          <Button text="Botón XS" size="xs" />
          <Button text="Botón SM" size="sm" />
          <Button text="Botón MD" size="md" />
          <Button text="Botón Base" size="base" />
          <Button text="Botón LG" size="lg" />
          <Button text="Botón XL" size="xl" />
          <Button text="Botón XXL" size="xxl" />
          <Button text="Botón XXXL" size="xxxl" />
          </PreviewerComponent>

        <Separator noText />
        <Title title="Colores de Botón" level="h4" />
        <p>Los botones pueden tener diferentes colores mediante la propiedad <code>theme</code>. Las opciones disponibles son:</p>

        <ul>
          <li><code>default</code>: Color predeterminado (blanco o oscuro dependiendo del tema).</li>
          <li><code>success</code>: Botón verde, usado para indicar éxito.</li>
          <li><code>error</code>: Botón rojo, usado para indicar error.</li>
          <li><code>warning</code>: Botón amarillo, usado para advertencias.</li>
          <li><code>info</code>: Botón azul, usado para información general.</li>
        </ul>

        <p>Ejemplo de botones con diferentes colores:</p>
        <PreviewerComponent name="Button Theme" className='!w-full  gap-4 flex flex-row items-start justify-center'>
       
          <Button text="Default" size="md" theme="default" />
          <Button text="Success" size="md" theme="success" />
          <Button text="Error" size="md" theme="error" />
          <Button text="Warning" size="md" theme="warning" />
          <Button text="Info" size="md" theme="info" />
       </PreviewerComponent>

        <Separator noText />
        <Title title="Estado de Carga (Loading)" level="h4" />
        <p>Los botones también pueden tener un estado de carga para indicar que una acción está en progreso. Esto se puede activar usando la propiedad <code>loading</code>.</p>

        <div className="flex flex-wrap gap-4">
          <Button text="Botón con carga" size="md" loading={true} />
          <Button text="Botón con carga" size="md" theme="success" loading={true} />
        </div>

        <Separator noText />
        <Title title="Deshabilitar Botones" level="h4" />
        <p>Es posible deshabilitar los botones usando la propiedad <code>disabled</code>. Un botón deshabilitado no responderá a los clics.</p>

        <div className="flex flex-wrap gap-4">
          <Button text="Botón deshabilitado" size="md" disabled={true} />
          <Button text="Botón deshabilitado" size="md" theme="warning" disabled={true} />
        </div>

        <Separator noText />
        <Title title="Usar Iconos en Botones" level="h4" />
        <p>Los botones pueden incluir iconos a la izquierda o a la derecha del texto utilizando las propiedades <code>iconLeft</code> y <code>iconRight</code>.</p>

        <div className="flex flex-wrap gap-4">
          <Button text="Botón con Icono Izquierda" size="md" iconLeft={<Icon name={House} size={20}/>} />
          <Button text="Botón con Icono Derecha" size="md" iconRight={<Icon name={House} size={20}/>} />
        </div>

        <Separator noText />
        <Title title="Ejemplo de Código" level="h4" />
        <p>Para usar los botones en tu proyecto, puedes hacerlo de la siguiente manera:</p>
        
        <pre className="w-full bling-light-bg-3 dark:bling-dark-bg-1 bling-light-text dark:text-white p-4 rounded-md border bling-light-border dark:bling-dark-border">
          {`
import { Button } from '@/components/atoms';

<Button text="Botón XS" size="xs" />
<Button text="Botón Success" size="md" theme="success" />
<Button text="Botón con carga" size="md" loading={true} />
<Button text="Botón deshabilitado" size="md" disabled={true} />
<Button text="Botón con Icono Izquierda" size="md" iconLeft={<Icon name={House} size={20}/>} />
<Button text="Botón con Icono Derecha" size="md" iconRight={<Icon name={House} size={20}/>} />
`}
        </pre>
        </div>
    );
};

export default DocButton;
