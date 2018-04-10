import React, { Component } from 'react';

import NavBar from '../components/NavBar';
import RatingForm from '../components/RatingForm';
import MapContainer from '../containers/MapContainer'

class ReportPage extends Component {
  render() {
    return (
      <div className="page">
        <NavBar />
        <MapContainer />
        <RatingForm push={this.props.history.push} />
      </div>
    );
  }
}

export default ReportPage;
