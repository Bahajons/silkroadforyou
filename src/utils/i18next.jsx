import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import languageEN from '../locate/en.json';
import languageRU from '../locate/ru.json';
import languageUZ from '../locate/uz.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: languageEN },
      uz: { translation: languageUZ },
      ru: { translation: languageRU },
    },
    lng: localStorage.getItem("language") || "en", // set the default language
    fallbackLng: "en", // fallback to English if translation missing
    interpolation: {
      escapeValue: false // react already safe from xss
    }
  });

export default i18n;