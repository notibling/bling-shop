import { IUser } from "@/entities/User";
import { usePersistState } from "@/hooks/usePersistState";

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
}

function useAuth(): AuthState {
  const [user, setUser] = usePersistState<AuthState['user']>('@auth.user');
  const [accessToken, setAccessToken] = usePersistState<string>('@auth.accessToken');

  return {
    user: user as any,
    setUser,
    accessToken: accessToken as any,
    setAccessToken
  };
}

export { useAuth, authDefaultValue, type AuthState };