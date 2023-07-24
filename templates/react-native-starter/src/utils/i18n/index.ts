import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import tr from './tr.json';

const resources = {
  en: {
    translation: en,
  },
  tr: {
    translation: tr,
  },
};

export const supportedLanguages = [
  {
    nativeLabel: 'English',
    label: 'English',
    value: 'en',
    emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    flagUrl:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ENGLAND.svg',
  },
  {
    nativeLabel: 'Türkçe',
    label: 'Turkish',
    value: 'tr',
    emoji: '🇹🇷',
    flagUrl:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TR.svg',
  },
];

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  compatibilityJSON: 'v1',
  interpolation: {
    escapeValue: false,
  },
});
