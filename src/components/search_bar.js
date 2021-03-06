/**
 * Created by mporritt on 12/8/17.
 */

import React, { Component } from 'react';

// Functional component
//
// const SearchBar = () => {
//     return <input/> // React.createElement
// };


// class based component
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
    }

    render() {
        // return <input onChange={event => console.log(event.target.value)} />;
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState ({term});
        this.props.onSearchTermChange(term);
    }

}


// create an instance of the class
// new SearchBar()

export default SearchBar;