import React from 'react';
import { Icon, Separator, Title } from '@/components/atoms';
import { Link } from '@/icons/tsx';
import { PreviewerComponent } from '@/components/molecules';
import { BlingPayButton } from '../components/BlingPayComponents';

const DocsBlingPayButton: React.FC = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-start gap-4">
      <Title level="h2" title="BlingPay Button" titleClassName={'dark:text-white'} description="Simplifique sus transacciones con nuestro versátil botón BlingPay, diseñado para agilizar pagos, transferencias y más." />
      <span className="w-full h-auto text-md dark:text-white bling-light-text">
        El botón BlingPay le permite crear enlaces para una amplia gama de servicios financieros. Ya sea para pagos únicos o recurrentes, transferencias de fondos, o la gestión de peticiones, BlingPay se adapta a sus necesidades. <br />
      </span>

      <Separator noText={true} />

      <div className="grid grid-cols-4 w-full h-auto gap-4">
        {/* Documentación de BlingPayButton */}
        <div className="col-span-4 h-auto flex flex-col gap-4">
          <Title level="h3" title="Documentación del BlingPayButton" titleClassName="dark:text-white" description="Detalles sobre cómo utilizar y configurar el botón de BlingPay en su aplicación." />

          <div className="dark:text-white bling-light-text gap-2 flex flex-col justify-start bling-light dark:bling-dark-bg-2 items-stretch border bling-light-border dark:bling-dark-border rounded-md p-2">
            <Title level="h5" title="Propiedades:" titleClassName="dark:text-white" className={'w-full bling-light dark:bling-dark-bg-2 p-2'} />

            <table className="table-auto w-full text-left  rounded-md p-2 dark:text-white bling-light-text">
              <thead className="">
                <tr>
                  <th className="border bling-light-border dark:bling-dark-border text-sm p-2 ">Propiedad</th>
                  <th className="border bling-light-border dark:bling-dark-border text-sm p-2 ">Atributo HTML</th>
                  <th className="border bling-light-border dark:bling-dark-border text-sm p-2 ">Tipo</th>
                  <th className="border bling-light-border dark:bling-dark-border text-sm p-2 ">Valores Aceptados</th>
                  <th className="border bling-light-border dark:bling-dark-border text-sm p-2 ">Descripción</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border bling-light-border dark:bling-dark-border bling-light-text dark:bling-dark-text text-sm p-2">cardBrands</td>
                  <td className="border bling-light-border dark:bling-dark-border bling-light-text dark:bling-dark-text text-sm p-2">card-brands</td>
                  <td className="border bling-light-border dark:bling-dark-border bling-light-text dark:bling-dark-text text-sm p-2">string</td>
                  <td className="border bling-light-border dark:bling-dark-border bling-light-text dark:text-white text-sm p-2">mastercard, visa, dinnersclub, oca</td>
                  <td className="border bling-light-border dark:bling-dark-border bling-light-text dark:bling-dark-text text-sm p-2">Lista separada por comas de las marcas de tarjeta soportadas.</td>
                </tr>
                <tr>
                  <td className="border bling-light-border dark:bling-dark-border bling-light-text dark:bling-dark-text text-sm p-2">theme</td>
                  <td className="border bling-light-border dark:bling-dark-border bling-light-text dark:bling-dark-text text-sm p-2">theme</td>
                  <td className="border bling-light-border dark:bling-dark-border bling-light-text dark:bling-dark-text text-sm p-2">string</td>
                  <td className="border bling-light-border dark:bling-dark-border bling-light-text dark:text-white text-sm p-2">'dark', 'light'</td>
                  <td className="border bling-light-border dark:bling-dark-border bling-light-text dark:bling-dark-text text-sm p-2">Define si usa el logo oscuro o claro de BlingPay.</td>
                </tr>
                <tr>
                  <td className="border bling-light-border dark:bling-dark-border bling-light-text dark:bling-dark-text text-sm p-2">width</td>
                  <td className="border bling-light-border dark:bling-dark-border bling-light-text dark:bling-dark-text text-sm p-2">width</td>
                  <td className="border bling-light-border dark:bling-dark-border bling-light-text dark:bling-dark-text text-sm p-2">number</td>
                  <td className="border bling-light-border dark:bling-dark-border bling-light-text dark:text-white text-sm p-2">Cualquier valor numérico</td>
                  <td className="border bling-light-border dark:bling-dark-border bling-light-text dark:bling-dark-text text-sm p-2">Ancho del componente.</td>
                </tr>
                <tr>
                  <td className="border bling-light-border dark:bling-dark-border bling-light-text dark:bling-dark-text text-sm p-2">height</td>
                  <td className="border bling-light-border dark:bling-dark-border bling-light-text dark:bling-dark-text text-sm p-2">height</td>
                  <td className="border bling-light-border dark:bling-dark-border bling-light-text dark:bling-dark-text text-sm p-2">number</td>
                  <td className="border bling-light-border dark:bling-dark-border bling-light-text dark:text-white text-sm p-2">Cualquier valor numérico</td>
                  <td className="border bling-light-border dark:bling-dark-border bling-light-text dark:bling-dark-text text-sm p-2">Altura del componente.</td>
                </tr>
                <tr>
                  <td className="border bling-light-border dark:bling-dark-border bling-light-text dark:bling-dark-text text-sm p-2">locale</td>
                  <td className="border bling-light-border dark:bling-dark-border bling-light-text dark:bling-dark-text text-sm p-2">locale</td>
                  <td className="border bling-light-border dark:bling-dark-border bling-light-text dark:bling-dark-text text-sm p-2">string</td>
                  <td className="border bling-light-border dark:bling-dark-border bling-light-text dark:text-white text-sm p-2">en, es, etc.</td>
                  <td className="border bling-light-border dark:bling-dark-border bling-light-text dark:bling-dark-text text-sm p-2">Define el idioma utilizado en el botón.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Separator noText={true} />
          <div className="dark:text-white bling-light-text gap-2 flex flex-col justify-start bling-light dark:bling-dark-bg-2 items-stretch border bling-light-border dark:bling-dark-border rounded-md p-2">
            <Title level="h5" title="Ejemplo de Uso (Web Component):" titleClassName="dark:text-white" className={'w-full bling-light dark:bling-dark-bg-2 p-2'} />

            <pre className="bling-light-bg-3 dark:bling-dark-bg-1 bling-light-text dark:text-white p-4 rounded-md border bling-light-border dark:bling-dark-border">
              {`<blingpay-button
  card-brands="mastercard,visa"
  theme="dark"
  width="200"
  height="50"
  locale="es">
</blingpay-button>`}
            </pre>
          </div>
          <Separator noText={true} />
          <div className="dark:text-white bling-light-text gap-2 flex flex-col justify-start bling-light dark:bling-dark-bg-2 items-stretch border bling-light-border dark:bling-dark-border rounded-md p-2">
            <Title
              level="h5"
              title="Event Listeners:"
              titleClassName="dark:text-white"
              className={'w-full bling-light dark:bling-dark-bg-2 p-2'}
              description="BlingPayButton soporta el uso de DOM EventListeners. Los eventos en la lista a continuación pueden ser manejados en JavaScript utilizando ya sea el método addEventListener o un atributo de event handler estándar en HTML."
            />

            <p className="bling-light-text dark:text-white p-2">Este componente disparará los siguientes EventListeners:</p>

            <div className="w-full h-auto flex flex-row items-center justify-start gap-2 bling-light-bg-3 dark:bling-dark-bg-1 p-2 rounded-md">
              <h6 className="bling-light-text dark:text-white px-4 p-2 rounded-md dark:bling-dark bling-light">Listeners:</h6>

              <p className="bling-light-text dark:text-white">
                <b>
                  <code>click</code>
                </b>
              </p>
            </div>

            <h6 className="bling-light-text dark:text-white p-2">Ejemplos EventListeners:</h6>
            <pre className="bling-light-bg-3 dark:bling-dark-bg-1 bling-light-text dark:text-white p-4 rounded-md border bling-light-border dark:bling-dark-border">
              {`// La siguiente implementación agrega un manejador de eventos click
document.querySelector('blingpay-button').onclick = (event) => {
  console.log('CLICK EVENT: ', event);
}

// O utilizando addEventListener
document.querySelector('blingpay-button').addEventListener('click', (event) => {
  console.log('CLICK EVENT: ', event);
});`}
            </pre>
          </div>

          <Separator noText={true} />

          <div className="dark:text-white bling-light-text gap-2 flex flex-col justify-start bling-light dark:bling-dark-bg-2 items-stretch border bling-light-border dark:bling-dark-border rounded-md p-2">
            {/* Ejemplos */}
            <Title
              level="h5"
              title="Ejemplos en ejecución:"
              titleClassName="dark:text-white"
              className={'w-full bling-light dark:bling-dark-bg-2 p-2'}
              description={'A continuación se presentan algunos ejemplos de cómo utilizar el componente BlingPayButton.'}
            />
