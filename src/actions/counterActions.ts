import keys from './actionTypeKeys';

export interface IDecrementAction {
  readonly type: keys.DECREMENT;
}

export interface IIncrementAction {
  readonly type: keys.INCREMENT;
}

export function decrement(): IDecrementAction {
  return {
    type: keys.DECREMENT,
  };
}

export function increment(): IIncrementAction {
  return {
    type: keys.INCREMENT,
  };
}
