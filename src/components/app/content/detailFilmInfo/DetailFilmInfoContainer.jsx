import { loadFilmById, loadFoundedFilms } from 'actions/filmsLoader';
import { showPopularFilms } from 'actions/index';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import DetailFilmInfo from './DetailFilmInfo';
import { withRouter } from 'react-router-dom'

const R = require('ramda');

class DetailFilmInfoContainer extends Component {

    componentDidMount() {
        this.props.loadFilmById(this.props.filmId)
            .then(result => {
                if (R.isEmpty(result)) {
                    this.props.history.push('/');
                } else {
                    // this.props.loadFoundedFilms({ genre: this.props.film.genres[0] });
                }
            })
    };

    render() {
        return (
            this.props.loadingFlag
                ? <></>
                : <DetailFilmInfo film={this.props.film} showPopularFilms={this.props.showPopularFilms} />
        )
    };
};

function mapStateToProps(state, ownProps) {
    const { loadingFlag } = state;
    const { match: { params } } = ownProps
    return { film: state.films.detail, filmId: params.filmId, loadingFlag }
};

const mapDispatchToProps = {
    showPopularFilms,
    loadFoundedFilms,
    loadFilmById
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DetailFilmInfoContainer));