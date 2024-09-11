import { axios } from "@/common/AxiosClient"
import { LocalStorage } from "@/common/LocalStorage";
import { Response } from "@/entities/Response";
import { IUser } from "@/entities/User";

type SignInResponse = Response<{
  token: string;
  user: IUser;
}>

export const signIn = async (email: string, password: string):
  Promise<SignInResponse> => {
  const response = await axios.post('/auth/signIn', { email, password });

  return response.data;
}

export const register = async (name: string, email: string, password: string):
  Promise<SignInResponse> => {
  const response = await axios.post('/auth/signUp', { name, email, password });

  return response.data;
}


export const storeAuth = (token: string, user: IUser) => {
  const data: Record<string, any> = LocalStorage.getJsonItem('@auth') || {};

  console.log(data);
  if (token) data.token = token;
  if (user) data.user = user;

  LocalStorage.setItem('@auth', JSON.stringify(data));
}

export const signout = () => {
  LocalStorage.removeItem('@auth.user');
  LocalStorage.removeItem('@auth.accessToken');
}