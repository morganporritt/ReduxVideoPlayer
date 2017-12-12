import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDAWMHgUueM2FhCSB9R9510HRlI_iyo_3g';

// Create a new component. This component should produce some HTML
    const App = () => {
        return (
            <div>
                <SearchBar />
            </div>
        );
    };


// Take this component generated HTML and put it on the page (In the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));

