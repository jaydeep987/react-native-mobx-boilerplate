jest.mock('react-native-localization', () => class RNLocalization {
  language = 'en'

  constructor (props) {
    this.props = props
    this.setLanguage(this.language)
  }

  setLanguage (interfaceLanguage) {
    this.language = interfaceLanguage
    if (this.props[interfaceLanguage]) {
      var localizedStrings = this.props[this.language]
      for (var key in localizedStrings) {
        if (localizedStrings.hasOwnProperty(key)) this[key] = localizedStrings[key]
      }
    }
  }
});

jest.mock('NativeModules', () => ({
  UIManager: {
    RCTView: () => {},
  },
  PlatformConstants: {
    forceTouchAvailable: jest.fn(),
  },
  KeyboardObserver: {},
  RNGestureHandlerModule: {
    attachGestureHandler: jest.fn(),
    createGestureHandler: jest.fn(),
    dropGestureHandler: jest.fn(),
    updateGestureHandler: jest.fn(),
    State: {},
    Directions: {},
  },
}));

global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};