"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, translations } from "@/content/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  tArray: (key: string) => string[];
  tObject: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("uk");

  useEffect(() => {
    // Загружаем сохраненный язык из localStorage
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "uk" || savedLanguage === "ru")) {
      setLanguageState(savedLanguage);
    } else {
      // Если нет сохраненного языка, устанавливаем украинский по умолчанию
      localStorage.setItem("language", "uk");
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key; // Возвращаем ключ, если перевод не найден
      }
    }

    return typeof value === "string" ? value : key;
  };

  const tArray = (key: string): string[] => {
    const keys = key.split(".");
    let value: any = translations[language];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return [];
      }
    }

    return Array.isArray(value) ? value : [];
  };

  const tObject = (key: string): any => {
    const keys = key.split(".");
    let value: any = translations[language];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return {};
      }
    }

    return typeof value === "object" ? value : {};
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t, tArray, tObject }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
