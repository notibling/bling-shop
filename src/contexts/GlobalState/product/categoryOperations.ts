import { ICategory, INestedCategories } from "@/entities/Category";
import { Response } from "@/entities/Response";

import { axios } from "@/common/AxiosClient";

type IFetchCategories = Response<{
  categories: INestedCategories[]
}>;
const fetchCategories = async (nested: boolean): Promise<IFetchCategories> => {
  const response = await axios.get('/products/categories', { params: { nested: JSON.stringify(nested) } });

  return response.data;
}


type ICreateCategory = Response<{}>;
interface ICreateCategoryPayload extends Partial<ICategory> { }
const createCategory = async (payload: ICreateCategoryPayload): Promise<ICreateCategory> => {
  const response = await axios.post('/products/categories', payload);

  return response.data;
}


type IUpdateCategory = Response<{}>;
interface IUpdateCategoryPayload extends Partial<ICategory> { }
const updateCategory = async (payload: IUpdateCategoryPayload): Promise<IUpdateCategory> => {
  const response = await axios.put('/products/categories', payload);

  return response.data;
}


type IGetCategory = Response<{
  category: ICategory
}>;
const getCategory = async (id: number): Promise<IGetCategory> => {
  const response = await axios.get<IGetCategory>(`/products/v2/categories/${id}`);


  return response.data;
}



export {
  fetchCategories, getCategory, createCategory, updateCategory,
  type IFetchCategories, type IGetCategory,
  type ICreateCategory, type ICreateCategoryPayload,
  type IUpdateCategory, type IUpdateCategoryPayload,
}