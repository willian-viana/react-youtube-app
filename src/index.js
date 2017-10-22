import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

//Component
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'

const API_KEY = 'AIzaSyBLA9isDmO-0LCm-jio06VHd4HdsUJW23U';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'star wars'}, (videos) => {
            this.setState( { videos })
        })
    }

    render() {
        return (
            <div> 
                <SearchBar />
                <VideoList videos = { this.state.videos } />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));