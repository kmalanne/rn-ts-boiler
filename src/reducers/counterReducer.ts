import ActionTypeKeys from '../actions/actionTypeKeys';
import ActionTypes from '../actions/actionTypes';
import initialState from './initialState';

const counterReducer = (state = initialState.counter, action: ActionTypes) => {
  switch (action.type) {
    case ActionTypeKeys.DECREMENT:
      return onDecrement(state);
    case ActionTypeKeys.INCREMENT:
      return onIncrement(state);
    default:
      return state;
  }
};

const onDecrement = (state: number) => {
  return state - 1;
};

const onIncrement = (state: number) => {
  return state + 1;
};

export default counterReducer;
