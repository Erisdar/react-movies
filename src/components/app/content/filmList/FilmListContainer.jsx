import { setDetailMode } from 'actions/index';
import { connect } from 'react-redux';
import FilmList from './FilmList';

function mapStateToProps(state) {
    let { films: { showingFilms }, loadingFlag } = state;
    let films = state.films[showingFilms];
    return { films, loadingFlag };
};

const mapDispatchToProps = {
    setDetailMode
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmList);