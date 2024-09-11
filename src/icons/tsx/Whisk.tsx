import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWhisk = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      d="M17.952 2.874c-1.812-.407-4.017.2-5.658 1.84-1.58 1.58-2.658 4.174-2.583 6.272q.003.088.01.175c.184-.354.399-.712.627-1.063.971-1.493 2.316-3.043 3.229-3.956.914-.914 2.271-2.066 3.579-2.842.261-.155.528-.3.796-.426m3.127.047c-2.6-2.6-7.087-2.026-9.846.733-1.848 1.848-3.112 4.836-3.02 7.385.045 1.27.431 2.504 1.337 3.41.907.906 2.141 1.293 3.412 1.338 2.55.091 5.537-1.173 7.384-3.02 2.759-2.76 3.334-7.245.733-9.846m-1.06 1.06c-.046-.045-.178-.134-.587-.05-.403.082-.921.31-1.51.659-1.169.694-2.428 1.757-3.285 2.613s-2.13 2.327-3.031 3.712c-.455.699-.785 1.332-.937 1.83-.076.248-.095.423-.087.533a.3.3 0 0 0 .018.093.1.1 0 0 0 .011.018.1.1 0 0 0 .017.01.3.3 0 0 0 .094.018c.11.009.285-.01.533-.086.498-.152 1.131-.483 1.83-.937 1.386-.901 2.855-2.174 3.713-3.031.856-.856 1.919-2.116 2.612-3.284.35-.59.577-1.108.66-1.51.083-.41-.006-.542-.052-.587m-7.18 10.298c.354-.185.712-.399 1.063-.627 1.493-.971 3.043-2.315 3.956-3.228.915-.915 2.066-2.272 2.842-3.58.155-.261.3-.528.426-.796.407 1.812-.2 4.017-1.84 5.658-1.58 1.58-4.174 2.657-6.27 2.582z"
      clipRule="evenodd"
    />
    <path d="M8.269 11.705c.141 1.029.535 1.998 1.281 2.744.747.747 1.717 1.14 2.745 1.282L6.86 21.166a2.847 2.847 0 0 1-4.026-4.026z" opacity={0.5} />
  </svg>
);
export default SvgWhisk;