/* eslint-disable */
import React, { Component, PureComponent } from 'react';
// import GoogleMap from 'google-map-react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer, Polyline } from 'react-google-maps';
const { compose, withProps, lifecycle } = require("recompose");
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

const combined = {
  ...visits,
  ubc: {
    location: {
      lat: 49.2613153,
      lng: -123.2559719
    }
  },
  home: {
    location: {
      lat: 49.2318372,
      lng: -123.0107467
    }
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
        console.log("tree", body.solution.vehicle_1);
        const tree = getLatLon(body.solution.vehicle_1);
        this.setState({ routes: tree });
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
        <GoogleMapExample pathCoordinates={this.state.routes}/>
      </div>
    );
  }
}

function getLatLon(arr) {
  const res2 = [];

  const res = arr.map(item => {
    return {
      lat: combined[item.location_id].location.lat,
      lng: combined[item.location_id].location.lng
    }
  });

  for (let i = 1; i<res.length; i++) {
    res2.push([res[i-1], res[i]]);
  }

  return res2;
}


const GoogleMapExample = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBfzfG_CDAaVM2mYzqBRhQAe70ZX_epyHA&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%`, width: '400px' }} />,
    containerElement: <div style={{ height: `400px`, width: '400px' }} />,
    mapElement: <div style={{ height: `100%`, width: '400px' }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();

      DirectionsService.route({
        origin: new google.maps.LatLng(49.2485585, -123.0579327),
        destination: new google.maps.LatLng(49.2679807, -123.1886416),
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
)(props => {
  console.log(props.pathCoordinates);
  return (
  <GoogleMap
    defaultZoom={13}
    defaultCenter = { { lat: 49.2318372, lng: -123.0107467 } }
  >
    {(props.pathCoordinates.map((coords, id) => <Polyline
      key={id}
      path={coords}
      geodesic={true}
      options={{
        strokeColor: '#ff2527',
        // strokeOpacity: 0.0,
        strokeWeight: 4,
        // icons: [{
        //   icon: lineSymbol,
        //   offset: '0',
        //   repeat: '20px'
        // }],
      }}/>))}
  </GoogleMap>)}
);

const testCoor = [
    { lat: 49.2318372, lng: -123.0107467 },
    { lat: 49.2613153, lng: -123.2559719 }
  ];

    // {props.directions && <DirectionsRenderer directions={props.directions} />}
export default RouteMap;
