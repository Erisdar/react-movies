import { POPULAR } from 'constants/films';
import { TITLE } from 'constants/searchType';
import { BRIEFLY } from 'constants/view';
import founded from 'reducers/films/foundedFilms';
import popular from 'reducers/films/popularFilms';
import showingFilms from 'reducers/films/showingFilms';
import loadingFlag from 'reducers/loadingFlag';
import viewMode from 'reducers/mode';
import type from 'reducers/search/type';
import value from 'reducers/search/value';
import { store } from '../storageConfig';

describe('storageConfig', () => {
    it('should have dafault values', () => {
        expect(store.getState().loadingFlag).toEqual(loadingFlag(undefined, false))
        expect(store.getState().viewMode).toEqual(viewMode(undefined, { view: BRIEFLY, detailFilm: {} }))
        expect(store.getState().search.type).toEqual(type(undefined, TITLE))
        expect(store.getState().search.value).toEqual(value(undefined, ''))
        expect(store.getState().films.showingFilms).toEqual(showingFilms(undefined, POPULAR))
        expect(store.getState().films.founded).toEqual(founded(undefined, []))
        expect(store.getState().films.popular).toEqual(popular(undefined, []))
    });
});