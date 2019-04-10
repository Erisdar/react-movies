import { setBrieflyMode, showPopularFilms } from 'actions/index';
import { loadFoundedFilms } from 'actions/filmsLoader'
import { connect } from 'react-redux';
import DetailFilmInfo from './DetailFilmInfo';

function mapStateToProps(state) {
    return { film: state.viewMode.detailFilm }
};

const mapDispatchToProps = {
    setBrieflyMode,
    showPopularFilms,
    loadFoundedFilms
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailFilmInfo);