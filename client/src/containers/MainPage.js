import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getUserLocation, fetchLocation } from '../actions/index';
import { Link } from 'react-router-dom';

import Input from '../components/Input';
import Button from '../components/Button';

class MainPage extends Component {

  componentDidMount() {
    if (navigator.geolocation) {
      this.props.fetchLocation(navigator.geolocation);
    }
  }

  handleChange = (e) => {
    this.props.getUserLocation(e.target.value);
  }

  startNewReport = () => { }

  viewReports = () => { }

  render() {
    const { browserLocation } = this.props;

    const location = browserLocation && browserLocation.latitude && browserLocation.longitude ? `${browserLocation.latitude} ${browserLocation.longitude}` : 'Loading location...';

    return (
      <div className="App">
        <Input
          inputValue={location}
          handleChange={this.handleChange}
        />
        {/* TH: inline style on Button >> Link only till we figure out whethher the routing will be done indeed through 
          Links or via onClick handlers */}
        <Button bsStyle="primary"><Link to="/report" style={{ color: 'white' }}>Report Incident</Link></Button >
        <Button bsStyle="primary"><Link to="/data" style={{ color: 'white' }}>View Reports</Link></Button>
      </div >
    );
  }
}

const mapStateToProps = state => ({
  userLocation: state.rootReducer.location.userInput,
  browserLocation: state.rootReducer.location.browserLocation
})

MainPage.propTypes = {
  browserLocation: PropTypes.object.isRequired,
  userLocation: PropTypes.object.isRequired,
  fetchLocation: PropTypes.func.isRequired,
  getUserLocation: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
}

const mapDispatchToProps = {
  getUserLocation,
  fetchLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
