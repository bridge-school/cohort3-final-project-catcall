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
      const { google } = this.props; // sets props equal to google
      const maps = google.maps; // sets maps to google maps props

      const mapRef = this.refs.map; // looks for HTML div ref 'map'. Returned in render below.
      const node = ReactDOM.findDOMNode(mapRef); // finds the 'map' div in the React DOM, names it node

      const locat = new google.maps.LatLng(
        this.props.location.browserLocation.latitude,
        this.props.location.browserLocation.longitude);

      // TH: Style implemented is just a showing of how ic could be accomplished. Because it relies on its own properties, rather than CSS,
      // I don't believe Bootstrap + Styled-Components would apply here
      // styles can be better generated through https://mapstyle.withgoogle.com/ and have "styles" property imported here to replace 
      // the current one, once a design standard is decided on
      const mapConfig = Object.assign({}, {
        center: { lat: locat.lat(), lng: locat.lng() },
        zoom: 14,
        mapTypeId: 'roadmap',
        styles: [
          { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
          { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
          { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
          { featureType: 'administrative.locality', elementType: 'labels.text.fill', stylers: [{ color: '#d59563' }] },
          { featureType: 'poi', elementType: 'labels.text.fill', stylers: [{ color: '#d59563' }] },
          { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#263c3f' }] },
          { featureType: 'poi.park', elementType: 'labels.text.fill', stylers: [{ color: '#6b9a76' }] },
          { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#38414e' }] },
          { featureType: 'road', elementType: 'geometry.stroke', stylers: [{ color: '#212a37' }] },
          { featureType: 'road', elementType: 'labels.text.fill', stylers: [{ color: '#9ca5b3' }] },
          { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#746855' }] },
          { featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{ color: '#1f2835' }] },
          { featureType: 'road.highway', elementType: 'labels.text.fill', stylers: [{ color: '#f3d19c' }] },
          { featureType: 'transit', elementType: 'geometry', stylers: [{ color: '#2f3948' }] },
          { featureType: 'transit.station', elementType: 'labels.text.fill', stylers: [{ color: '#d59563' }] },
          { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#17263c' }] },
          { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#515c6d' }] },
          { featureType: 'water', elementType: 'labels.text.stroke', stylers: [{ color: '#17263c' }] }
        ]
      })

      this.map = new maps.Map(node, mapConfig); // creates a new Google map on the specified node (ref='map') with the specified configuration set above.

      const marker = new google.maps.Marker({ // creates a new Google maps Marker object.
        position: { lat: locat.lat(), lng: locat.lng() },
        map: this.map, // sets markers to appear on the map we just created on line 35
        title: "Home", //TODO: update this title 
        draggable: true
      });

      marker.addListener('dragstart', function () {

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
    const style =
      {
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