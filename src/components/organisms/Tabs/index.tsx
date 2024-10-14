'use client';
import classNames from 'classnames';
import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useRef } from 'react';
import { ITabItemProps, TabItem } from './TabItem';
import { useTabController } from './useTabController';

interface ITabsProps {
  children: React.ReactElement | React.ReactElement[]
  defaultTab?: string;
}

type IController = ReturnType<typeof useTabController> | null;

interface ITabsComponent extends React.ForwardRefExoticComponent<ITabsProps & React.RefAttributes<IController>> {
  Item: typeof TabItem;
}

const TabsComponent = forwardRef<IController, ITabsProps>(({ children, defaultTab }, ref) => {
  const controller = useTabController();
  const tabContents = useRef<Record<string, React.ReactNode>>({});

  useImperativeHandle(ref, () => (controller));

  const clonedChildren = React.Children.map(children, (tabItem) => {
    const _itemProps = tabItem.props as ITabItemProps;
    const children = React.cloneElement(<div className={classNames('w-full', 'py-4', 'animate-fadeIn', 'text-blue-600', 'dark:text-blue-300')}>
      {_itemProps.children}
    </div>);
    tabContents.current[_itemProps.id] = children ?? null;
    return React.cloneElement(tabItem, {
      controller
    });
  });

  const renderedTab = useMemo(() =>
    tabContents.current[controller.activeTab ?? ''] ?? null,
  [controller.activeTab]
  );

  useEffect(() => {
    controller.setTab(defaultTab);
  }, [defaultTab]);

  return (
    <>
      <div
        role='tablist' 
        className={classNames(
          
          'w-full',
          'h-10',
          'tab',
          'flex-grow',
          'tabs', 'tabs-lifted', 'tabs-md',
          'overflow-hidden',
          'text-slate-200', 
          'dark:text-slate-100',
          '[tab-bg:yellow]',
          '--tab-border:orange',
          'tab:!bg-red-200',
          'border-red-200'
        
        )}
      >
        {controller && clonedChildren}
      </div>

      {renderedTab}
    </>
  );
});

const Tabs = TabsComponent as ITabsComponent;

Tabs.Item = TabItem;

export { Tabs };
