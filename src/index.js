import React from 'react';
import ReactDOM from 'react-dom';

//Component
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBLA9isDmO-0LCm-jio06VHd4HdsUJW23U';

const App = () => {
    return (
        <div> 
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));