import React, { Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';


// Create new component. This component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

  }
  render() {
    return (
    <div>
      <SearchBar />
    </div>
    );
  }

}

// Take this component`s generated HTML and put it on the page (in the DOM)
ReactDom.render(<App />, document.querySelector('.container'))
