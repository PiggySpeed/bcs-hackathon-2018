import React, {Component} from 'react';
import {IconButton} from '../shared/button';
import Passenger from '../images/passenger.svg';
import Car from '../images/car.svg';

const headerStyle = {
  fontSize: 64,
  fontWeight: 500,
  color: 'white',
  marginBottom: '2rem'
};

const innerContainer = {
  flex: 'none',
  flexFlow: 'column',
  minHeight: '5rem'
};

const buttonContainer = {
  display: 'flex',
  flexFlow: 'row'
};

const iconBtnStyle = {
  backgroundColor: '#57c25a',
  height: '8rem',
  width: '8rem',
  margin: '2rem'
};

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div style={innerContainer}>
          <img src={Car} className="icon-base" alt="driver" />
          <h1 style={headerStyle}>Car Sharing App</h1>
          <div style={buttonContainer}>
            <IconButton
              style={iconBtnStyle}
              onClick={() => this.props.history.push('/passenger')}>
              <img src={Passenger} className="icon-base" alt="passenger" />
            </IconButton>
            <IconButton
              style={iconBtnStyle}
              onClick={() => this.props.history.push('/driver')}>
              <img src={Car} className="icon-base" alt="driver" />
            </IconButton>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
