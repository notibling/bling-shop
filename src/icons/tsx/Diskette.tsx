import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDiskette = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      d="M20.536 20.536C22 19.07 22 16.714 22 12c0-.341 0-.512-.015-.686a4.04 4.04 0 0 0-.921-2.224 8 8 0 0 0-.483-.504l-5.167-5.167c-.247-.247-.37-.37-.504-.483a4.04 4.04 0 0 0-2.224-.92C12.512 2 12.342 2 12 2 7.286 2 4.929 2 3.464 3.464 2 4.93 2 7.286 2 12s0 7.071 1.464 8.535c.685.685 1.563 1.05 2.786 1.243l1.5.153C8.906 22 10.3 22 12 22s3.094 0 4.25-.069l1.5-.153c1.223-.194 2.102-.558 2.785-1.242"
      opacity={0.5}
    />
    <path d="M7 7.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM13.052 16.25c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.726.456.455.642 1.022.726 1.65.08.594.08 1.343.08 2.242v.833l-1.5.14V21c0-.964-.002-1.612-.067-2.095-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066h-2c-.964 0-1.612.002-2.095.067-.461.062-.659.169-.789.3s-.237.327-.3.788c-.064.483-.066 1.131-.066 2.095v.926l-1.5-.149v-.829c0-.899 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.595-.08 1.345-.08 2.243-.08z" />
  </svg>
);
export default SvgDiskette;
