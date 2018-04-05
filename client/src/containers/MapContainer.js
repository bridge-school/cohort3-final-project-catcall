import React, { Component } from 'react';
import { connect } from 'react-redux';

import Map from '../components/Map';

import { getUserLocation, updatePinLocation } from '../actions/index';
import { bindActionCreators } from 'redux';

class MapContainer extends Component {
  render() {
    const { getUserLocation, updatePinLocation } = this.props;
    return (
      <div>
        <div>
          <h3>Latitude: {this.props.loc.lat}</h3>
          <h3>Longitude: {this.props.loc.lng}</h3>
        </div>
        <Map
          google={this.props.google}
          getUserLocation={getUserLocation}
          location={this.props.loc}
          updatePinLocation={updatePinLocation}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loc: state.rootReducer.locationReducer.loc
})

const mapDispatchToProps = dispatch => 
  bindActionCreators({ 
    getUserLocation: getUserLocation,
    updatePinLocation: updatePinLocation,
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);


