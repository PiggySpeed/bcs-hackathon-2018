import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar';

class Passenger extends Component {
  render() {
    return (
      <div>
        <h1>Hello, Passenger!</h1>
        <SearchBar
          onChange={() => console.log('onChange')}
          onRequestSearch={() => console.log('onRequestSearch')}
          style={{
            margin: '0 auto',
            maxWidth: 1800
          }}
        />
        
      </div>
    );
  }
}

export default Passenger;