import { createSelector } from 'reselect';

const getFilms = state => [...state.films.founded, ...state.films.popular];

export const getFilmById = filmId => createSelector(
  getFilms, (films) => films.find(film => film.id === filmId)
);