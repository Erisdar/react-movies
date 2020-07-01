import FilmImage from 'app/content/filmImage/FilmImage';
import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './detailFilmInfo.css';

export default ({ film }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <div className="detail-film-info content__detail-film-info d-flex justify-content-around flex-wrap flex-md-row flex-column align-items-center align-self-center">

            <Link to="/">
                <Button variant="outline-primary" className="ml-auto detail-film-info__search-button">Search</Button>
            </Link>
            <div className="detail-film-info__image">
                <FilmImage logo={String(film.poster_path)} alt={String(film.title)} />
            </div>
            <div className="detail-film-info__info d-flex flex-column text-justify">
                <div className="d-flex font-weight-bold flex-wrap align-items-center justify-content-between">
                    <p className="detail-film-info__title detail-film-info__indent">{String(film.title)}</p>
                    <p className="detail-film-info__rating">{String(film.vote_average)}</p>
                </div>
                <div className="d-flex font-weight-bold detail-film-info__indent">
                    <p>{String(new Date(film.release_date).getFullYear())}</p>
                    <p>{String(film.runtime)} min</p>
                </div>
                <p className="detail-film-info__indent m-0">{String(film.overview)}</p>
            </div>
        </div>
    );
};