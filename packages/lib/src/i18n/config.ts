import i18next from 'i18next';
import en from './en/translation.json';
import fr from './fr/translation.json';
import { translationNs } from './ns';

export function addTranslations() {
  i18next.addResourceBundle('en', translationNs, en, true, true);
  i18next.addResourceBundle('fr', translationNs, fr, true, true);
}