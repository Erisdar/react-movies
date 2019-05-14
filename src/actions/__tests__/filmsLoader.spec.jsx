import { addFoundedFilms, addPopularFilms, setFilmsLoadingFalse, setFilmsLoadingTrue, showFoundedFilms, showPopularFilms } from 'actions';
import { loadFoundedFilms, loadPopularFilms } from 'actions/filmsLoader.jsx';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

jest.mock('axios');

describe('Films loader', () => {
    let store;
    let testFilm = [{
        id: 1, title: 'John Smith'
    }];
    let genre = 'comedy';
    let searchValue = 'Hone alone';
    let blankSearchValue = '';
    let searchType = 'title';

    beforeEach(() => {
        store = mockStore();
    })

    it('should load popular films', () => {
        axios.get.mockResolvedValue({ data: { data: testFilm } });

        const expectedActions = [
            setFilmsLoadingTrue(),
            addPopularFilms(testFilm),
            showPopularFilms(),
            setFilmsLoadingFalse()
        ];

        return store.dispatch(loadPopularFilms()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    })

    it('should load founded films', () => {
        axios.get.mockResolvedValue({ data: { data: testFilm } });

        const expectedActions = [
            setFilmsLoadingTrue(),
            addFoundedFilms(testFilm),
            showFoundedFilms(),
            setFilmsLoadingFalse()
        ];

        return store.dispatch(loadFoundedFilms(genre, searchType, searchValue)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    })

    it('should showPopularFilms if value is blank', () => {
        const expectedActions = [
            showPopularFilms(),
        ];

        store.dispatch(loadFoundedFilms({ searchValue: blankSearchValue }));
        expect(store.getActions()).toEqual(expectedActions);
    })

    it('should not load films after error', () => {
        axios.get.mockRejectedValue(new Error('Server not allowed'));

        const expectedActions = [
            setFilmsLoadingTrue(),
            addPopularFilms([]),
            setFilmsLoadingFalse()
        ];

        return store.dispatch(loadPopularFilms()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    })
})