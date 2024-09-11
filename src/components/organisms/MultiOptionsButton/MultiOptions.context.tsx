import React, { createContext, useEffect, useState } from 'react';

interface IMultiOptionsState {
  activeId?: number;
  setActiveId: React.Dispatch<React.SetStateAction<number | undefined>>
}

const MultiOptionsContext = createContext<IMultiOptionsState>({
  activeId: undefined,
  setActiveId: () => {}
});

interface IMultiOptionsProviderProps {
  children: React.ReactNode;
}

const MultiOptionsProvider: React.FC<IMultiOptionsProviderProps> = ({ children }) => {
  const [activeId, setActiveId] = useState<number | undefined>();

  useEffect(() => { 
    console.log({activeId})
  }, [activeId])

  return (
    <MultiOptionsContext.Provider
      value={{
        activeId,
        setActiveId
      }}
    >
      {children}
    </MultiOptionsContext.Provider>
  );
};


function useMultiOptions() {
  const context = React.useContext(MultiOptionsContext);

  return context;
}


export { MultiOptionsProvider, useMultiOptions };