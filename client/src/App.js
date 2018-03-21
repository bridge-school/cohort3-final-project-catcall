import React, { Component } from 'react';
import { connect } from 'react-redux';
// import apiService from './shared/services/api-service';

import { getUserLocation, fetchLocation } from './actions/index';
import './App.css';

import Input from './components/Input'
import Button from './components/Button'
import PageTitle from './components/PageTitle';

class App extends Component {
  // componentDidMount() {
  //     apiService
  //         .get('/someModels')
  //         .then(function (response) {
  //             console.log(response);
  //         })
  //         .catch(function (error) {
  //             console.log(error);
  //         });
  // }

  handleChange = (e) => {
    this.props.getUserLocation(e.target.value);
  }

  startNewReport = () => { }

  viewReports = () => { }

  render() {
    const { userLocation } = this.props;

    return (
      <div className="App">
        <PageTitle>CatCall.io</PageTitle>
        <Input value={userLocation} handleChange={this.handleChange} />
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