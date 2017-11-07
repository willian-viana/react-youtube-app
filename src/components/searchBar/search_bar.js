import React, { Component } from 'react';
import { SearchBarContainer, InputSearch } from './style';

class SearchBar extends Component { 
    constructor (props) {
        super(props);

        this.state = {term : ''};
    }

    onInputChange (term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <SearchBarContainer>
                <InputSearch onChange={ event => this.onInputChange(event.target.value) } />
            </SearchBarContainer>
        )
    }

};

export default SearchBar;