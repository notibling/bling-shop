'use client';
import React from 'react';
import Link from 'next/link';

import { Logo, Title, Item, Separator } from '@/components/atoms';
import { Frozen, SearchBar } from '@/components/molecules';
import { useFilterMenuItems } from './hooks/useFilterMenuItems';


export const SideBar = () => {
  const { setSearch, menuItems } = useFilterMenuItems();

  return (
    <>
      <Logo color="dark" className="self-center p-5" />
      <Title level="h6" title="Buscador general" className="self-center text-xs" tooltip tooltipClassName="text-[12px] !w-[250px] p-2" tooltipContent="E: Empresas | P: Productos | C: Categorias | F: Flags" />
      <Frozen deps={[]}>
        <SearchBar onChange={(value) => setSearch(value)} placeholder="Busca la acción que requieras" />
      </Frozen>
      {
        menuItems.map((group, groupIndex) => (
          <React.Fragment key={group.label + groupIndex}>
            <Separator textStart={group.label} textClassName='text-xs' />
            {
              group.items.map((item, index) => (
                <Link key={item.label + index} href={item.href}><Item content="icon" icon={item.icon} text={item.label} /></Link>
              ))
            }
          </React.Fragment>
        ))
      }
    </>
  )
}