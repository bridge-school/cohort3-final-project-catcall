import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import { getUserLocation, fetchLocation } from '../actions/index';
import { Link } from 'react-router-dom';

import { StyledGrid, StyledRow, StyledCol } from '../components/styled/StyledGridElements';
import Button from '../components/Button';
import SimpleForm from '../components/Searchbar';
import NavBar from '../components/NavBar';

class MainPage extends Component {

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => this.props.fetchLocation(position))
    }
  }

  handleFormSubmit = (e) => {
    geocodeByAddress(this.props.userLocation)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.props.getUserLocation({ latitude: latLng.lat, longitude: latLng.lng }))
      .catch(error => console.error('Error', error));
  }

  render() {
    const { loc } = this.props;
    const validForm = (loc.lat && loc.lng) || this.props.userInput

    return (
      <div>
        <NavBar />
        <StyledGrid>
          <StyledRow>
            <StyledCol xs={12} lg={12}>
              <SimpleForm style={{ zIndex: 100 }} />
            </StyledCol>
          </StyledRow>
          <StyledRow>
            <StyledCol xs={12} sm={12} md={6} lg={6}>
              <Link to="/report" style={{ color: 'white' }}><Button bsStyle="primary" disabled={!validForm} onClick={this.handleFormSubmit}>Report Incident</Button ></Link>
            </StyledCol>
            <StyledCol xs={12} sm={12} md={6} lg={6}>
              <Link to="/data" style={{ color: 'white' }}><Button bsStyle="primary">View Reports</Button></Link>
            </StyledCol>
          </StyledRow>
        </StyledGrid>
      </div >
    );
  }
}

const mapStateToProps = state => ({
  userLocation: state.rootReducer.locationReducer.userInput,
  loc: state.rootReducer.locationReducer.loc
})

MainPage.propTypes = {
  loc: PropTypes.object.isRequired,
  fetchLocation: PropTypes.func.isRequired,
  getUserLocation: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
}

const mapDispatchToProps = {
  getUserLocation,
  fetchLocation,
};


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
