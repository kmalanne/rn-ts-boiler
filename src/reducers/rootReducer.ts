import { combineReducers } from 'redux';
import IStoreState from '../store/IStoreState';
import reactionsReducer from './reactionsReducer';

const rootReducer = combineReducers<IStoreState>({
  reactionsReducer,
});

export default rootReducer;
