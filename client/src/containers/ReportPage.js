import React from 'react';
import { connect } from 'react-redux';

import NavBar from '../components/NavBar';
import RatingForm from './RatingForm';
import MapContainer from './MapContainer'


const ReportPage = () => {
  return (
    <div className="page">
      <NavBar/>
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
