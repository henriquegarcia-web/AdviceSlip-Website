import {
  createContext, useContext, useEffect, useMemo, useState,
} from 'react';

const ApplicationContext = createContext();

export function useAppContext() {
  return useContext(ApplicationContext);
}

export function ApplicationProvider({ children }) {
  
  const [mode, setMode] = useState(false) // 'random' --> true / 'inOrder' --> false 
  const [language, setLanguage] = useState(false) // 'pt-br' --> true / 'english' --> false

  const value = useMemo(() => ({
    mode,
    setMode,
    language,
    setLanguage,
  }), []);

  return (
    <ApplicationContext.Provider value={value}>
      { children }
    </ApplicationContext.Provider>
  );
}
