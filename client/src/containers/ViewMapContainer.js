import React, { Component } from 'react';

// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react' 
// import child component
import ViewReportMap from '../components/ViewReportMap'
class ViewMapContainer extends Component {
  render() {
    const { reports } = this.props;
    return (
      <div>
        <ViewReportMap 
          google={this.props.google} 
          reports={reports} />
      </div>
    );
  }
}
// OTHER MOST IMPORTANT: Here we are exporting the App component WITH the GoogleApiWrapper. You pass it down with an object containing your API key
export default GoogleApiWrapper({
  apiKey: 'AIzaSyA06nlgcoEtxl0TMQeh0Sm4DQjZh6gV_mA',
})(ViewMapContainer)
