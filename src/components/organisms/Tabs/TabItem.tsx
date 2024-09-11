import React from 'react';
import { useTabController } from './useTabController';
import { typeCast } from '@/utils/types';
import classNames from 'classnames';


interface ITabItemProps {
  trigger?: string | React.ReactNode;
  children?: string | React.ReactNode | React.ReactNode[]
  id: string;
}

interface ITabItemInjectedProps {
  controller: ReturnType<typeof useTabController>
}

const TabItem: React.FC<ITabItemProps> = ({ children, id, trigger, ...props }) => {
  const { controller } = typeCast<ITabItemInjectedProps>(props);

  const isActive = controller.activeTab === id;

  return (
    <a role="tab" className={classNames('tab','flex-grow','flex-shrin-0',{ 'tab-active animate-tabsBorderFadeIn': isActive })} onClick={() => controller.setTab(id)}>
      {trigger}
    </a>
  )
}

export { TabItem, type ITabItemProps };