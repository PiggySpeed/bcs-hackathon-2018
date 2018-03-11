import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar';
import {List, ListItem} from 'material-ui/List';
import SelectableList from '../List/SelectableList.js';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import SMS from 'material-ui/svg-icons/notification/sms';
import Person from 'material-ui/svg-icons/social/person';

class Passenger extends Component {
  render() {
    return (
      <div style={{width: 600, color: 'white'}}>
        <h1 style={{paddingTop: "5%",textAlign: "center", color: "#57c25a", fontSize: "200%"}}>Hello, Passenger!</h1>
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
          <Subheader style={{paddingLeft: "18%"}}>Drivers Near You</Subheader>
          <div style={{paddingLeft: "18%", paddingRight: "18%"}}>
            <ListItem
              value={1}
              primaryText="Harry Potter"
              leftAvatar={<Avatar icon={<Person />} />}
              initiallyOpen={true}
              rightIcon={<SMS />}
              nestedItems={[
                <ListItem secondaryText="Time: 08:00" />,
                <ListItem secondaryText="Location: Burnaby" />,
                <ListItem secondaryText="Rating: 4.2" />
              ]}
            />
          </div>
          <div style={{paddingLeft: "18%", paddingRight: "18%"}}>
            <ListItem
              value={2}
              primaryText="Hermoine Granger"
              leftAvatar={<Avatar icon={<Person />} />}
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
