import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMonitorCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M16 2h-1c-1.414 0-2.121 0-2.56.44C12 2.878 12 3.585 12 5s0 2.121.44 2.56C12.878 8 13.585 8 15 8h1c1.414 0 2.121 0 2.56-.44.285-.284.386-.681.42-1.31H19l1.615.673c.627.261.94.391 1.162.243C22 7.018 22 6.678 22 6V4c0-.678 0-1.018-.223-1.166-.222-.148-.535-.018-1.162.243L19 3.75h-.02c-.035-.629-.135-1.026-.42-1.31C18.122 2 17.415 2 16 2M7.985 17.5c-2.84 0-4.26 0-5.141-.879C2.272 16.052 2.07 15.258 2 14v-1h20v1c-.07 1.258-.272 2.052-.844 2.621-.882.879-2.301.879-5.14.879h-3.263v4h3.262c.416 0 .753.336.753.75s-.337.75-.753.75h-8.03a.75.75 0 0 1-.753-.75c0-.414.337-.75.753-.75h3.262v-4z' />
    <path
      d='M22 10v1c0 .552-.006 1.55-.013 2H2c-.007-.45 0-1.448 0-2v-1c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h.918c-.205.384-.3.786-.35 1.154-.068.51-.068 1.128-.068 1.764v.164c0 .636 0 1.254.068 1.764.078.575.266 1.23.81 1.775.545.545 1.201.733 1.776.81.51.07 1.128.07 1.764.069h1.164c.636 0 1.254 0 1.764-.068.575-.078 1.23-.266 1.775-.81q.174-.176.302-.362l.115.048.057.023c.26.109.59.246.885.321.233.06.606.122 1.018.027Q22 9.298 22 10'
      opacity={0.5}
    />
  </svg>
);
export default SvgMonitorCamera;
