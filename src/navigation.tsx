import { StackNavigator } from 'react-navigation';

import CounterScreen from './screens/CounterScreen';
import MainScreen from './screens/MainScreen';

const MyNavigator = StackNavigator(
  {
    Counter: {
      screen: CounterScreen,
    },
    Main: {
      screen: MainScreen,
    },
  },
  {
    initialRouteName: 'Main',
  }
);

export default MyNavigator;
