import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar';
import {List, ListItem} from 'material-ui/List';
import SelectableList from '../List/SelectableList.js';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

class Passenger extends Component {
  render() {
    return (
      <div>
        <h1>Hello, Passenger!</h1>
        <br/>
        <SearchBar
          onChange={() => console.log('onChange')}
          onRequestSearch={() => console.log('onRequestSearch')}
          style={{
            margin: '0 auto',
            maxWidth: 800
          }}
        />
        <SelectableList>
          <Subheader>Drivers Near You</Subheader>
          <ListItem
            value={1}
            primaryText="Player One"
            secondaryText="Time: 08:00"
            leftAvatar={<Avatar src="images/ok-128.jpg" />}
          />
          <Divider />
          <ListItem
            value={3}
            primaryText="Player Two"
            leftAvatar={<Avatar src="images/kerem-128.jpg" />}
          />
          <Divider />
          <ListItem
            value={4}
            primaryText="Player Three"
            leftAvatar={<Avatar src="images/kolage-128.jpg" />}
          />
          <Divider />
          <ListItem
            value={5}
            primaryText="Player Four"
            leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
          />
        </SelectableList>
      </div>
    );
  }
}

export default Passenger;

