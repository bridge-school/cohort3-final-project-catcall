import React, {Component} from 'react';
import { getUserReports } from '../actions/index';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import RatingForm from './RatingForm';
// import MapContainer from './MapContainer'


// console.log(this.props.reports)
class ViewReportsPage extends Component {
  componentDidMount() {
    this.props.getUserReports();
  }
  render() {
    const { reports } = this.props;
    
    return(
       
        <div className="page">
          <h1>View Report Page</h1>
          <div>
          {JSON.stringify(reports)}
          {/* {this.props.reports.map((report) => <li>{report}</li>)} */}
          </div>
    
        </div>
      )}
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

// export default ViewReportsPage;
