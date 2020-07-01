import {
    addFoundedFilms,
    addPopularFilms,
    setDetailFilm,
    setFilmsLoadingFalse,
    setFilmsLoadingTrue,
    showFoundedFilms,
    showPopularFilms
} from 'actions';
import axios from 'axios';
import {LOAD_FILMS} from 'constants/Api';

const loadFilms = (addFilms, setShowingFilmsFlag, { sortBy = 'vote_average', sortOrder = 'desc', limit = 50, genre, search, searchBy }) => dispatch => {
    dispatch(setFilmsLoadingTrue());
    return axios.get(LOAD_FILMS, {
        params: {
            search,
            searchBy,
            sortBy,
            sortOrder,
            filter: genre,
            limit,
        }
    })
        .then(res => {
            dispatch(addFilms(res.data.data));
            dispatch(setShowingFilmsFlag());
        })
        .catch(() => {
            dispatch(addFilms([]));
        })
        .then(() => {
            dispatch(setFilmsLoadingFalse());
        });
}

export const loadPopularFilms = () => dispatch => {
    return dispatch(loadFilms(addPopularFilms, showPopularFilms, {}));
}

export const loadFoundedFilms = ({ genre, searchType, searchValue }) => dispatch => {
    if (searchValue === '') {
        dispatch(showPopularFilms());
    } else {
        return dispatch(loadFilms(addFoundedFilms, showFoundedFilms, { genre, searchBy: searchType, search: searchValue, limit: 20 }));
    }
};

export const loadFilmById = filmId => dispatch => {
    return axios.get(`${LOAD_FILMS}/${filmId}`)
        .then(result => {
            dispatch(setDetailFilm(result.data));
            return result.data;
        })
        .catch(() => {
            dispatch(setDetailFilm({}));
        })
}