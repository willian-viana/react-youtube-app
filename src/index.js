import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import registerServiceWorker from './registerServiceWorker';
import _ from 'lodash';

//Component
import SearchBar from './components/searchBar/search_bar'
import VideoList from './components/videoList/video_list'
import VideoDetails from './components/videoDetails/video_details'

const API_KEY = 'AIzaSyBLA9isDmO-0LCm-jio06VHd4HdsUJW23U';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('star wars');
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0] 
            });
        });
    }

    render() {
        const videoSearch = _.debou
        return (
            <div className="container-fluid"> 
                <SearchBar onSearchTermChange = {term => this.videoSearch(term)} />
                <div className="row">
                    <VideoDetails video = { this.state.selectedVideo } />
                    <VideoList
                        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                        videos = { this.state.videos } />
                </div>
            </div>
        );
    };
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();