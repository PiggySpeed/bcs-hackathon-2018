import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar';
import {List, ListItem} from 'material-ui/List';
import SelectableList from '../List/SelectableList.js';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import SMS from 'material-ui/svg-icons/notification/sms';

class Passenger extends Component {
  render() {
    return (
      <div>
        {/*<h1>Hello, Passenger!</h1>*/}
        <br/>
        <SearchBar
          onChange={() => console.log('onChange')}
          onRequestSearch={() => console.log('onRequestSearch')}
          style={{
            margin: '0 auto',
            maxWidth: 800
          }}
        />
        <br/>
        <SelectableList>
          <Subheader>Drivers Near You</Subheader>
          <div>
            <ListItem
              value={1}
              primaryText="Player One"
              leftAvatar={<Avatar src="../images/passenger.svg" />}
              initiallyOpen={true}
              rightIcon={<SMS />}
              nestedItems={[
                <ListItem secondaryText="Time: 08:00" />,
                <ListItem secondaryText="Location: Burnaby" />,
                <ListItem secondaryText="Rating: 4.2" />
              ]}
            />
          </div>
          <div>
            <ListItem
              value={2}
              primaryText="Player Two"
              leftAvatar={<Avatar src="../images/passenger.svg" />}
              initiallyOpen={true}
              rightIcon={<SMS />}
              nestedItems={[
                <ListItem secondaryText="Time: 13:00" />,
                <ListItem secondaryText="Location: Coquitlam" />,
                <ListItem secondaryText="Rating: 4.8" />
                ]}
            />
          </div>
        </SelectableList>
      </div>
    );
  }
}

export default Passenger;

