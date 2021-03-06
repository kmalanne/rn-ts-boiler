import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

interface IMainProps {
  navigation: NavigationScreenProp<any, any>;
}

export default class Main extends Component<IMainProps> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          React Native Redux TypeScript boilerplate
        </Text>
        <Button
          title="Check Redux!"
          onPress={() => this.props.navigation.navigate('Counter')}
        />
      </View>
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
