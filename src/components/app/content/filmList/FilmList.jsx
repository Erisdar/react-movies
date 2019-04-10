import React from 'react';
import ContentLoader from './contentLoader/ContentLoader';
import FilmItem from './filmItem/FilmItem';
import './filmList.css';
import NoFilms from './noFilms/NoFilms';

export default ({ films, loadingFlag, setDetailMode }) => {

    let filmsComponent = (films.length > 0)
        ? <>
            {films.map((film) => <FilmItem film={film} key={film.id} moreDetail={() => setDetailMode(film)} />)}
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