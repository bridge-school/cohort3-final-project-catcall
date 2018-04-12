import React, { Component } from 'react';
import { connect } from 'react-redux';

import PlacesAutocomplete, { geocodeByAddress, getLatLng, geocodeByPlaceId } from 'react-places-autocomplete'
import { getUserInput, getUserLocation, getPlaceId } from '../actions/index';


class SimpleForm extends Component {
  
  handleSelect = (address, placeId) => {
    this.handleChange(address)
    console.log(placeId)
    this.props.getPlaceId(placeId)
    //this.setState({ placeId })
  }

  handleChange = (e) => {
    this.props.getUserInput(e);
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    geocodeByAddress(this.props.userInput)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.props.getUserLocation({ latitude: latLng.lat, longitude: latLng.lng }))
      .catch(error => console.error('Error', error))
  }

  render() {
    const inputProps = {
      value: this.props.userInput,
      onChange: this.handleChange,
      placeholder: "Enter incident location"
    }

    const cssClasses = {
      root: { zIndex: '100' },
    }

    return (
      <PlacesAutocomplete inputProps={inputProps} styles={cssClasses} onSelect={this.handleSelect} />
    )
  }
}
const mapStateToProps = state => ({
  loc: state.rootReducer.locationReducer.loc,
  userInput: state.rootReducer.locationReducer.userInput,
  placeId: state.rootReducer.locationReducer.placeId,
})

const mapDispatchToProps = {
  getUserInput,
  getUserLocation,
  getPlaceId
};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleForm);
