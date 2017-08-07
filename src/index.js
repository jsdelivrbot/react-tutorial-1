import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Importing the search componenet from search.js
// ./ represents the current folder
// in this instance, index.js is within src
import Search from './components/search';

const API_KEY = 'AIzaSyAyaP1sDqv7Tw_scxs9EiqSPNhZuowxg_4';

// Create a new component
// This should create some HTML

class App extends Component {
	// Constructor
	// - a new instance of App
	constructor(props) {
		super(props);
		
		this.state = { 
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('surfboards');

	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});
		});		
	}

	render() {
		// Using debounce, this runs the following function
		// every so many seconds
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)

		return (
			<div>
				<Search onSearchTermChange = { videoSearch } />
				<VideoDetail video={ this.state.selectedVideo } />
				<VideoList 
					onVideoSelect = { selectedVideo => this.setState({selectedVideo}) }
					videos = { this.state.videos } 
				/>
			</div>
		);
	}
}

// ^ This alone will not render any content
// We now need to put the component into the DOM

// Writing just "App" creates a class of the "App" component
// Writing "<App></App>" or "<App />" creates a new instance of the component

// With this in mind, we now want to render an instance of this component into the DOM

// Writing, ReactDOM.render(<App />); , is not enough to render the component instance
// We need to tell React where we want this to be rendered, as seen below

ReactDOM.render(<App />, document.querySelector('.container'));



// ES6
// ----------------------
// In ES6, it is important to note that var is no longer used
// This has been replaced by "const" and "let"
//
// const
// what is it?
//
// const is similar to var in the sense that we are creating a reference
// the difference between const and var is that const is a constant
// const will NEVER change, aka, not variable!


// Only create one component per file