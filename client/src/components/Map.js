import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      map: null,
      pin: null
    };
  }

  getGoogleMaps() {
    const google = window.google;

    if (google) {
      return new Promise((resolve) => resolve(google))
    }

    // If we haven't already defined the promise, define it
    if (!this.googleMapsPromise) {
      this.googleMapsPromise = new Promise((resolve) => {
        // Add a global handler for when the API finishes loading
        window.resolveGoogleMapsPromise = () => {
          // Resolve the promise
          resolve(google);

          // Tidy up
          delete window.resolveGoogleMapsPromise;
        };

        // Load the Google Maps API
        const script = document.createElement("script");
        const API = 'AIzaSyA06nlgcoEtxl0TMQeh0Sm4DQjZh6gV_mA';
        script.src = `https://maps.googleapis.com/maps/api/js?key=${API}&callback=resolveGoogleMapsPromise`;
        script.async = true;
        document.body.appendChild(script);
      });
    }

    // Return a promise for the Google Maps API
    return this.googleMapsPromise;
  }

  componentWillMount() {
    // Start Google Maps API loading since we know we'll soon need it
    this.getGoogleMaps();
  }

  componentDidMount() {
    // Once the Google Maps API has finished loading, initialize the map
    this.getGoogleMaps().then(() => {
      this.loadMap();
    });
  }

  componentDidUpdate() {
    this.moveMap(this.props.location);
  }

  loadMap() {
    if (this.props && window.google) { // checks to make sure that props have been passed
      // const { google } = this.props; // sets props equal to google

      const google = window.google;
      const maps = window.google.maps; // sets maps to google maps props

      const mapRef = this.refs.map; // looks for HTML div ref 'map'. Returned in render below.
      const node = ReactDOM.findDOMNode(mapRef); // finds the 'map' div in the React DOM, names it node
      const locat = new google.maps.LatLng(
        this.props.location.lat,
        this.props.location.lng
      );
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

      const mapInstance = new maps.Map(node, mapConfig);

      this.setState({ map: mapInstance });

      const marker = new maps.Marker({
        position: { lat: locat.lat(), lng: locat.lng() },
        map: mapInstance,
        draggable: true
      });

      marker.addListener('dragend', () => {
        let position = marker.getPosition()
        let latitude = position.lat()
        let longitude = position.lng()
        this.props.updatePinLocation(latitude, longitude); // <-- our action
        //geocodePosition(marker.getPosition()); HERE
      });

      this.setState({ pin: marker });

    }
  }

  moveMap({ lat = 0, lng = 0 }) {
    this.state.map.panTo({ lat, lng });
    if (this.state.pin !== null) {
      this.state.pin.setPosition({ lat, lng });
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
};

export default Map;