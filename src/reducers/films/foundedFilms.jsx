import { addFoundedFilms } from 'actions/index';
import { handleAction } from 'redux-actions';

export default handleAction(addFoundedFilms, (state, action) => action.payload, []);