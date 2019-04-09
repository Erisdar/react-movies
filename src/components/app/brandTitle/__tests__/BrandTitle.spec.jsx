import { shallow } from 'enzyme';
import React from 'react';
import BrandTitle from '../BrandTitle';

describe('BrandTitle component', () => {
    it('should be render correctly', () => {
        const component = shallow(<BrandTitle />);
        expect(component).toMatchSnapshot();
    });
});