</div>
        
<div className="dark:text-white bling-light-text gap-2 flex flex-col justify-start bling-light dark:bling-dark-bg-2 items-stretch border bling-light-border dark:bling-dark-border rounded-md p-2">
<h6 className="w-fit bling-light-text dark:text-white px-4 p-2 rounded-md dark:bling-dark bling-light">Default:</h6>
           
            <PreviewerComponent name="BlingPay Button | Default">
              <BlingPayButton cardBrands="" height={40} locale="es-ES" theme="dark" />
            </PreviewerComponent>
            <pre className="bling-light-bg-3 dark:bling-dark-bg-1 bling-light-text dark:text-white p-4 rounded-md border bling-light-border dark:bling-dark-border">{`<blingpay-button></blingpay-button>`}</pre>

           </div>
            <div className="dark:text-white bling-light-text gap-2 flex flex-col justify-start bling-light dark:bling-dark-bg-2 items-stretch border bling-light-border dark:bling-dark-border rounded-md p-2">
            {/* Card Brands */}
            <h6 className="w-fit bling-light-text dark:text-white px-4 p-2 rounded-md dark:bling-dark bling-light">Card Brands</h6>

            <p className="bling-light-text dark:text-white text-xs p-2">
              Puede definir qué marcas de tarjeta son aceptadas utilizando la propiedad <code>card-brands</code>.
            </p>
            <PreviewerComponent name="BlingPay Button | CardBrands">
              <BlingPayButton cardBrands="mastercard, visa, dinnersclub, amex, discover, oca, maestro" height={40} locale="es-ES" theme="dark" />
            </PreviewerComponent>
            <table className="table-auto w-full text-left mt-2">
              <thead>
                <tr>
                  <th className="border bling-light-border dark:bling-dark-border text-sm p-2">Property</th>
                  <th className="border bling-light-border dark:bling-dark-border text-sm p-2">Attribute</th>
                  <th className="border bling-light-border dark:bling-dark-border text-sm p-2">Accepted Values</th>
                  <th className="border bling-light-border dark:bling-dark-border text-sm p-2">Default</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border bling-light-border dark:bling-dark-border text-xs p-2">cardBrands</td>
                  <td className="border bling-light-border dark:bling-dark-border text-xs p-2">card-brands</td>
                  <td className="border bling-light-border dark:bling-dark-border text-xs p-2">mastercard, maestro, visa, amex, oca, discover</td>
                  <td className="border bling-light-border dark:bling-dark-border text-xs p-2">mastercard</td>
                </tr>
              </tbody>
            </table>
            <pre className="bling-light-bg-3 dark:bling-dark-bg-1 bling-light-text dark:text-white p-4 rounded-md border bling-light-border dark:bling-dark-border">{`<blingpay-button card-brands="mastercard,visa,amex"></blingpay-button>`}</pre>
