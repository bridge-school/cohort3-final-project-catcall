import React, { Component } from 'react';
import { getUserReports } from '../actions/index';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import ViewMapContainer from '../containers/ViewMapContainer';

// console.log(this.props.reports)
class ViewReportsPage extends Component {
  componentDidMount() {
    this.props.getUserReports();
  }
  render() {
    const { reports } = this.props;

    return (

      <div className="page">
        <h1>View Report Page</h1>
        <div>

        </div>
        <ViewMapContainer
          reports={reports} />

      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  reports: state.rootReducer.locationReducer.reports
})
ViewReportsPage.propTypes = {
  reports: PropTypes.array.isRequired,
  getUserReports: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  getUserReports,
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewReportsPage);

