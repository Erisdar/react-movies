import { shallow } from 'enzyme';
import React from 'react';
import Footer from '../Footer';

describe('Footer component', () => {
    it('should be render correctly', () => {
        const component = shallow(<Footer />);
        expect(component).toMatchSnapshot();
    });
});