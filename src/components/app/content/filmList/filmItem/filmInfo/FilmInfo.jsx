import React from 'react';
import './filmInfo.css';

export default ({ title, year, genre }) => (
    <div className="d-flex flex-column h-100 justify-content-between film-info film-item__film-info">
        <div className="d-flex justify-content-between align-items-start">
            <p className="film-info__title" data-cy="film-info-title">{title}</p>
            <p className="fiml-info__year">{year}</p>
        </div>
        <div className="h-50">
            <p className="film-info__genre" data-cy="film-info-genre">{genre}</p>
        </div>
    </div>
);