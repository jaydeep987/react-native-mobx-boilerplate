import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { Button, Text, View } from 'react-native';

import { I18NManager } from '../../i18n/i18n';
import { CounterStore } from '../../stores/counter';

/** Home screen */
@inject('counterStore')
@observer
export class Home extends React.Component<HomeProps> {

  /** Set initial count */
  componentDidMount(): void {
    this.props.counterStore.setCount(1);
  }

  /** Handles increment button */
  handleIncrement = () => {
    this.props.counterStore.increment();
  }

  /** Handles decrement button */
  handleDecrement = () => {
    this.props.counterStore.decrement();
  }

  /** Renders home component */
  render(): JSX.Element {
    return (
      <View>
        <Text>{this.props.screenProps.i18nManager.getString('headerTitle')}</Text>
        <Button title="+" onPress={this.handleIncrement}>+</Button>
        <Text>{this.props.counterStore.count}</Text>
        <Button title="-" onPress={this.handleDecrement}>-</Button>
      </View>
    );
  }
}

interface StoreProps {
  /** instance of counter store */
  counterStore: CounterStore;
}

interface HomeProps extends StoreProps {
  /** props received from react-navigation */
  screenProps: {
    /** i18n manager instance */
    i18nManager: I18NManager;
  };
}
