import { setDetailFilm } from 'actions/index';
import { handleAction } from 'redux-actions';

export default handleAction(setDetailFilm, (state, action) => action.payload, {});