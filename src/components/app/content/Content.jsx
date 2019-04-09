import ErrorBoundary from 'error/ErrorBoundary';
import React, { Component } from 'react';
import { filterFilm } from 'util/filmUtil';
import DetailFilmInfo from './detailFilmInfo/DetailFilmInfo';
import FilmList from './filmList/FilmList';
import Search from './search/Search';

function getFilms() {
    return require('data/film.json');
};

export default class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            films: [],
            searchType: 'title',
            searchValue: '',
            view: 'briefly',
            detailFilm: null
        };
    }

    setSearch(searchType, searchValue) {
        this.setState({
            searchType: searchType,
            searchValue: searchValue
        })
    };

    setView(view, detailFilm) {
        this.setState({
            view: view,
            detailFilm: detailFilm
        })
    }

    componentDidMount() {
        this.setState({ films: getFilms() })
    };

    render() {
        let filteredFilms = filterFilm(this.state.films, this.state.searchType, this.state.searchValue);

        return (
            <div className="content d-flex flex-column mb-auto">
                {
                    this.state.view === 'briefly'
                        ? <Search onSearch={this.setSearch.bind(this)} />
                        : <DetailFilmInfo changeView={() => { this.setView('briefly', null); this.setSearch('title', ''); }} film={this.state.detailFilm} />
                }
                <ErrorBoundary>
                    <FilmList films={filteredFilms} changeView={(film) => { this.setView('detail', film); this.setSearch('genre', film.genre); }} />
                </ErrorBoundary>
            </div>
        );
    }
};