import React, { Component } from 'react';
import RouteMap from './routemap';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import FlatButton from 'material-ui/FlatButton';

const innerContainer = {
  width: '500px',
  height: '500px'
}

class Driver extends Component {
  render() {
    return (
      <div>
        <h1>Driver</h1>
        <RouteMap />
        <h2>Please add your information below.</h2>
<br />
<br />
        <div>
        <h1>Car Information</h1>
        <TextField
          hintText="Enter number"
          floatingLabelText="Number of passengers"
          floatingLabelFixed={true}
          /><br />
          <TextField
            hintText="Enter make, model and colour"
            floatingLabelText="Car description"
            floatingLabelFixed={true}
            /><br />
            <TextField
              hintText="Enter plate number"
              floatingLabelText="Car plate"
              floatingLabelFixed={true}
              /><br />
              <h2>Ride Details</h2>
              <DatePicker hintText="Please select date of ride" container="inline"
              /><br />
              <TimePicker
              hintText="Please select pickup time"
              style={innerContainer}/>
              <FlatButton label="OK" primary={true} />
      </div>
        <RouteMap />

      </div>

    );
  }
}

export default Driver;
