import { loadPopularFilms } from 'actions/filmsLoader';
import { connect } from 'react-redux';
import Content from './Content';

function mapStateToProps(state) {
    let { view } = state.viewMode;
    let { popular } = state.films;
    return { view, popular }
};

const mapDispatchToProps = {
    loadPopularFilms
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);