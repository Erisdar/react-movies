import { FOUNDED, POPULAR } from 'constants/films';
import { GENRES, TITLE } from 'constants/searchType';
import { BRIEFLY, DETAIL } from 'constants/view';
import { createAction, createActions } from 'redux-actions';

export const addFoundedFilms = createAction('ADD_FOUNDED_FILMS');
export const addPopularFilms = createAction('ADD_POPULAR_FILMS');
export const changeSearchValue = createAction('CHANGE_SEARCH_VALUE');
export const { showFoundedFilms, showPopularFilms } = createActions({
    SHOW_FOUNDED_FILMS: () => FOUNDED,
    SHOW_POPULAR_FILMS: () => POPULAR,
});
export const { setFilmsLoadingTrue, setFilmsLoadingFalse } = createActions({
    SET_FILMS_LOADING_TRUE: () => true,
    SET_FILMS_LOADING_FALSE: () => false,
});
export const { setBrieflyMode, setDetailMode } = createActions({
    SET_BRIEFLY_MODE: () => ({ view: BRIEFLY, detailFilm: {} }),
    SET_DETAIL_MODE: detailFilm => ({ view: DETAIL, detailFilm }),
});
export const { setSearchTypeTitle, setSearchTypeGenre } = createActions({
    SET_SEARCH_TYPE_TITLE: () => TITLE,
    SET_SEARCH_TYPE_GENRE: () => GENRES,
});