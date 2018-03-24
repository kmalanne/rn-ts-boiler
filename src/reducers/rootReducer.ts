import { combineReducers } from 'redux';

import IStoreState from '../store/IStoreState';
import counterReducer from './counterReducer';

const rootReducer = combineReducers<IStoreState>({
  counter: counterReducer,
});

export default rootReducer;
