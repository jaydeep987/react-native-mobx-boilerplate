import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Button, Header, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { I18NManager } from '../../i18n/i18n';
import { CounterStore } from '../../stores/counter';

// tslint:disable:no-magic-numbers
const styles = StyleSheet.create({
  header: {
    height: Platform.OS === 'ios' ? 70 : 70 - 24,
    paddingTop: Platform.OS === 'ios' ? 30 : 0,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
  },
  button: {
    width: 50,
    height: 40,
    flexGrow: 1,
  },
  counterView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  counterText: {
    fontSize: 18,
    flexGrow: 2,
    height: 50,
    textAlign: 'center',
  },
});
// tslint:enable:no-magic-numbers

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
        <Header
          barStyle="light-content"
          placement="left"
          backgroundColor="#1976d2"
          containerStyle={styles.header}
        >
          <Icon style={styles.headerText} name="counter" />
          <Text h4={true} h4Style={styles.headerText}>
            {this.props.screenProps.i18nManager.getString('headerTitle')}
          </Text>
        </Header>
        <View style={styles.counterView}>
          <Button
            testID="plusBtn"
            containerStyle={styles.button}
            raised={true}
            title="+"
            onPress={this.handleIncrement}
          />
          <Text testID="countText" style={styles.counterText}>{this.props.counterStore.count}</Text>
          <Button
            testID="minusBtn"
            containerStyle={styles.button}
            raised={true}
            title="-"
            onPress={this.handleDecrement}
          />
        </View>
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
