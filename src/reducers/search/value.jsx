import { changeSearchValue } from 'actions/index';
import { handleAction } from 'redux-actions';

export default handleAction(changeSearchValue, (state, action) => (action.payload), '');