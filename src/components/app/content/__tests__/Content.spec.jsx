import { mount } from 'enzyme';
import React from 'react';
import { filterFilm } from 'util/filmUtil';
import Content from '../Content';
import FilmItem from '../filmList/filmItem/FilmItem';

jest.mock('../filmList/filmItem/FilmItem', () => {
    return jest.fn().mockImplementation(({ film, moreDetail }) => {
        return (<div id={'filmItem' + film.id} onClick={() => moreDetail()}></div>)
    });
});
jest.mock('../detailFilmInfo/DetailFilmInfo.jsx', () => {
    return jest.fn().mockImplementation(({ film, changeView }) => {
        return (<div id={'detailInfo' + film.id} onClick={() => changeView()}></div>)
    });
});
jest.mock('util/filmUtil', () => ({
    __esModule: true,
    filterFilm: jest.fn().mockImplementation(films => films.filter(film => film.id === "1"))
}));

const testFilm = require('data/film.json').find(film => film.id === "1");

describe('Content component', () => {
    beforeEach(() => {
        FilmItem.mockClear();
        filterFilm.mockClear();
    });

    it('should be render correctly with film not found', () => {
        filterFilm
            .mockImplementationOnce(() => [])
            .mockImplementationOnce(() => [])
        const component = mount(<Content />);
        expect(filterFilm).toHaveBeenCalled();
        expect(component).toMatchSnapshot();
    });

    it('should be render correctly with films', () => {
        const component = mount(<Content />);
        expect(filterFilm).toHaveBeenCalled();
        expect(component).toMatchSnapshot();
    });

    it('should call moreDetail() and changeView()', () => {
        const component = mount(<Content />);
        expect(component.state().view).toEqual('briefly');
        expect(component.state().detailFilm).toBeNull();

        component.find('#filmItem1').simulate('click');
        expect(component.state().view).toEqual('detail');
        expect(component.state().detailFilm).toEqual(testFilm);

        component.find('div#detailInfo1').simulate('click');
        expect(component.state().view).toEqual('briefly');
        expect(component.state().searchType).toEqual('title');
        expect(component.state().searchValue).toEqual('');
        expect(component.state().detailFilm).toBeNull();
    });

    it('should be render correctly with ErrorBoundary', () => {
        console.error = jest.fn();
        console.log = jest.fn();
        FilmItem.mockImplementation(() => {
            throw new Error('New Error');
        });
        const component = mount(<Content />);
        expect(FilmItem).toThrow();
        expect(component).toMatchSnapshot();
    });
});