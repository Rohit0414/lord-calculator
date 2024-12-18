import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import espanolTranslations from './utils/translations/espanol.json';
import englishTranslations from './utils/translations/english.json';
import hindiTranslations from "./utils/translations/hindi.json";
import frenchTranslations from "./utils/translations/french.json";
import germanTranslations from "./utils/translations/german.json";
import italianTranslations from "./utils/translations/italian.json";
import portugueseTranslations from "./utils/translations/portuguese.json";
import bengaliTranslations from "./utils/translations/bengali.json";
import koreanTranslations from "./utils/translations/korean.json";
import russianTranslations from "./utils/translations/russian.json";
import tamilTranslations from "./utils/translations/tamil.json";
import malayalamTranslations from "./utils/translations/malayalam.json";
import arabicTranslations from "./utils/translations/arabic.json";
import japneaseTranslations from './utils/translations/japnease.json';

const resources = {
  en: {
    translation: englishTranslations,
  },
  es: {
    translation: espanolTranslations,
  },
  hi: {
    translation: hindiTranslations,
  },
  fr: {
    translation: frenchTranslations,
  },
  de:{
    translation: germanTranslations,
  },
  it:{
    translation: italianTranslations,
  },
  pt:{
    translation: portugueseTranslations,
  },
  bn:{
    translation: bengaliTranslations,
  },
  ru:{
    translation: russianTranslations,
  },
  ko:{
    translation: koreanTranslations,
  },
  ta:{
    translation: tamilTranslations,
  },
  ml:{
    translation: malayalamTranslations,
  },
  ar:{
    translation: arabicTranslations,
  },
  ja:{
    translation: japneaseTranslations,
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
