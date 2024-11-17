import React from 'react';
import { IUser } from '@/entities/User';
import { usePersistState } from '@/hooks/usePersistState';

interface AuthState {
  user: IUser;
  accessToken: string;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  setAccessToken: React.Dispatch<React.SetStateAction<string>>;
}

const authDefaultValue: AuthState = {
  user: {} as IUser,
  accessToken: '',
  setAccessToken: () => { },
  setUser: () => { }
};

function useAuth(): AuthState {
  const [user, setUser] = usePersistState<IUser>('@auth.user', {} as IUser); // Default user value
  const [accessToken, setAccessToken] = usePersistState<string>('@auth.accessToken', '');

  return {
    user,
    setUser,
    accessToken,
    setAccessToken
  };
}

export { useAuth, authDefaultValue, type AuthState };

