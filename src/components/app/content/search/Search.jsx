import React, { Component } from 'react';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import FindMovieText from './findMovieText/FindMovieText';
import './search.css';
import SearchButtonGroup from './searchButtonGroup/SearchButtonGroup';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchType: 'title',
            searchValue: ''
        }
    };

    setSearchValue(value) {
        this.setState({
            searchValue: value
        })
    };

    setSearchType(type) {
        this.setState({
            searchType: type
        })
    };

    render() {
        return (
            <div className="search content__search">
                <FindMovieText />
                <InputGroup className="mb-15">
                    <FormControl onInput={e => this.setSearchValue(e.target.value)} placeholder="Film" className="search__film-input"
                        data-cy='input' aria-label="Film" aria-describedby="basic-addon1" />
                </InputGroup>
                <SearchButtonGroup searchType={this.state.searchType} changeSearchType={(type) => this.setSearchType(type)}
                    search={() => this.props.onSearch(this.state.searchType, this.state.searchValue)} />
            </div>
        )
    }
};


