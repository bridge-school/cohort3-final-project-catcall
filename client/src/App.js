import React, { Component } from 'react';
import apiService from './shared/services/api-service';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
      apiService
          .get('/someModels')
          .then(function (response) {
              console.log(response);
          })
          .catch(function (error) {
              console.log(error);
          });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
