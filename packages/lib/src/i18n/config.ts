import { type i18n } from 'i18next';
import en from './en/translation.json';
import fr from './fr/translation.json';
import { translationNs } from './ns';

export function addTranslations(n: i18n) {
  n.addResourceBundle('en', translationNs, en, true, true);
  n.addResourceBundle('fr', translationNs, fr, true, true);
}