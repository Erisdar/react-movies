import React from 'react';
import Button from 'react-bootstrap/Button';
import './searchButtonGroup.css';

export default ({ changeSearchType, searchType, search }) => (
    <div className="d-flex justify-content-center align-items-center search-button-group search__search-button-group">
        <p>SEARCH BY</p>
        <Button type="button" data-cy="title" onClick={() => changeSearchType('title')}
            className={"search-button-group__title " + (searchType == "title" ? "search-button-group__title_active"
                : "search-button-group__title_non-active")}>TITLE</Button>
        <Button type="button" data-cy="genre" onClick={() => changeSearchType('genre')}
            className={"search-button-group__genre " + (searchType == "genre" ? "search-button-group__genre_active"
                : "search-button-group__genre_non-active")}>GENRE</Button>
        <Button type="submit" data-cy="search" variant="danger" size="lg" className="search-button-group__search ml-auto"
            onClick={() => search()}>SEARCH</Button>
    </div>
);