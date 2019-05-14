import { setBrieflyMode, setDetailMode } from 'actions/index';
import { BRIEFLY, DETAIL } from 'constants/view';
import reducer from '../mode';

describe('Reducer mode', () => {
    let brieflyMode = { view: BRIEFLY, detailFilm: {} };

    let detailMode = {
        view: DETAIL, detailFilm: {
            id: 1,
            title: 'detailFilms'
        }
    }

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(brieflyMode)
    });

    it('should handle setBrieflyMode', () => {
        expect(reducer([], { type: setBrieflyMode, payload: brieflyMode })).toEqual(brieflyMode);
    });
    it('should handle setDetailMode', () => {
        expect(reducer([], { type: setDetailMode, payload: detailMode })).toEqual(detailMode);
    });
});