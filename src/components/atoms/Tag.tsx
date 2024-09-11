import React from 'react';

interface TagProps extends React.HTMLAttributes<HTMLElement> {
  as: keyof React.ReactHTML;
}

export const Tag: React.FC<TagProps> = ({ as, ...restProps }) => {
  return React.createElement(as, restProps);
};
