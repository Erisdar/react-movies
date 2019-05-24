import { setFilmsLoadingFalse, setFilmsLoadingTrue } from '../actions';
import { combineActions, handleAction } from 'redux-actions';

export default handleAction(combineActions(setFilmsLoadingTrue, setFilmsLoadingFalse), {
  next: (state, {payload}) => payload,
}, false)