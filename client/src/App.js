import React, { Component } from 'react';
import { connect } from 'react-redux';
// import apiService from './shared/services/api-service';

import './App.css';

import Input from './components/Input'
import Button from './components/Button'
import PageTitle from './components/PageTitle';

class App extends Component {
  componentDidMount() {
  //     apiService
  //         .get('/someModels')
  //         .then(function (response) {
  //             console.log(response);
  //         })
  //         .catch(function (error) {
  //             console.log(error);
  //         });
    const getLocation = () => {
      if(navigator.geolocation) {
       navigator.geolocation.getCurrentPosition((position)=>{
        console.log(position.coords.latitude)
        this.props.dispatch({ type: 'SET_LOCATION', payload: {
          lattitude:position.coords.latitude,
          longitude:position.coords.longitude
        }});
       });
      }else{
        this.props.dispatch({ type: 'SET_LOCATION', payload: {lattitude:"position failed to load"}});
      }
    }  
    getLocation();
  }

  startNewReport = () => { }

  viewReports = () => { }


  render() {
    const { browserLocation } = this.props

    return (
      <div className="App">
        <PageTitle>CatCall.io</PageTitle>
        <Input value={String(browserLocation.lattitude)+String(browserLocation.longitude)}  />
        <Button onClick={() => this.startNewReport}>Report Incident</Button>
        <Button onClick={() => this.viewReports}>View Reports</Button>
      </div>
    );
  }
}

const mapStateToProps = storeState => ({ browserLocation: storeState.browserLocation })
export default connect(mapStateToProps)(App)