</div>
      
            <div className="dark:text-white bling-light-text gap-2 flex flex-col justify-start bling-light dark:bling-dark-bg-2 items-stretch border bling-light-border dark:bling-dark-border rounded-md p-2">
            {/* Locale */}
            <h6 className="w-fit bling-light-text dark:text-white px-4 p-2 rounded-md dark:bling-dark bling-light">Locale:</h6>
            <p className="bling-light-text dark:text-white text-xs p-2">
              Puede definir el idioma del botón utilizando la propiedad <code>locale</code>.
            </p>
            <table className="table-auto w-full text-left mt-2">
              <thead>
                <tr>
                  <th className="border bling-light-border dark:bling-dark-border text-sm p-2">Property</th>
                  <th className="border bling-light-border dark:bling-dark-border text-sm p-2">Attribute</th>
                  <th className="border bling-light-border dark:bling-dark-border text-sm p-2">Accepted Values</th>
                  <th className="border bling-light-border dark:bling-dark-border text-sm p-2">Default</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border bling-light-border dark:bling-dark-border text-xs p-2">locale</td>
                  <td className="border bling-light-border dark:bling-dark-border text-xs p-2">locale</td>
                  <td className="border bling-light-border dark:bling-dark-border text-xs p-2">
                    bg_BG, cs_CZ, da_DK, de_AT, de_CH, de_DE, el_GR, en_AE, en_AU, en_BH, en_CA, en_CH, en_GB, en_HK, en_IE, en_IN, en_JO, en_KE, en_KW, en_NG, en_NZ, en_PH, en_QA, en_SA, en_SG, en_TH, en_TZ, en_US, en_VN, es_AR, es_CL, es_CO, es_DO,
                    es_EC, es_ES, es_GT, es_HN, es_MX, es_NI, es_PA, es_PE, es_PY, es_SV, es_UY, et_EE, fi_FI, fr_BE, fr_CA, fr_CH, fr_FR, hu_HU, it_CH, it_IT, lt_LT, lv_LV, ms_MY, nb_NO, nl_BE, nl_NL, pl_PL, pt_BR, pt_PT, ro_RO, sk_SK, sv_FI, sv_SE,
                    th_TH, uk_UA, vi_VN, zh_HK, zh_SG
                  </td>
                  <td className="border bling-light-border dark:bling-dark-border text-xs p-2">en_US</td>
                </tr>
              </tbody>
            </table>
            <pre className="bling-light-bg-3 dark:bling-dark-bg-1 bling-light-text dark:text-white p-4 rounded-md border bling-light-border dark:bling-dark-border">{`<blingpay-button locale="es_ES"></blingpay-button>`}</pre>
