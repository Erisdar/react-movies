import * as actions from 'actions/index';
import { FOUNDED, POPULAR } from 'constants/films';
import { GENRES, TITLE } from 'constants/searchType';
import { BRIEFLY, DETAIL } from 'constants/view';

const searchValue = 'Harry Potter';

const testFilm = {
    id: 1,
    title: searchValue
};

const brieflyMode = { view: BRIEFLY, detailFilm: {} };

describe.each`
  action                                    |type                          | payload
  ${actions.addFoundedFilms([testFilm])}    |${'ADD_FOUNDED_FILMS'}        | ${[testFilm]}                    
  ${actions.addPopularFilms([testFilm])}    |${'ADD_POPULAR_FILMS'}        | ${[testFilm]}
  ${actions.changeSearchValue(searchValue)} |${'CHANGE_SEARCH_VALUE'}      | ${searchValue}  
  ${actions.setDetailMode(testFilm)}        |${'SET_DETAIL_MODE'}          | ${{ view: DETAIL, detailFilm: testFilm }}  
  ${actions.setBrieflyMode()}               |${'SET_BRIEFLY_MODE'}         | ${brieflyMode}
  ${actions.showFoundedFilms()}             |${'SHOW_FOUNDED_FILMS'}       | ${FOUNDED}
  ${actions.showPopularFilms()}             |${'SHOW_POPULAR_FILMS'}       | ${POPULAR}  
  ${actions.setFilmsLoadingTrue()}          |${'SET_FILMS_LOADING_TRUE'}   | ${true}
  ${actions.setFilmsLoadingFalse()}         |${'SET_FILMS_LOADING_FALSE'}  | ${false} 
  ${actions.setSearchTypeTitle()}           |${'SET_SEARCH_TYPE_TITLE'}    | ${TITLE}
  ${actions.setSearchTypeGenre()}           |${'SET_SEARCH_TYPE_GENRE'}    | ${GENRES} 
`('Action $type', ({ action, type, payload }) => {
    it('should return correct object', () => {
        const expectedAction = {
            type: type,
            payload: payload
        }
        expect(action).toEqual(expectedAction);
    });
});