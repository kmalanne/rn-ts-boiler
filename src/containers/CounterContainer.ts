import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { decrement, increment } from '../actions/counterActions';
import Counter from '../components/Counter';
import IStoreState from '../store/IStoreState';

const mapStateToProps = (state: IStoreState) => ({
  count: state,
});

const mapDispatchToProps = (dispatch: Dispatch<IStoreState>) => ({
  onDecrement: bindActionCreators(decrement, dispatch),
  onIncrement: bindActionCreators(increment, dispatch),
});

export function mergeProps(
  stateProps: object,
  dispatchProps: object,
  ownProps: object
) {
  return { ...ownProps, ...stateProps, ...dispatchProps };
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  Counter
);
