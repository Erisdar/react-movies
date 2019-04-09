import React from 'react';
import FilmItem from './filmItem/FilmItem';
import './filmList.css';
import NoFilms from './noFilms/NoFilms';


export default ({ films, changeView }) => (
    <div className="film-list content__film-list align-self-center d-flex flex-row justify-content-around flex-wrap">
        {
            films.length > 0
                ? <>
                    {films.map((film) => <FilmItem film={film} key={film.id} moreDetail={() => changeView(film)} />)}
                </>
                : <NoFilms />
        }
    </div>
);