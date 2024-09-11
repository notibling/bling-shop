import Axios, { AxiosError } from 'axios';
import { Environment } from './Environment';
import { LocalStorage } from './LocalStorage';
import { PersistedState } from '@/hooks/usePersistState';

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
});

axios.interceptors.request.use(function (config) {

  if (typeof window === 'undefined') return config;

  const persistedToken = LocalStorage.getJsonItem<PersistedState<string>>('@auth.accessToken');

  if (persistedToken) {
    config.headers.Authorization = 'Bearer ' + persistedToken.value;
  }

  return config;
})

axios.interceptors.response.use(function (config) {

  return config
}, function (error: AxiosError) {
  console.log(error)
  if (typeof window !== 'undefined') {
    const protectedRoute = window.location.href.match(/\/dashboard/g);
    if (error?.response?.status === 401 && protectedRoute)
      window.location.href = '/';
  }
  return error;
});

export { axios }