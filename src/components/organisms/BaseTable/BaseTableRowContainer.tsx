import React from 'react';
import classNames from 'classnames';

interface BaseTableRowContainer {
  children: React.ReactNode;
  width?: number;
  ellipsis?: boolean;
  as?: keyof React.ReactHTML;
}
const BaseTableRowContainer: React.FC<BaseTableRowContainer> = ({ children, ellipsis, width, as = 'p' }) => {
  const Container = (props: any) => React.createElement(as, { ...props });

  return (
    <Container className={classNames({ 'text-ellipsis truncate': ellipsis })} style={{ ...(width ? { maxWidth: width } : {}) }}>
      {children}
    </Container>
  );
};

export { BaseTableRowContainer };
