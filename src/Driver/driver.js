import React, { Component } from 'react';
import RouteMap from './routemap';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import FlatButton from 'material-ui/FlatButton';

const innerContainer = {
  width: '100px',
  height: '100px'
}

class Driver extends Component {
  constructor(props){
    super(props);
    this.state = {
      numofpass: null,
      cardescription: null,
      carplate: null,
      date: null,
      time: null,
    }
  }
  render() {
    return (
      <div style={{display: 'flex'}}>
       <div style={{paddingRight: 50, color: 'white'}}>
        <h2 style={{color: 'white', fontSize: 16}}>Please add your information below.</h2>
        <br />
        <br />
        <div>
        <h1>Car Information</h1>
        <TextField className="numofpass" onChange={() => {this.props.numofpass}}
          hintText="Enter number"
          floatingLabelText="Number of passengers"
          floatingLabelFixed={true}
          />
          <br />
          <TextField className="cardescription" onChange={() => {this.props.cardescription}}
            hintText="Enter make, model and colour"
            floatingLabelText="Car description"
            floatingLabelFixed={true}
            />
            <br />
            <TextField className="carplate" onChange={() => {this.props.carplate}}
              hintText="Enter plate number"
              floatingLabelText="Car plate"
              floatingLabelFixed={true}
              /><br />
              <h2>Ride Details</h2>
              <DatePicker hintText="Please select date of ride" container="inline"
              className="date" onChange={() => {this.props.date}}
              /><br />
              <TimePicker
              className="time" onChange={() => {this.props.time}}
              hintText="Please select pickup time"
              style={innerContainer}/>
              <FlatButton label="OK" primary={true} />
      </div>
       </div>
        <RouteMap />

      </div>
    );
  }
}
export default Driver;
