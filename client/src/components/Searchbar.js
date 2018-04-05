import React, { Component } from 'react';
import { connect } from 'react-redux';

import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { getUserInput, getUserLocation } from '../actions/index';


class SimpleForm extends Component {

  handleChange = (e) => {
    this.props.getUserInput(e);
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    
    geocodeByAddress(this.props.userInput)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.props.getUserLocation(latLng))
      .catch(error => console.error('Error', error))
  }

  render() {
    const inputProps = {
      value: this.props.userInput,
      onChange: this.handleChange,
    }

    return (
      // <form onSubmit={this.handleFormSubmit}>
        <PlacesAutocomplete inputProps={inputProps} />
    )
  }
}
const mapStateToProps = state => ({
    loc: state.rootReducer.locationReducer.loc,
    userInput: state.rootReducer.locationReducer.userInput
})

const mapDispatchToProps = {
    getUserInput,
    getUserLocation
};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleForm);
