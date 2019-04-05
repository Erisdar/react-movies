import React from 'react';

export default ({ title, year, genre }) => (
    <div className="d-flex flex-column h-100 justify-content-between film-info">
        <div className="d-flex justify-content-between align-items-start">
            <p className="film-title">{title}</p>
            <p className="year">{year}</p>
        </div>
        <div className="h-50">
            <p className="genre">{genre}</p>
        </div>
    </div>
);