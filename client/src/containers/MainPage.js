import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getUserLocation, fetchLocation } from '../actions/index';
import { Link } from 'react-router-dom';

import '../App.css';

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
    const { loc } = this.props;

    const location = loc && loc.lat && loc.lng ? `${loc.lat} ${loc.lng}` : 'Loading location...';

    return (
      <div className="App">
        <Input
          inputValue={location}
          handleChange={this.handleChange}
        />
        <Button><Link to="/report">Report Incident</Link></Button>
        <Button><Link to="/data">View Reports</Link>

        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userLocation: state.rootReducer.locationReducer.userInput,
  loc: state.rootReducer.locationReducer.loc
})

  MainPage.propTypes = {
  loc: PropTypes.object.isRequired,
  //userLocation: PropTypes.object.isRequired,
  fetchLocation: PropTypes.func.isRequired,
  getUserLocation: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
}

const mapDispatchToProps = {
  getUserLocation,
  fetchLocation,
};


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
