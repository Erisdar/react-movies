import { shallow } from 'enzyme';
import React from 'react';
import ContentLoader from '../ContentLoader';

describe('Search component', () => {
    it('should be render correctly', () => {
        const component = shallow(<ContentLoader />);
        expect(component).toMatchSnapshot();
    });
});