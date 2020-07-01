import { loadPopularFilms } from 'actions/filmsLoader';
import { connect } from 'react-redux';
import Content from './Content';

function mapStateToProps(state) {
    let { popular } = state.films;
    return { popular }
};

const mapDispatchToProps = {
    loadPopularFilms
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);