import ErrorBoundary from 'error/ErrorBoundary';
import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import DetailFilmInfo from './detailFilmInfo/DetailFilmInfoContainer';
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
            <Router className="content d-flex flex-column mb-auto">
                <Switch>
                    <Route exact path="/" component={SearchContainer} />
                    <Route path="/film/:filmId" component={DetailFilmInfo} />
                    <Redirect to='/' />
                </Switch>
                <ErrorBoundary>
                    <FilmList />
                </ErrorBoundary>
            </Router>
        );
    };
};