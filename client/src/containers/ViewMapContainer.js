import React, { Component } from 'react';

import ViewReportMap from '../components/ViewReportMap'

export default class ViewMapContainer extends Component {
  render() {
    const { reports } = this.props;
    return (
      <div>
        <ViewReportMap
          reports={reports} />
        
      </div>
    );
  }
}
