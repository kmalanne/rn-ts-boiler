import keys from '../ActionTypeKeys';
import { ILikeAction } from './like';

export function like(): ILikeAction {
  return {
    type: keys.LIKE,
  };
}
