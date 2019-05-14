import { setSearchTypeTitle, setSearchTypeGenre } from 'actions/index';
import { TITLE } from 'constants/searchType';

import { handleAction, combineActions } from 'redux-actions';

export default handleAction(combineActions(setSearchTypeTitle, setSearchTypeGenre), {
    next: (state, { payload }) => payload,
}, TITLE);