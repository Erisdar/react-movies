import { mount } from 'enzyme';
import React from 'react';
import Search from '../Search';

describe('Search component', () => {
    it('should be render correctly', () => {
        const component = mount(<Search />);
        expect(component).toMatchSnapshot();
    });

    it('should call onSearch()', () => {
        const filtering = jest.fn();
        const component = mount(<Search onSearch={filtering} />);
        component.find('button.search-button-group__search').simulate('click');
        expect(filtering).toHaveBeenCalled();
    });

    it('should change state searchValue onInput', () => {
        const component = mount(<Search />);
        expect(component.state().searchValue).toEqual('');
        component.find('input.search__film-input').simulate('input', { target: { value: 'Hello' } });
        expect(component.state().searchValue).toEqual('Hello');
    });

    it('should change state searchType onClick', () => {
        const component = mount(<Search />);
        expect(component.state().searchType).toEqual('title');
        component.find('button.search-button-group__genre').simulate('click');
        expect(component.state().searchType).toEqual('genre');
        component.find('button.search-button-group__title').simulate('click');
        expect(component.state().searchType).toEqual('title');
    });
});