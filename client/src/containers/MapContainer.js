import React, { Component } from 'react';
import { connect } from 'react-redux';

import Map from '../components/Map';

import { updatePinLocation } from '../actions/index';
import { bindActionCreators } from 'redux';

  class MapContainer extends Component {
    render() {
      const { updatePinLocation, location, pinLocation } = this.props;
      return (
        <div>
          <div>
            <h3>Latitude: {this.props.pinLocation.latitude}</h3>
            <h3>Longitude: {this.props.pinLocation.longitude}</h3>
          </div>
          <Map
            google={this.props.google}
            updatePinLocation={updatePinLocation}
            location={location}
            pinLocation={pinLocation} />
        </div>
      );
    }
  }

const mapStateToProps = (state) => ({
  location: state.rootReducer.location,
  pinLocation: state.rootReducer.pinLocation
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ updatePinLocation: updatePinLocation }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);


