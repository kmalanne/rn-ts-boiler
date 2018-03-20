import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export interface ICounterProps {
  count?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

export default class Counter extends Component<ICounterProps> {
  render() {
    return (
      <View style={styles.container}>
        <Button title="-" onPress={this.props.onDecrement} />
        <Text style={styles.counter}>{this.props.count}</Text>
        <Button title="+" onPress={this.props.onIncrement} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },

  counter: {
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
});
