import React from 'react';
import ContentLoader from './contentLoader/ContentLoader';
import FilmItemContainer from './filmItem/FilmItemContainer';
import './filmList.css';
import NoFilms from './noFilms/NoFilms';

export default ({ films, loadingFlag }) => {

    let filmsComponent = (films.length > 0)
        ? <>
            {films.map((film) => <FilmItemContainer film={film} key={film.id} />)}
        </>
        : <NoFilms />

    return (
        <div className="film-list content__film-list align-self-center d-flex flex-row justify-content-around flex-wrap">
            {
                loadingFlag
                    ? <ContentLoader />
                    : filmsComponent
            }
        </div>
    );
}