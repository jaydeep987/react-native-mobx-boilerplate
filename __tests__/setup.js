/** Use react-native's mock setup */
jest.requireMock('react-native/jest/setup');

/** Mock react-native-localization */
jest.mock('react-native-localization', () => class RNLocalization {
  language = 'en-US'

  constructor (props) {
    this.props = props
    this.setLanguage(this.language)
  }

  setLanguage (interfaceLanguage) {
    this.language = interfaceLanguage;
    if (this.props[interfaceLanguage]) {
      var localizedStrings = this.props[this.language]
      for (var key in localizedStrings) {
        if (localizedStrings.hasOwnProperty(key)) {
          this[key] = localizedStrings[key];
        }
      }
    }
  }

  getString(key, language) {
    try {
      let current = this.props[language || this.language];
      const paths = key.split('.');
      for (let i = 0; i < paths.length; i += 1) {
        if (current[paths[i]] === undefined) {
          throw new Error(paths[i]);
        }
        current = current[paths[i]];
      }
      return current;
    } catch(err) {
      throw err;
    }
  }

  getLanguage() {
    return this.language;
  }
});


jest.mock('Linking', () => ({
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  openURL: jest.fn(() => Promise.resolve()),
  canOpenURL: jest.fn(() => Promise.resolve()),
  getInitialURL: jest.fn(() => Promise.resolve()),
}));

/** Get mocked NativeModules and add more mocked methods */
const originalNativeModules = jest.requireMock('NativeModules');

originalNativeModules.RNGestureHandlerModule = {
  attachGestureHandler: jest.fn(),
  createGestureHandler: jest.fn(),
  dropGestureHandler: jest.fn(),
  updateGestureHandler: jest.fn(),
  State: {},
  Directions: {},
};

originalNativeModules.UIManager = Object.assign({}, originalNativeModules.UIManager, {
  RCTView: () => {},
});

originalNativeModules.PlatformConstants = {
  forceTouchAvailable: jest.fn(),
};
/** Mocking  NativeModules Done */

/** Mock Animated Helper lib */
jest.mock('NativeAnimatedHelper');

/** Get rids of the missing requestAnimationFrame polyfill warning. */
global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};

global.navigator = {
  geolocation: {
    clearWatch: jest.fn(),
    getCurrentPosition: jest.fn(),
    stopObserving: jest.fn(),
    watchPosition: jest.fn()
  }
};

jest.mock('ScrollView', () => jest.genMockFromModule('ScrollView'));
jest.mock('YellowBox', () => jest.genMockFromModule('YellowBox'));

console.error = jest.fn();
