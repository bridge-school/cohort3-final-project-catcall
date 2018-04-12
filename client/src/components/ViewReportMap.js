import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import icons from '../shared/data';
import { connect } from 'react-redux';

class ViewReportMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      map: null,
      pin: null, 
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


  loadMap() {
    
    if (this.props && window.google) { // checks to make sure that props have been passed      
      const maps = window.google.maps; // sets maps to google maps props

      const mapRef = this.refs.map; // looks for HTML div ref 'map'. Returned in render below.
      const node = ReactDOM.findDOMNode(mapRef); // finds the 'map' div in the React DOM, names it node

      // TH: Style implemented is just a showing of how ic could be accomplished. Because it relies on its own properties, rather than CSS,
      // I don't believe Bootstrap + Styled-Components would apply here
      // styles can be better generated through https://mapstyle.withgoogle.com/ and have "styles" property imported here to replace 
      // the current one, once a design standard is decided on
      const mapConfig = Object.assign({}, {
        center: { lat: 43.651913, lng: -79.370575 },
        zoom: 13,
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

    }
  }


  render() {
    const { reports } = this.props;
    const maps = window.google.maps;
    const style =
      {
        width: '100vw',
        height: '70vh'
      }
      reports.forEach(location => { // iterate through locations saved in state
        // ==================
        // ADD MARKERS TO MAP
        // ==================

        new maps.Marker({ // creates a new Google maps Marker object.
          position: { lat: location.latitude, lng: location.longitude }, // sets position of marker to specified location
          map: this.state.map, // sets markers to appear on the map we just created on line 35
          icon: icons[location.emotion].icon,
          title: location.emotion  // the title of the marker is set to the name of the location
        });
      });
      if(this.props.loc.lat && this.state.map){
        const { lat, lng } = this.props.loc;
        this.state.map.setCenter(new maps.LatLng(lat, lng));
      }
      
    return (
      <div>
        <div ref="map" style={style}>
          loading map...
          
        </div>
      </div>
      
    )
  }
};

const mapStateToProps = state => ({
  loc: state.rootReducer.locationReducer.loc
})

export default connect(mapStateToProps, null)(ViewReportMap);