import i18next from 'i18next';
import en from './en/translation.json';
import fr from './fr/translation.json';
import { initReactI18next  } from 'react-i18next';
import { translationNs } from './ns';

i18next
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        [translationNs]: en
      },
      fr: {
        [translationNs]: fr
      },
    },
  });

export default i18next;