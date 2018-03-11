import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

const buttonStyle = {
  margin: 12,
};

class DriverQueue extends Component {
  render() {
    return (
      <div>
        <h1>Passenger Queue</h1>
          <div>
          <List>
            <ListItem primaryText="Time: 08:00, Location: Burnaby, Rating: 4.2" leftCheckbox={<Checkbox />} />
            <ListItem primaryText="Time: 13:00, Location: Coquitlam, Rating: 4.8" leftCheckbox={<Checkbox />} />
          </List>
          </div>
          <div>
          <RaisedButton label="Select Passengers" primary={true} style={buttonStyle} />
          </div>
      </div>
    );
  }
}

export default DriverQueue;
