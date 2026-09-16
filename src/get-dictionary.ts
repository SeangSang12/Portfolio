import type { Locale } from './i18n-config';

// We enumerate all dictionaries here for better security and performance
const dictionaries = {
  en: () => import('../i18n/locales/en.json').then((module) => module.default),
  kh: () => import('../i18n/locales/km.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]?.() ?? dictionaries.en();
};
