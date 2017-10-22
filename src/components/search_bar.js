import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class SearchBar extends Component { 
    constructor (props) {
        super(props);

        this.state = {term : ''};
    }

    render() {
        return (
            <div>
                <input onChange={ event => this.setState({ term: event.target.value }) } />
                <p>Valor do input: { this.state.term } </p>
            </div>
        )
    }

};

export default SearchBar;