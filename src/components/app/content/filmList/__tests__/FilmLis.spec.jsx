import { mount } from 'enzyme';
import React from 'react';
import FilmList from '../FilmList';

let films = require('data/film.json').filter(film => film.id == 1);

describe('Film List', () => {

    it('should be render correctly with films', () => {
        let component = mount(<FilmList loadingFlag={false} films={films} />)
        expect(component).toMatchSnapshot();
    });

    it('should be render correctly with films not found', () => {
        let component = mount(<FilmList loadingFlag={false} films={[]} />)
        expect(component).toMatchSnapshot();
    });

    it('should be render correctly with ContentLoader', () => {
        let component = mount(<FilmList loadingFlag={true} films={[]} />)
        expect(component).toMatchSnapshot();
    });

    it('should call setDetailMode()', () => {
        let changeView = jest.fn();
        let component = mount(<FilmList loadingFlag={false} films={films} setDetailMode={changeView} />)
        component.find('.logo-container').simulate('click');
        expect(changeView).toHaveBeenCalled();
    });

});