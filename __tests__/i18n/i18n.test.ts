import { enUs } from '../../src/i18n/enUs';
import { gu } from '../../src/i18n/gu';
import { hi } from '../../src/i18n/hi';
import { I18NManager } from '../../src/i18n/i18n';
import { ja } from '../../src/i18n/ja';

describe('Test i18n: I18NManager', () => {
  let i18nManager: I18NManager;

  beforeAll(() => {
    i18nManager = new I18NManager();
    i18nManager.initializeI18N();
  });

  it('should be initialized with enUs', () => {
    // we will test one of english keys
    expect(i18nManager.getString('headerTitle'))
      .toBe(enUs.headerTitle);
  });

  it('should change local to Japanese after calling setLocale', () => {
    i18nManager.setLocale(I18NManager.Locales.JAPANESE);
    expect(i18nManager.getString('headerTitle'))
      .toBe(ja.headerTitle);
  });

  it('should change local to Hindi after calling setLocale', () => {
    i18nManager.setLocale(I18NManager.Locales.HINDI);
    expect(i18nManager.getString('headerTitle'))
      .toBe(hi.headerTitle);
  });

  it('should change local to Gujarati after calling setLocale', () => {
    i18nManager.setLocale(I18NManager.Locales.GUJARATI);
    expect(i18nManager.getString('headerTitle'))
      .toBe(gu.headerTitle);
  });

  it('should give blank string when i18n is not initialized to getString', () => {
    expect(new I18NManager().getString('headerTitle'))
      .toBe('');
  });

  it('should give blank string when giving non-existent string to getString', () => {
    expect(i18nManager.getString('something-nonexistent'))
      .toBe('');
  });

  it('should give given language key when called getString', () => {
    i18nManager.setLocale(I18NManager.Locales.GUJARATI);
    expect(i18nManager.getString('headerTitle'))
      .toBe(gu.headerTitle);
    expect(i18nManager.getString('headerTitle', I18NManager.Locales.ENGLISH_US))
      .toBe(enUs.headerTitle);
  });
});
