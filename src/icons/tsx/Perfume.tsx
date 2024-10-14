import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPerfume = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path
      fillRule='evenodd'
      d='M7 5.75h.107c.097.001.21.002.306 0 .139-.005.327-.018.516-.076.202-.063.437-.188.608-.435.166-.238.213-.505.213-.739s-.047-.501-.213-.74a1.14 1.14 0 0 0-.609-.434 2 2 0 0 0-.516-.075 8 8 0 0 0-.412 0z'
      clipRule='evenodd'
      opacity={0.4}
    />
    <g opacity={0.5}>
      <path d='M2.147 13.059A7 7 0 0 0 2 14.495c0 1.915.766 3.662 2.028 4.987.45.473.675.709 1.618 1.114C6.59 21 7.24 21 8.542 21h2.916c1.302 0 1.952 0 2.896-.404.943-.405 1.168-.641 1.619-1.114C17.233 18.157 18 16.41 18 14.495q0-.199-.01-.395c-.598-.316-1.6-.612-2.676-.784-3.07-.491-4.688 1.988-7.78 1.653-2.215-.24-3.936-1.318-5.387-1.91' />
      <path d='M7.534 14.969c3.092.335 4.71-2.144 7.78-1.653 1.075.172 2.078.468 2.675.784C17.77 10.144 14.277 7 10 7c-3.894 0-7.138 2.606-7.853 6.059 1.45.592 3.172 1.67 5.387 1.91' />
    </g>
    <path d='M13 7.545V5c0-1.414 0-2.121-.44-2.56C12.122 2 11.415 2 10 2s-2.121 0-2.56.44c-.201.2-.31.456-.37.81h.038c.096-.001.209-.002.304.001.14.004.328.017.516.075.203.063.438.188.61.435.165.238.212.505.212.739s-.047.501-.213.74a1.14 1.14 0 0 1-.608.434 2 2 0 0 1-.516.075c-.096.003-.21.002-.306.002H7v1.794A8.5 8.5 0 0 1 10 7c1.06 0 2.074.193 3 .545M2.147 13.059A7 7 0 0 0 2 14.495c0 1.915.766 3.662 2.028 4.987.45.473.675.709 1.618 1.114C6.59 21 7.24 21 8.542 21h2.916c1.302 0 1.952 0 2.896-.404.943-.405 1.168-.641 1.619-1.114C17.233 18.157 18 16.41 18 14.495q0-.199-.01-.395c-.598-.316-1.6-.612-2.676-.784-3.07-.491-4.688 1.988-7.78 1.653-2.215-.24-3.936-1.318-5.387-1.91M20.548 5.378c1.253.647 1.8 1.897 1.221 2.792-.579.896-2.064 1.098-3.317.452s-1.8-1.897-1.221-2.792c.579-.896 2.064-1.098 3.317-.452' />
    <path d='M13 5.75h1.32c.66 0 1.31.154 1.9.449l.78.39c.005-.266.08-.525.23-.76.14-.215.331-.39.56-.523l-.899-.449a5.75 5.75 0 0 0-2.571-.607H13z' opacity={0.5} />
  </svg>
);
export default SvgPerfume;
