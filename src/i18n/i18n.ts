import LocalizedString, { LocalizedStringsMethods } from 'react-native-localization';

import { enUs } from './enUs';
import { gu } from './gu';
import { hi } from './hi';
import { ja } from './ja';

/**
 * i18n manager which initialize and provide ways to access localized strings
 */
export class I18NManager {

  /** Locale constants */
  static Locales = {
    ENGLISH_US: 'en-US',
    GUJARATI: 'gu',
    HINDI: 'hi',
    JAPANESE: 'ja',
  };

  /** Holds instance of LocalizedString */
  private stringMethods: LocalizedStringsMethods | undefined;

  constructor() {
    this.stringMethods = undefined;
  }

  /**
   * Initializes i18n with language keys
   */
  initializeI18N(): void {
    this.stringMethods = new LocalizedString({
      [I18NManager.Locales.ENGLISH_US]: enUs,
      gu,
      hi,
      ja,
    });
  }

  /**
   * Set locale and load keys for that language
   */
  setLocale(language: string): void {
    if (this.stringMethods) {
      this.stringMethods.setLanguage(language);
    }
  }

  /**
   * Gives localized string for given key and optional language
   */
  getString(key: string, language?: string): string {
    if (this.stringMethods) {
      try {
        return this.stringMethods.getString(key, !language ? this.stringMethods.getLanguage() : language);
      } catch (error) {
        return '';
      }
    }

    return '';
  }
}
