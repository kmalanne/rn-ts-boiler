import ActionTypeKeys from '../actions/ActionTypeKeys';
import ActionTypes from '../actions/ActionTypes';
import initialState from './initialState';

const reactionsReducer = (state = initialState.likes, action: ActionTypes) => {
  switch (action.type) {
    case ActionTypeKeys.LIKE:
      return onLike(state);
    default:
      return state;
  }
};

const onLike = (state: number) => {
  return state + 1;
};

export default reactionsReducer;
