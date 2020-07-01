import { addPopularFilms } from 'actions/index';
import reducer from '../popularFilms';

describe('Reducer popularFilms', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  });

  let testFilms = [{
    id: 1,
    title: 'Harry Potter'
  }]

  it('should handle addPopularFilms', () => {
    expect(reducer([], {type: addPopularFilms, payload: testFilms})).toEqual(testFilms);
  });
});