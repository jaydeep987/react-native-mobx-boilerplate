import * as React from 'react';
import 'react-native';
import { Header, Text } from 'react-native-elements';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import { enUs } from '../../src/i18n/enUs';
import { I18NManager } from '../../src/i18n/i18n';
import { ja } from '../../src/i18n/ja';
import { Home } from '../../src/screens/Home/Home';
import { CounterStore } from '../../src/stores/counter';

// Very good article: https://medium.com/@pshrmn/testing-react-native-components-in-node-with-react-test-renderer-cb2985402dce

describe('Test Screen: Home', () => {
  let counterStore: CounterStore;
  let i18NManager: I18NManager;
  let testInstance: renderer.ReactTestInstance;

  beforeAll(() => {
    i18NManager = new I18NManager();
    i18NManager.initializeI18N();
    counterStore = new CounterStore();

    testInstance =
      renderer
        .create(<Home counterStore={counterStore} screenProps={{ i18nManager: i18NManager }} />)
        .root;
  });

  it('shoule have header and with title', () => {
    const headerText = testInstance
      .findByType(Header)
      .findByType(Text);

    expect(headerText.props.children)
      .toEqual(enUs.headerTitle);
  });

  it('shoule have header with Japanese title after changing locale', () => {
    const i18n = new I18NManager();
    i18n.initializeI18N();
    i18n.setLocale(I18NManager.Locales.JAPANESE);
    const instance = renderer
        .create(<Home counterStore={counterStore} screenProps={{ i18nManager: i18n }} />)
        .root;
    const headerText = instance
      .findByType(Header)
      .findByType(Text);

    expect(headerText.props.children)
      .toEqual(ja.headerTitle);
  });

  it('should increment number after clicking + button', () => {
    const plusBtn = testInstance.findByProps({ testID: 'plusBtn' });
    const text = testInstance.findByProps({ testID: 'countText' });

    expect(text.props.children)
      .toEqual(1);

    plusBtn.props.onPress();

    expect(text.props.children)
      .toEqual(2);
  });

  it('should decrement number after clicking + button', () => {
    const plusBtn = testInstance.findByProps({ testID: 'minusBtn' });
    const text = testInstance.findByProps({ testID: 'countText' });

    expect(text.props.children)
      .toEqual(2);

    plusBtn.props.onPress();

    expect(text.props.children)
      .toEqual(1);
  });
});
