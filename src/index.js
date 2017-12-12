import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyDAWMHgUueM2FhCSB9R9510HRlI_iyo_3g';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { videos:  [] };

        YTSearch({key:API_KEY, term:'surfboards'}, (videos) => {
            // this.setState({ videos: videos})
            // Only works when key and value are the same name
            this.setState({ videos });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos = {this.state.videos} />
            </div>
        );
    }
};


ReactDOM.render(<App/>, document.querySelector('.container'));

