import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from '../Home/home';
import Driver from '../Driver/driver';
import DriverQueue from '../Driver/driverQueue';
import Passenger from '../Passenger/passenger';
import './app.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Route
              exact path="/"
              render={(routeProps) => (<Home {...routeProps} />)}
          />
          <Route
              exact path="/driver"
              render={(routeProps) => (<Driver {...routeProps} />)}
          />
          <Route
              exact path="/driver-queue"
              render={(routeProps) => (<DriverQueue {...routeProps} />)}
          />
          <Route
            exact path="/passenger"
            render={(routeProps) => (<Passenger {...routeProps} />)}
          />
        </div>
      </HashRouter>
    );
  }
}

export default App;
