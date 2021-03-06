import FilmImage from 'app/content/filmImage/FilmImage';
import ImageErrorBoundary from 'error/ImageErrorBoundary';
import React from 'react';
import FilmInfo from './filmInfo/FilmInfo';
import './filmItem.css';

export default ({ film, moreDetail }) => (
    <div className="film-item film-list__film-item d-flex flex-column justify-content-start" >
        <div className="logo-container film-item__logo-container" onClick={() => moreDetail()}>
            <ImageErrorBoundary>
                <FilmImage logo={film.poster_path} alt={film.title} />
            </ImageErrorBoundary>
        </div>
        <FilmInfo title={film.title} year={new Date(film.release_date).getFullYear()} genres={film.genres.join(', ')} />
    </div>
);