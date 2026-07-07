'use client';

import { useLanguage } from '@/context/language-context';

export const useTranslation = () => {
  const { translations } = useLanguage();

  const t = (key: string, options?: { [key: string]: string | number }) => {
    const keys = key.split('.');
    let value = translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if not found
      }
    }

    if (typeof value === 'string' && options) {
      return Object.entries(options).reduce(
        (acc, [optKey, optValue]) => acc.replace(`{${optKey}}`, String(optValue)),
        value
      );
    }
    
    return value;
  };

  return { t };
};
