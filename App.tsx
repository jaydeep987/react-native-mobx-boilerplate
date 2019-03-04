import { Provider } from 'mobx-react';
import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { NavigationContainer, createAppContainer, createStackNavigator } from 'react-navigation';

import { I18NManager } from './src/i18n/i18n';
import { stack as screenStack } from './src/screen-stack';
import { stores } from './src/stores';

// Create stack navigator having screens
const StackNavigator: NavigationContainer = createStackNavigator(screenStack, {
  headerMode: 'none',
  navigationOptions: {
    header: null, // tslint:disable-line:no-null-keyword
  },
});

// From v3, it's necessary to create App Container which will pass necessary props
const AppContainer: React.ComponentClass<AppContainerProps> = createAppContainer(StackNavigator);

/** App initializer */
export class App extends React.Component {
  /** i18n manager instance */
  private readonly i18nManager: I18NManager;

  constructor(props: {}) {
    super(props);

    this.i18nManager = new I18NManager();
    this.i18nManager.initializeI18N();
  }

  /** Renders app */
  render(): JSX.Element {
    return (
      <ThemeProvider>
        <Provider {...stores}>
          <AppContainer screenProps={{ i18nManager: this.i18nManager }} />
        </Provider>
      </ThemeProvider>
    );
  }
}

interface AppContainerProps {
  /** screen props received from react-navigation */
  screenProps?: {};
}
