import React, { Component } from 'react';

import Counter from '../containers/Counter';

interface ICounterProps {}
export default class CounterScreen extends Component<ICounterProps> {
  render() {
    return <Counter />;
  }
}
