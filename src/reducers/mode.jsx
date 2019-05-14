import { setBrieflyMode, setDetailMode } from 'actions/index';
import { BRIEFLY } from 'constants/view';
import { handleAction, combineActions } from 'redux-actions';

export default handleAction(combineActions(setBrieflyMode, setDetailMode), {
    next: (state, { payload }) => payload,
}, { view: BRIEFLY, detailFilm: {} });