import React, { Component } from 'react';
import '../styles/content.css';
import DetailFilmInfo from './DetailFilmInfo';
import ErrorBoundary from './error/ErrorBoundary';
import Search from './Search';
import FilmList from './FilmList'

function getFilms() {
    return require('../data/film.json');
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
        let filteredFilms = this.state.films.filter(film => film[this.state.searchType].includes(this.state.searchValue));

        return (
            <div className="d-flex flex-column mb-auto">
                {
                    this.state.view === 'briefly'
                        ? <Search onSearch={this.setSearch.bind(this)} />
                        : <DetailFilmInfo changeView={() => { this.setView('briefly'); this.setSearch('title', ''); }} film={this.state.detailFilm} />
                }
                <ErrorBoundary>
                    <FilmList films={filteredFilms} changeView={(film) => { this.setView('detail', film); this.setSearch('genre', film.genre); }} />
                </ErrorBoundary>
            </div>
        );
    }
};