import React from 'react';
declare global {
   // eslint-disable-next-line 
  namespace JSX {
    // eslint-disable-next-line
    interface IntrinsicElements {
      marquee?: React.HTMLAttributes<HTMLElement>;
    }
  }
}
