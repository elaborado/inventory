import React, { Component } from 'react';

// Info: Alle react komponenter som er klassebasert må ha en render metode
class SearchBar extends Component {

  // constructor kalles automatisk først når du har en klasse
  constructor(props) {
    super(props);

    this.state = { term: '' }; // { term: ''} er et object. 'term' er en propery
  }

  // Dette er en funksjon/metode
  render() {
      return (
        <div>
          <input
            value={this.state.term}
            onChange={event => this.setState({ term: event.target.value })} />
            Value of the input: {this.state.term}
      </div>
    );
  }



}

export default SearchBar;
