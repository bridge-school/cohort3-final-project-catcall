import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getUserLocation, fetchLocation } from '../actions/index';
import { Link } from 'react-router-dom';

import StyledGrid from '../components/styled/StyledGrid';
import StyledRow from '../components/styled/StyledRow';
import StyledCol from '../components/styled/StyledCol';
import Input from '../components/Input';
import Button from '../components/Button';
import NavBar from '../components/NavBar';

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
        <NavBar/>
        <StyledGrid>
          <StyledRow>
            <StyledCol xs={12} lg={12}>
              <Input
                inputValue={location}
                handleChange={this.handleChange}
              />
            </StyledCol>
          </StyledRow>
          <StyledRow>
            <StyledCol xs={12} sm={12} md={6} lg={6}>
              {/* TH: inline style on Button >> Link only till we figure out whethher the routing will be done indeed through 
          Links or via onClick handlers */}
              <Link to="/report" style={{ color: 'white' }}><Button bsStyle="primary">Report Incident</Button ></Link>
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
  //userLocation: state.rootReducer.locationReducer.userInput,
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
