import { setSearchTypeGenre, setSearchTypeTitle } from 'actions/index';
import { GENRES, TITLE } from 'constants/searchType';
import reducer from '../type';

describe('Reducer type', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(TITLE)
    });

    it('should handle setSearchTypeTitle', () => {
        expect(reducer([], { type: setSearchTypeTitle, payload: TITLE })).toEqual(TITLE);
    });
    it('should handle setSearchTypeGenre', () => {
        expect(reducer([], { type: setSearchTypeGenre, payload: GENRES })).toEqual(GENRES);
    });
});