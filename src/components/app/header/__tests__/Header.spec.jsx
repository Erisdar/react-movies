import { shallow } from 'enzyme';
import React from 'react';
import Header from '../Header';

describe('Header component', () => {
    it('should be render correctly', () => {
        const component = shallow(<Header />);
        expect(component).toMatchSnapshot();
    });
});