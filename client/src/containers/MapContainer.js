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
        <Map
          getUserLocation={getUserLocation}
          location={this.props.loc}
          updatePinLocation={updatePinLocation}
          placeId={this.props.placeId}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loc: state.rootReducer.locationReducer.loc,
  placeId: state.rootReducer.locationReducer.placeId
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getUserLocation: getUserLocation,
    updatePinLocation: updatePinLocation,
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);


