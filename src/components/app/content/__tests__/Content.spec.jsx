import { BRIEFLY, DETAIL } from 'constants/view';
import { mount } from 'enzyme';
import React from 'react';
import Content from '../Content';
import FilmList from '../filmList/FilmListContainer';

jest.mock('../search/SearchContainer', () => {
    return jest.fn().mockImplementation(() => {
        return (<div className='content__search'></div>)
    });
});

jest.mock('../filmList/FilmListContainer', () => {
    return jest.fn().mockImplementation(() => {
        return (<div className='content__film-list'></div>)
    });
});

jest.mock('../detailFilmInfo/DetailFilmInfoContainer', () => {
    return jest.fn().mockImplementation(() => {
        return (<div className='content__detail-film-info'></div>)
    });
});

const films = require('data/film.json').filter(film => film.id == 1);

describe('Content component', () => {

    it('should be render correctly with SEARCH', () => {
        let foundFilms = jest.fn();
        const component = mount(
            <Content view={BRIEFLY} popular={[]} loadPopularFilms={foundFilms} />
        );
        expect(foundFilms).toHaveBeenCalled();
        expect(component).toMatchSnapshot();
    });

    it('should be render correctly with DETAIL INFO', () => {
        let foundFilms = jest.fn();
        const component = mount(<Content view={DETAIL} popular={[]} loadPopularFilms={foundFilms} />);
        expect(foundFilms).toHaveBeenCalled();
        expect(component).toMatchSnapshot();
    });

    it('should be render correctly with ErrorBoundary', () => {
        console.error = jest.fn();
        console.log = jest.fn();
        let foundFilms = jest.fn();
        FilmList.mockImplementationOnce(() => {
            throw new Error('New Error');
        });
        const component = mount(<Content view={BRIEFLY} popular={[]} loadPopularFilms={foundFilms} />);
        expect(foundFilms).toHaveBeenCalled();
        expect(component).toMatchSnapshot();
    });

    it('should not be call loadPopularFilms()', () => {
        let foundFilms = jest.fn();
        mount(<Content view={DETAIL} popular={films} loadPopularFilms={foundFilms} />);
        expect(foundFilms).not.toHaveBeenCalled();
    });
});