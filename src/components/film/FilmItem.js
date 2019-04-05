import React from 'react';
import '../../styles/film/filmItem.css';
import ImageErrorBoundary from '../error/ImageErrorBoundary';
import FilmImage from './FilmImage';
import FilmInfo from './FilmInfo';

export default ({ film, moreDetail }) => (
    <div className="film-item d-flex flex-column justify-content-start" >
        <div className="logo-container" onClick={() => moreDetail()}>
            <ImageErrorBoundary>
                <FilmImage logo={film.logo} alt={film.title} />
            </ImageErrorBoundary>
        </div>
        <FilmInfo title={film.title} year={film.year} genre={film.genre} />
    </div >
);