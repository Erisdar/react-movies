import { handleAction } from 'redux-actions';
import { addPopularFilms } from 'actions/index';

export default handleAction(addPopularFilms, (state, action) => action.payload, []);