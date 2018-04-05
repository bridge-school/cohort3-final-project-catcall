import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NavBar from '../components/NavBar';
import { getUserReports } from '../actions/index';
import ViewMapContainer from '../containers/ViewMapContainer';

class ViewReportsPage extends Component {
  componentDidMount() {
    this.props.getUserReports();
  }
  componentWillReceiveProps(nextProps) {
    if (!nextProps) {
      return;
    }
    if (this.props.reports.length !== nextProps.reports.length) {
      this.props.getUserReports();
    }
  }
  render() {
    const { reports } = this.props;
    
    return(
        <div className="page">
          <NavBar/>
          <ViewMapContainer 
            reports = {reports}/>
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

