import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import { GoogleApiWrapper } from 'google-maps-react' 
class Map extends Component {

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
      
      const locat = new google.maps.LatLng(
        this.props.location.browserLocation.latitude,
        this.props.location.browserLocation.longitude);


      const mapConfig = Object.assign({}, {
        center: {lat: locat.lat(), lng: locat.lng()}, 
        zoom: 14, 
        mapTypeId: 'roadmap' 
      })

      this.map = new maps.Map(node, mapConfig); // creates a new Google map on the specified node (ref='map') with the specified configuration set above.

        const marker = new google.maps.Marker({ // creates a new Google maps Marker object.
          position: {lat: locat.lat(), lng: locat.lng()}, 
          map: this.map, // sets markers to appear on the map we just created on line 35
          title: "Home", //TODO: update this title 
          draggable: true 
        });
        
        marker.addListener('dragstart', function() {

        });

        marker.addListener('dragend', () => {
            var position = marker.getPosition()
            var latitude = position.lat()
            var longitude = position.lng()
            this.props.updatePinLocation(latitude, longitude);
        });
    }
  }

  render() {
    const style = { 
        width: '90vw', //TODO: update these
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