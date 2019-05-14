import { combineReducers } from 'redux';
import founded from './films/foundedFilms';
import popular from './films/popularFilms';
import showingFilms from './films/showingFilms';
import loadingFlag from './loadingFlag';
import viewMode from './mode';
import type from './search/type';
import value from './search/value';

export default combineReducers({
    films: combineReducers({
        showingFilms,
        founded,
        popular
    }),
    search: combineReducers({
        type,
        value
    }),
    loadingFlag,
    viewMode
})