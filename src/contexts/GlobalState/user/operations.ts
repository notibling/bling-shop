import { AxiosError } from 'axios';
import { axios } from '@/common/AxiosClient';

import { IUser } from '@/entities/User';
import { IUserShipping } from '@/entities/UserShipping';
import { Response } from '@/entities/Response';


export type GetCurrentUserResponse = Response<{
  user: IUser;
  userShipping: IUserShipping[];
}>;


interface IUpdateUserBody {
  user?: Partial<IUser>;
  userShipping?: Partial<IUserShipping>[];
}

export type IUpdateUserResponse = Response<{
  user: IUser;
  userShipping: IUserShipping[];
}>

export const getCurrentUser = async(): Promise<GetCurrentUserResponse> => {
  try {
    const response = await axios.get<GetCurrentUserResponse>('/user/current');

    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    return err.response?.data as GetCurrentUserResponse;
  }
};


export const updateUser = async(data: IUpdateUserBody): Promise<IUpdateUserResponse> => {
  const { data: _data } = await axios.put<IUpdateUserResponse>('/user', data);

  return _data;
};

export const getInitialStepsFulfilled = (user: IUser) => {
  return [
    user.lastName,
    user.birth,
    user.sex,
    user.country,
    user.residenceCountry,
    user.legalIdentification,
    user.type
  ].every((condition) => condition);
};