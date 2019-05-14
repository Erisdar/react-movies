import { BRIEFLY } from 'constants/view';
import ErrorBoundary from 'error/ErrorBoundary';
import React, { PureComponent } from 'react';
import DetailFilmInfo from './detailFilmInfo/DetailFilmInfoContainer'
import FilmList from './filmList/FilmListContainer';
import SearchContainer from './search/SearchContainer';

export default class Content extends PureComponent {

    componentDidMount() {
        if (this.props.popular.length < 1) {
            this.props.loadPopularFilms();
        }
    };

    render() {
        return (
            <div className="content d-flex flex-column mb-auto">
                {
                    this.props.view === BRIEFLY
                        ? <SearchContainer />
                        : <DetailFilmInfo />
                }
                <ErrorBoundary>
                    <FilmList />
                </ErrorBoundary>
            </div>
        );
    };
};