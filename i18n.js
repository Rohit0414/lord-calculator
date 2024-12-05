import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import espanolTranslations from './utils/translations/espanol.json';
import englishTranslations from './utils/translations/english.json';

const resources = {
  en: {
    translation: englishTranslations,
  },
  es: {
    translation: espanolTranslations,
  },
};
console.log(resources);
console.log("Detected language:", i18n.language);
console.log(i18n.t('your.translation.key')); 


if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'en',
      ns: ['translation'],
      defaultNS: 'translation',
      interpolation: {
        escapeValue: false,
      },
      debug: process.env.NODE_ENV === 'development',
    });
}

export default i18n;
