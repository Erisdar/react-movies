import { mount } from 'enzyme';
import React from 'react';
import DetailFilmInfo from '../DetailFilmInfo';

const testFilm = require('data/film.json').find(film => film.id === "1");

describe('DetailFilmInfo component', () => {
    window.scrollTo = jest.fn();
    let loadFilms = jest.fn();
    let changeView = jest.fn();
    let showPopularFilms = jest.fn();
    let component;

    beforeEach(() => {
        component = mount(<DetailFilmInfo film={testFilm} loadFoundedFilms={loadFilms} setBrieflyMode={changeView} showPopularFilms={showPopularFilms} />)
    });

    it('should be render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('should call loadFoundedFilms(), window.scrollTo() and setBrieflyMode()', () => {
        component.find('button.detail-film-info__search-button').simulate('click');
        expect(window.scrollTo).toHaveBeenCalled();
        expect(loadFilms).toHaveBeenCalled();
        expect(changeView).toHaveBeenCalled();
        expect(showPopularFilms).toHaveBeenCalled();
    });
});