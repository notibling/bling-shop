'use client'
import React, { useContext } from 'react';
import { useTheme, ThemeState, themeDefaultValue } from './theme/state';
import { AuthState, authDefaultValue, useAuth } from './auth/state';

interface GlobalContext {
  auth: AuthState;
  theme: ThemeState;
}

const GlobalState = React.createContext<GlobalContext>({ auth: authDefaultValue, theme: themeDefaultValue });

const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const auth = useAuth();
  const theme = useTheme();

  return <GlobalState.Provider value={{ auth, theme }}>{children}</GlobalState.Provider>
}


function useGlobalState() {
  return useContext(GlobalState);
}

export { GlobalProvider, useGlobalState };