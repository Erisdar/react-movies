import { showFoundedFilms, showPopularFilms } from 'actions/index';
import { POPULAR } from 'constants/films';
import { handleAction, combineActions } from 'redux-actions';

export default handleAction(combineActions(showFoundedFilms, showPopularFilms), {
    next: (state, { payload }) => payload,
}, POPULAR)