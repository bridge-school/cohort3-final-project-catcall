import React, { Component } from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import ReactDOM from 'react-dom'

class Map extends Component {
constructor(props) {
  super(props);
  this.state = {
    mapLoaded: false
  };
}
  componentDidUpdate() {
    this.loadMap(); 
  }

  loadMap() {
    if (this.props && this.props.google) { 
      const { google } = this.props; 
      const maps = google.maps;
      const mapRef = this.refs.map; 
      const node = ReactDOM.findDOMNode(mapRef); 
      const locat = new google.maps.LatLng(
        this.props.location.lat,
        this.props.location.lng
      );
      let marker;
      // TH: Style implemented is just a showing of how ic could be accomplished. Because it relies on its own properties, rather than CSS,
      // I don't believe Bootstrap + Styled-Components would apply here
      // styles can be better generated through https://mapstyle.withgoogle.com/ and have "styles" property imported here to replace 
      // the current one, once a design standard is decided on
      const mapConfig = Object.assign({}, {
        center: { lat: locat.lat(), lng: locat.lng() },
        zoom: 18,
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

      if (!this.state.mapLoaded){ // this prevents the map from reloading every time something updates
        this.map = new maps.Map(node, mapConfig);  
        maps.event.addListener(this.map, 'idle', () => {
          this.setState({ mapLoaded: true });
        });
        marker = new maps.Marker({ 
          position: {lat: locat.lat(), lng: locat.lng()}, 
          map: this.map, 
          draggable: true 
        });
      }
      
      if (marker){
        marker.addListener('dragend', () => {
          let position = marker.getPosition()
          let latitude = position.lat()
          let longitude = position.lng()
          this.props.updatePinLocation(latitude, longitude);
        });
      }
    }
  }

  render() {
    const style =
      {
        width: '100vw', 
        height: '70vh'
      }

    return ( 
      <div ref="map" style={style}>
        loading map...
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyA06nlgcoEtxl0TMQeh0Sm4DQjZh6gV_mA')
})(Map)
