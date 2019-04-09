import React from 'react';
import { shallow } from 'enzyme';
import FilmImage from '../FilmImage';

describe('Film image component', () => {
    it('should be render correctly', () => {
        const component = shallow(<FilmImage logo={'harry_potter.jpg'} alt={'HarryPotter'} />);
        expect(component).toMatchSnapshot();
    });
});