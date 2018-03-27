import React from 'react';
import { connect } from 'react-redux';

// import components
import RatingForm from './RatingForm';
const Map = () => <div>Place the map here!</div>;

const ReportPage = () => {
  return (
    <div className="page">
      <Map />
      <RatingForm />
    </div>
  );
};

const mapStateToProps = storeState => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportPage);
