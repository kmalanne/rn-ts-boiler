import React, { Component } from 'react';
import { Provider } from 'react-redux';

import MyNavigator from './navigation';
import configureStore from './store/configureStore';

const store = configureStore();

interface IAppProps {}
export default class App extends Component<IAppProps> {
  render() {
    return (
      <Provider store={store}>
        <MyNavigator />
      </Provider>
    );
  }
}
