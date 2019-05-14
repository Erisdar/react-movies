import { changeSearchValue } from 'actions/index';
import reducer from '../value';

describe('Reducer value', () => {
    let testValue = 'Harry';

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual('')
    });

    it('should handle changeSearchValue', () => {
        expect(reducer([], { type: changeSearchValue, payload: testValue })).toEqual(testValue);
    });
});