'use client';

import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../../i18n/locales/en.json';
import kmTranslation from '../../i18n/locales/km.json';
import { useMemo } from 'react';

export default function I18nProvider({ children, locale }: { children: React.ReactNode, locale: string }) {
  const i18n = useMemo(() => {
    const instance = i18next.createInstance();
    instance
      .use(initReactI18next)
      .init({
        resources: {
          en: { translation: enTranslation },
          kh: { translation: kmTranslation },
        },
        lng: locale,
        fallbackLng: 'en',
        interpolation: {
          escapeValue: false,
        },
      });
    return instance;
  }, [locale]);

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}
