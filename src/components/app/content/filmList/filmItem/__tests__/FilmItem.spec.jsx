import FilmImage from 'app/content/filmImage/FilmImage';
import { mount } from 'enzyme';
import React from 'react';
import FilmItem from '../FilmItem';

jest.mock('app/content/filmImage/FilmImage');

const testFilm = require('data/film.json').find(film => film.id === "1");

describe('Film item component', () => {
    it('should be render correctly with FilmImage', () => {
        FilmImage.mockImplementation(({ logo, alt }) => {
            return <img src={require(`src/img/${logo}`)} alt={alt} className="film-logo" />
        });
        const component = mount(<FilmItem film={testFilm} />);
        expect(component).toMatchSnapshot();
    });

    it('should be call moreDetail()', () => {
        let moreDetail = jest.fn();
        const component = mount(<FilmItem film={testFilm} moreDetail={moreDetail} />);
        component.find('.logo-container').simulate('click');
        expect(moreDetail).toHaveBeenCalled();
    });

    it('should be render correctly with ImageErrorBoundary', () => {
        console.error = jest.fn();
        console.log = jest.fn();
        FilmImage.mockImplementation(() => {
            throw new Error('Test error');
        });
        const component = mount(<FilmItem film={testFilm} />);
        expect(FilmImage).toThrow();
        expect(component).toMatchSnapshot();
    });
});
