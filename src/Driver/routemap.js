/* eslint-disable */

import React, { Component, PureComponent } from 'react';
// import GoogleMap from 'google-map-react';
import {   withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer, } from 'react-google-maps';
const request = require('request');
// const data = require('./demo2.json');
// var data = require('./demo.json');

const API_KEY = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWE0NjFiZTZmNTk5YzE2ZGEzZDVhNzgiLCJpYXQiOjE1MjA3MjIzNjZ9.eAUtQuvek8JdumKiEdP-0KhAw6BngBZqJFSWrfBIxhU';
const fleet = {
  vehicle_1: {
    start_location: {
      // Pizza Hut
      id: 'home',
      name: '1-4287 Kingsway, Burnaby, BC V5H 1Z5',
      lat: 49.2318372,
      lng: -123.0107467
    },
    end_location: {
      // UBC
      id: 'ubc',
      name: '2329 West Mall, Vancouver, BC V6T 1Z4',
      lat: 49.2613153,
      lng: -123.2559719
    },
    shift_start: "8:00",
    shift_end: "12:00"
  }
};

const visits = {
  order_1: {
    location: {
      // name: 'Nanaimo Skytrain Station',
      name: '2450 E 24th Ave, Vancouver, BC V5R 5X6',
      lat: 49.2485585,
      lng: -123.0579327
    },
    start: "8:00",
    end: "9:00",
    duration: 5
  },
  order_2: {
    location: {
      //name: 'Storm Crow Alehouse',
      name: '1619 W Broadway, Vancouver, BC V6J 1W9',
      lat: 49.2639666,
      lng: -123.1436714
    },
    start: "8:00",
    end: "9:00",
    duration: 5
  },
  order_3: {
    location: {
      //name: 'Thomas Haas',
      name: '2539 W Broadway, Vancouver, BC V6K 2E9',
      lat: 49.2641816,
      lng: -123.1654911
    },
    start: "8:00",
    end: "9:00",
    duration: 5
  },
  order_4: {
    location: {
      //name: `Jason's No Frills`,
      name: '2083 Alma St, 130, Vancouver, BC V6R4N6',
      lat: 49.2679807,
      lng: -123.1886416
    },
    start: "8:00",
    end: "9:00",
    duration: 5
  }
};

class RouteMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      routes: [],
      map: null,
      maps: null,
      mapLoaded: false
    };
  }

  getRoute = () => {
    const plan = { visits: visits, fleet: fleet };

    const options = {
      url: 'https://api.routific.com/v1/vrp',
      method: 'POST',
      headers: {
        "Authorization": API_KEY,
        "content-type": "application/json"
      },
      json: plan
    };

    request.post(options, (err, res, body) => {
      if (!err && res.statusCode == 200) {
        console.log(body.solution.vehicle_1);
        this.setState({ routes: body.solution.vehicle_1 });
      } else {
        console.log(err);
      }
    })
  };

  render() {
    return (
      <div>
        <button onClick={this.getRoute}>CLICK ME</button>
        {/*{this.state.routes.map((stop) => (*/}
          {/*<p key={stop.location_id}>{stop.location_name} time: {stop.arrival_time}</p>*/}
        {/*))}*/}
        {/*{this.state.routes.length > 0 && <DirectionsRenderer directions={this.state.routes} />}*/}
        <GoogleMapExample
          containerElement={ <div style={{ height: `400px`, width: '540px' }} /> }
          mapElement={ <div style={{ height: `100%`, width: '100%' }} /> }
        />
      </div>
    );
  }
}

const GoogleMapExample = withGoogleMap(props => (
  <GoogleMap
    defaultCenter = { { lat: 49.2318372, lng: -123.0107467 } }
    defaultZoom = { 13 }
  >
  </GoogleMap>
));

const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();

      DirectionsService.route({
        origin: new google.maps.LatLng(41.8507300, -87.6512600),
        destination: new google.maps.LatLng(41.8525800, -87.6514100),
        travelMode: google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }
  })
)(props =>

  //*<GoogleMap*/
    // defaultCenter = { { lat: 49.2318372, lng: -123.0107467 } }
    // defaultZoom = { 13 }
  // >
  // </GoogleMap>

  <GoogleMap
    defaultZoom={13}
defaultCenter = { { lat: 49.2318372, lng: -123.0107467 } }

// defaultCenter={new google.maps.LatLng(41.8507300, -87.6512600)}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
);

export default RouteMap;
