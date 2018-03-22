import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUserLocation, fetchLocation } from './actions/index';
import './App.css';

import Input from './components/Input'
import Button from './components/Button'
import PageTitle from './components/PageTitle';

class App extends Component {

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
        <PageTitle>CatCall.io</PageTitle>
        <Input
          inputValue={location}
          handleChange={this.handleChange}
        />
        <Button onClick={() => this.startNewReport}>Report Incident</Button>
        <Button onClick={() => this.viewReports}>View Reports</Button>
      </div>
    );
  }
}

const mapStateToProps = storeState => ({
  userLocation: storeState.locationReducer.userInput,
  browserLocation: storeState.locationReducer.browserLocation,
})

const mapDispatchToProps = {
  getUserLocation,
  fetchLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
