import { setFilmsLoadingFalse, setFilmsLoadingTrue } from 'actions/index';
import { combineActions, handleAction } from 'redux-actions';

export default handleAction(combineActions(setFilmsLoadingTrue, setFilmsLoadingFalse), {
    next: (state, { payload }) => payload,
}, false)