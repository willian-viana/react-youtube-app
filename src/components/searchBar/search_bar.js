import React, { Component } from 'react';
import { searchBar, inputSearch } from './style';

class SearchBar extends Component { 
    constructor (props) {
        super(props);

        this.state = {term : ''};
    }

    render() {
        return (
            <searchBar>
                <inputSearch onChange={ event => this.setState({ term: event.target.value }) } />
                <p>Valor do input: { this.state.term } </p>
            </searchBar>
        )
    }

};

export default SearchBar;