import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

//Component
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBLA9isDmO-0LCm-jio06VHd4HdsUJW23U';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'star wars'}, (data) => {
            this.setState( { videos: data })
        })
    }

    render() {
        return (
            <div> 
                <SearchBar />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));