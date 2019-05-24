import { addFoundedFilms } from 'actions/index';
import reducer from '../foundedFilms';

describe('Reducer foundedFilms', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  });

  let testFilms = [{
    id: 1,
    title: 'Harry Potter'
  }]
  it('should handle addFoundedFilms', () => {
    expect(reducer([], {type: addFoundedFilms, payload: testFilms})).toEqual(testFilms);
  });
});