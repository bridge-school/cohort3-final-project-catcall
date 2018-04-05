import React, { Component } from 'react';
import ReactDOM from 'react-dom'

export default class ViewReportMap extends Component {

  componentDidUpdate() {
    this.loadMap(); // call loadMap function to load the google map
  }

  loadMap() {
    if (this.props && this.props.google) { // checks to make sure that props have been passed
      const {google, reports} = this.props; // sets props equal to google
      const maps = google.maps; // sets maps to google maps props

      const mapRef = this.refs.map; // looks for HTML div ref 'map'. Returned in render below.
      const node = ReactDOM.findDOMNode(mapRef); // finds the 'map' div in the React DOM, names it node

      const mapConfig = Object.assign({}, {
        center: {lat: 43.660194100000005, lng: -79.383184}, // sets center of google map to NYC.
        zoom: 11, // sets zoom. Lower numbers are zoomed further out.
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
      
      const icons = {
        expressionless: {
          icon: 'https://emojipedia-us.s3.amazonaws.com/thumbs/60/apple/129/expressionless-face_1f611.png'
        },
        anguished: {
          icon: 'https://emojipedia-us.s3.amazonaws.com/thumbs/60/apple/129/anguished-face_1f627.png'
        },
        angry: {
          icon: 'https://emojipedia-us.s3.amazonaws.com/thumbs/60/apple/129/angry-face_1f620.png'
        },
        fearful: {
          icon: 'https://emojipedia-us.s3.amazonaws.com/thumbs/60/apple/129/fearful-face_1f628.png'
        },
        scream: {
          icon: 'https://emojipedia-us.s3.amazonaws.com/thumbs/60/apple/129/face-screaming-in-fear_1f631.png'
        }
      };

      this.map = new maps.Map(node, mapConfig); // creates a new Google map on the specified node (ref='map') with the specified configuration set above.
      
    // ==================
    // ADD MARKERS TO MAP
    // ==================
    reports.forEach( location => { // iterate through locations saved in state
      const marker = new google.maps.Marker({ // creates a new Google maps Marker object.
        position: {lat: location.latitude, lng: location.longitude}, // sets position of marker to specified location
        map: this.map, // sets markers to appear on the map we just created on line 35
        icon: icons[location.emotion].icon,
        title: location.emotion // the title of the marker is set to the name of the location
      });
    })
    }
  }



  render() {
    const style = { // MUST specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
      width: '90vw', // 90vw basically means take up 90% of the width screen. px also works.
      height: '75vh' // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
    }

    return ( // in our return function you must return a div with ref='map' and style.
      <div ref="map" style={style}>
        loading map...
      </div>
    )
  }
}
