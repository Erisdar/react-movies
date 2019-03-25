import React from 'react';
import FilmItem from './film/FilmItem';
import NoFilms from './NoFilms';

export default ({ films, changeView }) => (
    <div className="film-list align-self-center d-flex flex-row justify-content-around flex-wrap">
        {
            films.length > 0
                ? <>
                    {films.map((film) => <FilmItem film={film} key={film.id} moreDetail={() => changeView(film)} />)}
                </>
                : <NoFilms />
        }
    </div>
);