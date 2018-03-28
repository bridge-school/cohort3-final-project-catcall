import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import { GoogleApiWrapper } from 'google-maps-react' 
class Map extends Component {

  // ======================
  // ADD LOCATIONS TO STATE
  // ======================
  // state = {
  //   locations: [
  //     { name: "New York County Supreme Court", location: {lat: 40.7143033, lng: -74.0036919} },
  //     // { name: "Queens County Supreme Court", location: {lat: 40.7046946, lng: -73.8091145} },
  //     // { name: "Kings County Supreme Court", location: {lat: 40.6940226, lng: -73.9890967} },
  //     // { name: "Richmond County Supreme Court", location: {lat: 40.6412336, lng: -74.0768597} },
  //     // { name: "Bronx Supreme Court", location: {lat: 40.8262388, lng: -73.9235238} }
  //   ]
  // }

  state = {
      location: {
        lat: this.props.location.browserLocation.latitude, 
        lng: this.props.location.browserLocation.longitude
      } 
  }

  componentDidUpdate() {
    this.loadMap(); // call loadMap function to load the google map
  }

  loadMap() {


    console.log(this.state.location);
    if (this.props && this.props.google) { // checks to make sure that props have been passed
      const {google} = this.props; // sets props equal to google
      const maps = google.maps; // sets maps to google maps props

      const mapRef = this.refs.map; // looks for HTML div ref 'map'. Returned in render below.
      const node = ReactDOM.findDOMNode(mapRef); // finds the 'map' div in the React DOM, names it node
      
      //
      const locat = new google.maps.LatLng(
        this.props.location.browserLocation.latitude,
        this.props.location.browserLocation.longitude);


      const mapConfig = Object.assign({}, {
        center: {lat: locat.lat(), lng: locat.lng()}, // sets center of google map to NYC.
        zoom: 14, // sets zoom. Lower numbers are zoomed further out.
        mapTypeId: 'roadmap' // optional main map layer. Terrain, satellite, hybrid or roadmap--if unspecified, defaults to roadmap.
      })

      this.map = new maps.Map(node, mapConfig); // creates a new Google map on the specified node (ref='map') with the specified configuration set above.

  // ==================
  // ADD MARKERS TO MAP
  // ==================
      // this.state.location.forEach( location => { // iterate through locations saved in state
        const marker = new google.maps.Marker({ // creates a new Google maps Marker object.
          position: {lat: locat.lat(), lng: locat.lng()}, // sets position of marker to specified location
          map: this.map, // sets markers to appear on the map we just created on line 35
          title: "Home",
          draggable: true // the title of the marker is set to the name of the location
        });
        
        marker.addListener('dragstart', function() {

        });

        marker.addListener('dragend', () => {
            var position = marker.getPosition()
            var latitude = position.lat()
            var longitude = position.lng()
            this.props.updatePinLocation(latitude, longitude);
        });
      // })

    }
  }

  render() {
    const style = { 
        width: '90vw', // 90vw basically means take up 90% of the width screen. px also works.
        height: '75vh'
    }

    return ( // in our return function you must return a div with ref='map' and style.
      <div ref="map" style={style}>
        loading map...
      </div>
    )
  }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyA-gMsKVvKdp63xHF1AGfQ-r65vQV4Jsh4',
  })(Map);