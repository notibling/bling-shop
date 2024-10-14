
interface IAttributeValue {
  id: number;
  value: string;
}

interface IAttribute {
  id: number;
  name: string;
  description: string;
  format: 'string' | 'number' | 'boolean' | 'json' | 'json_array';
  type: string[];
  values: IAttributeValue[];
}


export { type IAttribute, type IAttributeValue };