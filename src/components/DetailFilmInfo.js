import React from 'react';
import '../styles/detailFilmInfo.css';
import FilmImage from './film/FilmImage';
import Button from 'react-bootstrap/Button';

export default ({film, changeView}) => {

    window.scrollTo(0, 0);

    return (
        <>
            <div className="detail-view d-flex justify-content-around flex-wrap flex-md-row flex-column align-items-center align-self-center">
                <Button onClick={() => changeView()} variant="outline-primary" className="ml-auto search-button">Search</Button>
                <div className="film-big-logo">
                    <FilmImage logo={film.logo} alt={film.alt} />
                </div>
                <div className="film-detail-info-container d-flex flex-column text-justify">
                    <div className="d-flex font-weight-bold flex-wrap align-items-center justify-content-between">
                        <p className="film-detailt-title info-text-indent">{film.title}</p>
                        <p className="film-rating">{film.rating}</p>
                    </div>
                    <div className="d-flex font-weight-bold info-text-indent">
                        <p>{film.year}</p>
                        <p>{film.duration} min</p>
                    </div>
                    <p className="info-text-indent m-0">{film.description}</p>
                </div>
            </div>
        </>
    );
}