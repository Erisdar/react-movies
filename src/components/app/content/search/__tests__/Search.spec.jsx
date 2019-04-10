import { shallow, mount } from 'enzyme';
import React from 'react';
import Search from '../Search';

describe('Search component', () => {
    it('should be render correctly', () => {
        const component = shallow(<Search />);
        expect(component).toMatchSnapshot();
    });

    it('should call search() onSumbit', () => {
        const search = jest.fn();
        const component = mount(<Search search={search} />);
        component.find('button.search__button-search').simulate('submit');
        expect(search).toHaveBeenCalled();
    });

    it('should change searchValue onInput', () => {
        const changeSearchValue = jest.fn();
        const component = shallow(<Search changeSearchValue={changeSearchValue} />);
        component.find('.search__film-input').simulate('change', { target: { value: 'Hello' } });
        expect(changeSearchValue).toHaveBeenCalledWith('Hello');
    });
});