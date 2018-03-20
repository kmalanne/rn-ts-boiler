import ActionTypeKeys from '../actions/ActionTypeKeys';
import ActionTypes from '../actions/ActionTypes';
import initialState from './initialState';

const counterReducer = (state = initialState.count, action: ActionTypes) => {
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
  return state + 1;
};

const onIncrement = (state: number) => {
  return state + 1;
};

export default counterReducer;