</div>

<div className="dark:text-white bling-light-text gap-2 flex flex-col justify-start bling-light dark:bling-dark-bg-2 items-stretch border bling-light-border dark:bling-dark-border rounded-md p-2">
<PreviewerComponent name="BlingPay Button | Light">
              <BlingPayButton cardBrands="mastercard, visa" height={40} locale="es-ES" theme="light" />
            </PreviewerComponent>
{/* Light Mode */}
<h6 className="w-fit bling-light-text dark:text-white px-4 p-2 rounded-md dark:bling-dark bling-light">Light Mode:</h6>
<p className="bling-light-text dark:text-white text-xs p-2">
  Puede habilitar el tema claro del botón agregando el atributo <code>light</code>.
</p>
<pre className="bling-light-bg-3 dark:bling-dark-bg-1 bling-light-text dark:text-white p-4 rounded-md border bling-light-border dark:bling-dark-border">{`<blingpay-button light></blingpay-button>`}</pre>
</div>


            <div className="dark:text-white bling-light-text gap-2 flex flex-col justify-start bling-light dark:bling-dark-bg-2 items-stretch border bling-light-border dark:bling-dark-border rounded-md p-2">

            {/* Dark Mode */}
            <h6 className="w-fit bling-light-text dark:text-white px-4 p-2 rounded-md dark:bling-dark bling-light">Dark Mode:</h6>
            <p className="bling-light-text dark:text-white text-xs p-2">
              Puede habilitar el tema oscuro del botón agregando el atributo <code>dark</code>.
            </p>
            <PreviewerComponent name="BlingPay Button | Dark">
              <BlingPayButton cardBrands="mastercard, visa" height={40} locale="es-ES" theme="dark" />
            </PreviewerComponent>
            <pre className="bling-light-bg-3 dark:bling-dark-bg-1 bling-light-text dark:text-white p-4 rounded-md border bling-light-border dark:bling-dark-border">{`<blingpay-button dark></blingpay-button>`}</pre>
