import { shallow } from 'enzyme';
import React from 'react';
import { App } from '../App';

jest.mock('react-dom');

describe('AppContainer component', () => {
    it('should be render correctly', () => {
        const component = shallow(<App />);
        expect(component).toMatchSnapshot();
    });
});