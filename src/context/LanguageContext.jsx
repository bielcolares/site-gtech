'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext({
  lang: 'pt',
  setLang: () => {},
});

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('pt');

  useEffect(() => {
    const stored = localStorage.getItem('gtech-lang');
    if (stored === 'en' || stored === 'pt') {
      setLangState(stored);
    }
  }, []);

  const setLang = (newLang) => {
    setLangState(newLang);
    localStorage.setItem('gtech-lang', newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
