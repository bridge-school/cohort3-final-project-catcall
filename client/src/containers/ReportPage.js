import React from 'react';
import { connect } from 'react-redux';

import RatingForm from './RatingForm';
import MapContainer from './MapContainer'

const ReportPage = () => {
  return (
    <div className="page">
      <MapContainer />
      <RatingForm />
    </div>
  );
};

const mapStateToProps = storeState => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportPage);
