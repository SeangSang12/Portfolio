import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json';
import kmTranslation from './locales/km.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      EN: {
        translation: enTranslation,
      },
      KH: {
        translation: kmTranslation,
      },
    },
    lng: 'EN', // Default language
    fallbackLng: 'EN',
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
