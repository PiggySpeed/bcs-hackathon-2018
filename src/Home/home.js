import React, {Component} from 'react';
import {IconButton} from '../shared/button';
import Passenger from '../images/passenger.svg';

const headerStyle = {
  fontSize: 64,
  fontWeight: 500,
  color: 'white'
};

const innerContainer = {
  display: 'flex',
  flexFlow: 'column',
  maxHeight: '10rem'
};

const buttonContainer = {
  display: 'flex',
  flexFlow: 'row'
};

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div style={innerContainer}>
          <h1 style={headerStyle}>Car Sharing App</h1>
          <div style={buttonContainer}>
            <IconButton>
              <img src={Passenger} className="icon-base" alt="passenger" />
            </IconButton>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
