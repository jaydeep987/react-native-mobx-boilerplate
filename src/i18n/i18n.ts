import LocalizedString, { LocalizedStringsMethods } from 'react-native-localization';

import { enUs } from './enUs';
import { gu } from './gu';
import { hi } from './hi';
import { ja } from './ja';

export class I18NManager {
  private stringMethods: LocalizedStringsMethods | undefined;

  constructor() {
    this.stringMethods = undefined;
  }

  initializeI18N() {
    this.stringMethods = new LocalizedString({
      'en-US': enUs,
      gu,
      hi,
      ja,
    });
  }

  setLocale(language: string): void {
    this.stringMethods && this.stringMethods.setLanguage(language);
  }

  getString(key: string, language?: string): string {
    if (this.stringMethods) {
      return this.stringMethods.getString(key, !language ? this.stringMethods.getLanguage() : language);
    }

    return '';
  }
}