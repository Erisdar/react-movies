import { setFilmsLoadingFalse, setFilmsLoadingTrue } from 'actions/index';
import reducer from '../loadingFlag';

describe('Reducer loadingFlag', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(false)
  });

  it('should handle setFilmsLoadingTrue', () => {
    expect(reducer([], {type: setFilmsLoadingTrue, payload: true})).toEqual(true);
  });
  it('should handle setFilmsLoadingFalse', () => {
    expect(reducer([], {type: setFilmsLoadingFalse, payload: false})).toEqual(false);
  });
});