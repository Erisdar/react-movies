import { shallow } from 'enzyme';
import FindMovieText from '../FindMovieText';
import React from 'react';

describe('FindMovieText', () => {
    it('should be render correctly', () => {
        const component = shallow(<FindMovieText />);
        expect(component).toMatchSnapshot();
    });
});