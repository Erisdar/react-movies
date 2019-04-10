import { loadFoundedFilms } from 'actions/filmsLoader';
import { changeSearchValue, setSearchTypeGenre, setSearchTypeTitle } from 'actions/index';
import { connect } from 'react-redux';
import Search from './Search';

const mapStateToProps = state => {
    const { type, value } = state.search;
    return { searchType: type, searchValue: value }
};

const mapDispatchToProps = {
    changeSearchValue,
    setSearchTypeTitle,
    setSearchTypeGenre,
    search: loadFoundedFilms
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);