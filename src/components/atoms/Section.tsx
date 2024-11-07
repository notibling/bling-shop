import React, { ReactNode, forwardRef } from 'react';
import classNames from 'classnames';

interface Props {
  children?: ReactNode;
  className?: string;
  classNameContainer?: string;
  Empty?: boolean | undefined;
}

const Section = forwardRef(({ children, className, Empty, classNameContainer }: Props, ref: any) => {
  return (
    <>
      <section ref={ref} className={classNames('w-full h-auto box-border dark:bling-dark-bg-1 bling-light-bg-3 flex flex-col flex-grow py-1 px-2 lg:px-0 justify-center items-center', className)}>
        {!Empty && <div className={classNames('w-full lg:w-10/12 h-auto box-border flex flex-col lg:flex-row items-center my-2 dark:bling-dark-bg-2 bling-light justify-center rounded-brand p-2  gap-4', classNameContainer)}>{children}</div>}
        {Empty && children}
      </section>
    </>
  );
});
export { Section };
