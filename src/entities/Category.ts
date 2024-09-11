export interface ICategory {
  id: number;
  name: string;
  description: string;
  parentId: number | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;

  parent?: ICategory;
  children?: INestedCategories[];
}
export type INestedCategories = ICategory & { children: INestedCategories[] };
