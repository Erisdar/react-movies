import { connect } from 'react-redux';
import FilmList from './FilmList';

function mapStateToProps(state) {
    let { films: { showingFilms }, loadingFlag } = state;
    let films = state.films[showingFilms];
    return { films, loadingFlag };
};

export default connect(mapStateToProps)(FilmList);