import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRoundedMagniferZoomIn = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      d="M17.82 19.7c-.09-1.094.816-2.008 1.9-1.918.189.016.414.085.643.154l.067.02.06.018c.21.064.42.127.58.213a1.786 1.786 0 0 1 .637 2.549c-.1.152-.255.308-.41.464l-.045.045-.044.045c-.155.157-.31.313-.46.414a1.754 1.754 0 0 1-2.527-.643c-.086-.161-.148-.373-.211-.585l-.018-.06-.02-.068c-.07-.231-.137-.458-.152-.648"
      clipRule="evenodd"
    />
    <path d="M11.157 20.313a9.157 9.157 0 1 0 0-18.313 9.157 9.157 0 0 0 0 18.313" opacity={0.5} />
    <path fillRule="evenodd" d="M11.156 8.024c.4 0 .723.324.723.723v1.687h1.687a.723.723 0 1 1 0 1.446h-1.687v1.687a.723.723 0 0 1-1.446 0V11.88H8.746a.723.723 0 1 1 0-1.446h1.687V8.747c0-.399.324-.723.723-.723" clipRule="evenodd" />
  </svg>
);
export default SvgRoundedMagniferZoomIn;
