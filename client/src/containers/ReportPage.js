import React, { Component } from 'react';

import RatingForm from './RatingForm';
import MapContainer from './MapContainer'

class ReportPage extends Component {
  render() {
    return (
      <div className="page">
        <MapContainer />
        <RatingForm push={this.props.history.push} />
      </div>
    );
  }
}

export default ReportPage;
