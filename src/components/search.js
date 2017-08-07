// We are always going to need this in our files
// Import the React Library
// and create a new const called Component, based on the property called Component
import React, { Component } from 'react';

// Functional Component
// Use functional componens as standard
/*
	const Search = () => {
		return <input />;
	};
*/

// Class Component (ES6)
// If you need to add functionality to your component
// Switch to a Class based componenet
//
//
// Define a new class called Search
// and give it access to the functionality that React.Component has
class Search extends Component {
	// State
	// Only used in class based components

	// All JS classes have a constructor function
	// This is called automatically when a new instance is created
	constructor(props) {
		super(props);

		// The default state
		this.state = { term: '' };
	}

	// Every class based React Component needs a render method
	render() {
		return (
			<div className="search-bar">
				<input
					value = { this.state.term }
					onChange = { event => this.onInputChange(event.target.value) } 
				/>
			</div>
		);
	}

	onInputChange(term) {
		this.setState({ term });
		this.props.onSearchTermChange(term);
	}

}

// New instance of the class
/*
new Search
*/

// State
// This is a JavaScript object used to record and react to user events


// We want to export the Search component so as it is visible in our application
//
// Without the following export statement, 
// this component cannot be accessed from outside this file
export default Search;