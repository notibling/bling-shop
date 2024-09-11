import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDiploma = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      d="M2 8v4c0 2.828 0 4.243.879 5.121.476.477 1.11.695 2.04.795.075-.1.145-.179.195-.234.116-.128.263-.273.406-.414l1.493-1.472.551-.558a4.501 4.501 0 0 1 8.872 0l.551.558 1.493 1.472c.143.141.29.286.406.414.05.055.12.134.194.234.931-.1 1.565-.318 2.041-.795C22 16.243 22 14.828 22 12V8c0-2.828 0-4.243-.879-5.121C20.243 2 18.828 2 16 2H8c-2.828 0-4.243 0-5.121.879C2 3.757 2 5.172 2 8"
      opacity={0.5}
    />
    <path d="M7 8.75a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5zM8.25 6A.75.75 0 0 1 9 5.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 6M9.001 15.917 9 16a3 3 0 1 0 .001-.083M7.676 17.25l-1.08 1.065c-.325.32-.487.48-.543.614a.643.643 0 0 0 .26.813c.122.071.342.093.783.138.248.025.373.037.477.075a.84.84 0 0 1 .5.494c.039.103.052.225.077.47.045.435.068.652.14.773a.66.66 0 0 0 .824.256c.137-.056.3-.215.623-.535l1.08-1.07a4.51 4.51 0 0 1-3.141-3.094M13.183 20.343l1.08 1.07c.324.32.486.48.623.535.313.126.66.018.824-.256.072-.12.095-.338.14-.772.025-.246.038-.368.077-.47a.84.84 0 0 1 .5-.495c.105-.038.229-.05.477-.075.44-.045.661-.067.783-.138a.643.643 0 0 0 .26-.812c-.056-.136-.218-.296-.542-.615l-1.08-1.066a4.51 4.51 0 0 1-3.142 3.094" />
  </svg>
);
export default SvgDiploma;
