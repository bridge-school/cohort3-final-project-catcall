import React, { Component } from 'react';
import { connect } from 'react-redux';
// import apiService from './shared/services/api-service';

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

  changeFilter = ev => this.props.dispatch({ type: 'SET_FILTER', payload: ev.target.value })

  startNewReport = () => { }

  viewReports = () => { }


  render() {
    const { filter } = this.props

    return (
      <div className="App">
        <PageTitle>CatCall.io</PageTitle>
        <Input value={filter} onChange={this.changeFilter} />
        <Button onClick={() => this.startNewReport}>Report Incident</Button>
        <Button onClick={() => this.viewReports}>View Reports</Button>
      </div>
    );
  }
}

const mapStateToProps = storeState => ({ filter: storeState.filter })
export default connect(mapStateToProps)(App)