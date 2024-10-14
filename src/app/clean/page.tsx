import React from 'react';

import { Icon } from '@/components/atoms';

import { BaseTable } from '@/components/organisms/BaseTable';
import { Dropdown, DropdownItem } from '@/components/organisms';

const Clean = ({}) => {
  return (
    <div>
      <Icon name='UserCircle' />

      <BaseTable
        headers={['prueba conceptual', '2 dasd', '231 ']}
        rows={[
          {
            data: [<p>Hello world</p>, <strong>LOrem ipsum</strong>, <Dropdown trigger={<button>Holas</button>} >

              <DropdownItem>
              Hello world
              </DropdownItem>
            </Dropdown>]
          }
        ]}
      />
    </div>
  );
};

export default Clean;
