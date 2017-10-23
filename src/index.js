import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import registerServiceWorker from './registerServiceWorker';

//Component
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetails from './components/video_details'

const API_KEY = 'AIzaSyBLA9isDmO-0LCm-jio06VHd4HdsUJW23U';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };

        YTSearch({key: API_KEY, term: 'star wars'}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0] 
            });
        });
    }

    render() {
        return (
            <div> 
                <SearchBar />
                <VideoDetails video = { this.state.selectedVideo } />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos = { this.state.videos } />
            </div>
        );
    };
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();