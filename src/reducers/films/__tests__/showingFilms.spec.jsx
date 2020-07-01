import { showFoundedFilms } from 'actions/index';
import { FOUNDED, POPULAR } from 'constants/films';
import reducer from '../showingFilms';

describe('Reducer showingFilms', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(POPULAR)
  });

  it('should handle showFoundedFilms', () => {
    expect(reducer([], {type: showFoundedFilms, payload: FOUNDED})).toEqual(FOUNDED);
  });

  it('should handle showPopularFilms', () => {
    expect(reducer([], {type: showFoundedFilms, payload: POPULAR})).toEqual(POPULAR);
  });
});