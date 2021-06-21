import i18n from 'i18next';
import Backend from 'i18next-fs-backend';

i18n
  .use(Backend)
  .init({
    backend: {
      loadPath: './locales/{{lng}}/{{ns}}.json',
      addPath: './locales/{{lng}}/{{ns}}.missing.json',
    },
    lng: 'en',
    fallbackLng: 'en',
    saveMissing: true,
    debug: true,
    interpolation: {
      escapeValue: false
    },
  });
  
export default i18n;