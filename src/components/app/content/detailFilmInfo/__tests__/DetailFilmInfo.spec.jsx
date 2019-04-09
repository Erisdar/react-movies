import { mount } from 'enzyme';
import React from 'react';
import DetailFilmInfo from '../DetailFilmInfo';

const testFilm = require('data/film.json').find(film => film.id === "1");

describe('DetailFilmInfo component', () => {
    window.scrollTo = jest.fn();

    it('should be render correctly', () => {
        const component = mount(<DetailFilmInfo film={testFilm} />);
        expect(component).toMatchSnapshot();
    });

    it('should call changeView()', () => {
        const changeView = jest.fn();
        const component = mount(<DetailFilmInfo film={testFilm} changeView={changeView} />);
        component.find('button.detail-film-info__search-button').simulate('click');
        expect(changeView).toHaveBeenCalled();
    });
});