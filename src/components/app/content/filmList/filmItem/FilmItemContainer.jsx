import { connect } from 'react-redux';
import FilmItem from './FilmItem';
import { setDetailFilm } from 'actions';

const mapDispatchToProps = {
    setDetailFilm
}

export default connect(null, mapDispatchToProps)(FilmItem);