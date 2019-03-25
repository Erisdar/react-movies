import React from 'react';
import Button from 'react-bootstrap/Button';

export default ({ changeSearchType, searchType, search }) => (
    <div className="d-flex justify-content-center align-items-center search-button-group">
        <p>SEARCH BY</p>
        <Button type="button" onClick={() => changeSearchType('title')}
            className={"search-type-button " + (searchType == "title" ? "active-button-type" : "non-active-button-type")}>TITLE</Button>
        <Button type="button" onClick={() => changeSearchType('genre')}
            className={"search-type-button " + (searchType == "genre" ? "active-button-type" : "non-active-button-type")}>GENRE</Button>
        <Button type="submit" variant="danger" size="lg" className="ml-auto" onClick={() => search()}>SEARCH</Button>
    </div>
);