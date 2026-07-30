import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { L, LArr, Locale } from "./content";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (value: L) => string;
  tl: (value: LArr) => string[];
};

const I18nContext = createContext<Ctx>({
  locale: "es",
  setLocale: () => {},
  t: (v) => v.es,
  tl: (v) => v.es,
});

const STORAGE_KEY = "bc-locale";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "es") setLocaleState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  };

  return (
    <I18nContext.Provider
      value={{ locale, setLocale, t: (v) => v[locale], tl: (v) => v[locale] }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
