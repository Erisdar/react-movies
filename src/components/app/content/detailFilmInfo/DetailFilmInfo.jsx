import FilmImage from 'app/content/filmImage/FilmImage';
import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import './detailFilmInfo.css';

export default ({ film, setBrieflyMode, showPopularFilms, loadFoundedFilms }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
        loadFoundedFilms({ genre: film.genres[0] });
    })

    return (
        <div className="detail-film-info content__detail-film-info d-flex justify-content-around flex-wrap flex-md-row flex-column align-items-center align-self-center">
            <Button onClick={() => { setBrieflyMode(); showPopularFilms() }} variant="outline-primary" className="ml-auto detail-film-info__search-button">Search</Button>
            <div className="detail-film-info__image">
                <FilmImage logo={film.poster_path} alt={film.title} />
            </div>
            <div className="detail-film-info__info d-flex flex-column text-justify">
                <div className="d-flex font-weight-bold flex-wrap align-items-center justify-content-between">
                    <p className="detail-film-info__title detail-film-info__indent">{film.title}</p>
                    <p className="detail-film-info__rating">{film.vote_average}</p>
                </div>
                <div className="d-flex font-weight-bold detail-film-info__indent">
                    <p>{new Date(film.release_date).getFullYear()}</p>
                    <p>{film.runtime} min</p>
                </div>
                <p className="detail-film-info__indent m-0">{film.overview}</p>
            </div>
        </div>
    );
};