</div>


            <div className="dark:text-white bling-light-text gap-2 flex flex-col justify-start bling-light dark:bling-dark-bg-2 items-stretch border bling-light-border dark:bling-dark-border rounded-md p-2">

            {/* Height */}
            <h6 className="w-fit bling-light-text dark:text-white px-4 p-2 rounded-md dark:bling-dark bling-light">Height:</h6>
            <p className="bling-light-text dark:text-white text-xs p-2">
              Puede ajustar la altura del botón utilizando la propiedad <code>height</code>.
            </p>
            <PreviewerComponent name="BlingPay Button | Height">
              <BlingPayButton cardBrands="mastercard, visa" height={60} locale="es-ES" theme="light" />
            </PreviewerComponent>
            <table className="table-auto w-full text-left mt-2">
              <thead>
                <tr>
                  <th className="border bling-light-border dark:bling-dark-border text-sm p-2">Property</th>
                  <th className="border bling-light-border dark:bling-dark-border text-sm p-2">Attribute</th>
                  <th className="border bling-light-border dark:bling-dark-border text-sm p-2">Minimum Value</th>
                  <th className="border bling-light-border dark:bling-dark-border text-sm p-2">Maximum Value</th>
                  <th className="border bling-light-border dark:bling-dark-border text-sm p-2">Default</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border bling-light-border dark:bling-dark-border text-xs p-2">height</td>
                  <td className="border bling-light-border dark:bling-dark-border text-xs p-2">height</td>
                  <td className="border bling-light-border dark:bling-dark-border text-xs p-2">32</td>
                  <td className="border bling-light-border dark:bling-dark-border text-xs p-2">60</td>
                  <td className="border bling-light-border dark:bling-dark-border text-xs p-2">40</td>
                </tr>
              </tbody>
            </table>
            <pre className="bling-light-bg-3 dark:bling-dark-bg-1 bling-light-text dark:text-white p-4 rounded-md border bling-light-border dark:bling-dark-border">{`<blingpay-button height="60"></blingpay-button>`}</pre>
           </div>
           <div className="dark:text-white bling-light-text gap-2 flex flex-col justify-start bling-light dark:bling-dark-bg-2 items-stretch border bling-light-border dark:bling-dark-border rounded-md p-2">

            {/* Width */}
            <h6 className="w-fit bling-light-text dark:text-white px-4 p-2 rounded-md dark:bling-dark bling-light">Width:</h6>
            <p className="bling-light-text dark:text-white text-xs p-2">
              Puede ajustar el ancho del botón utilizando la propiedad <code>width</code>.
            </p>
            <PreviewerComponent name="BlingPay Button | Width">
              <BlingPayButton cardBrands="mastercard, visa" width={'100%'} locale="es-ES" theme="light" />
            </PreviewerComponent>
            <table className="table-auto w-full text-left mt-2">
              <thead>
                <tr>
                  <th className="border bling-light-border dark:bling-dark-border text-sm p-2">Property</th>
                  <th className="border bling-light-border dark:bling-dark-border text-sm p-2">Attribute</th>
                  <th className="border bling-light-border dark:bling-dark-border text-sm p-2">Minimum Value</th>
                  <th className="border bling-light-border dark:bling-dark-border text-sm p-2">Maximum Value</th>
                  <th className="border bling-light-border dark:bling-dark-border text-sm p-2">Default</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border bling-light-border dark:bling-dark-border text-xs p-2">width</td>
                  <td className="border bling-light-border dark:bling-dark-border text-xs p-2">width</td>
                  <td className="border bling-light-border dark:bling-dark-border text-xs p-2">80</td>
                  <td className="border bling-light-border dark:bling-dark-border text-xs p-2">100%</td>
                  <td className="border bling-light-border dark:bling-dark-border text-xs p-2">auto</td>
                </tr>
              </tbody>
            </table>
            <pre className="bling-light-bg-3 dark:bling-dark-bg-1 bling-light-text dark:text-white p-4 rounded-md border bling-light-border dark:bling-dark-border">{`<blingpay-button width="100%"></blingpay-button>`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsBlingPayButton;
