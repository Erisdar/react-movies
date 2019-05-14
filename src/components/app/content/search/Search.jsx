import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FindMovieText from './findMovieText/FindMovieText';
import './search.css';

export default ({ searchType, searchValue, changeSearchValue, search, setSearchTypeTitle, setSearchTypeGenre }) => {

    let onSubmit = event => {
        event.preventDefault();
        search({ searchType, searchValue });
    }

    return (
        <form className="search content__search" onSubmit={onSubmit}>
            <Form.Group controlId="search__film-input">
                <Form.Label>
                    <FindMovieText />
                </Form.Label>
                <Form.Control type="text" maxLength="50" value={searchValue} className="search__film-input" data-cy='input'
                    placeholder={'Enter film ' + searchType} onChange={event => changeSearchValue(event.target.value)} />
                <div className="d-flex justify-content-center align-items-center search__button-group">
                    <div>SEARCH BY</div>
                    <Button type="button" variant={searchType == "title" ? "danger" : "secondary"} data-cy="title" onClick={setSearchTypeTitle}
                        className="search__button-title">TITLE</Button>
                    <Button type="button" variant={searchType == "genres" ? "danger" : "secondary"} data-cy="genre" onClick={setSearchTypeGenre}
                        className="search__button-genres">GENRE</Button>
                    <Button type="submit" data-cy="search" variant="danger" size="lg" className="search__button-search ml-auto">SEARCH</Button>
                </div>
            </Form.Group>
        </form>
    );
};


