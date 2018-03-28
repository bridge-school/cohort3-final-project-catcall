import React from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';


const MapContainer = ({ coordinates }) => {
    return (
      <Map 
        google={window.google} 
        zoom={14} 
        style={{width: '100%', height: '50%', position: 'relative'}} 
        center={ coordinates } >
        
        <Marker 
          onClick={this.onMarkerClick} 
          name={'Current location'} 
          position={ coordinates } />
      
      </Map>
    );
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyA06nlgcoEtxl0TMQeh0Sm4DQjZh6gV_mA')
})(MapContainer)