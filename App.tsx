import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import Counter from './src/components/Counter';
import configureStore from './src/store/configureStore';

interface IProps {}
export default class App extends Component<IProps> {
  render() {
    return (
      <Provider store={configureStore()}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            React Native Redux TypeScript boilerplate
          </Text>
          <Counter />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#72ba3a',
    flex: 1,
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
});
