export const ACTION_TYPES = {
    userLocation: 'USER_LOCATION', // explicitly for the text input
    getLocationStart: 'GET_LOCATION_START', // detecting browser location
    getLocationSuccess: 'GET_LOCATION_SUCCESS',
    getLocationError: 'GET_LOCATION_ERROR',
    updatePinLocation: 'UPDATE_PIN_LOCATION',
    updateRating: 'UPDATE_RATING',
    handleSubmitReport: 'HANDLE_SUBMIT_REPORT',
};

// Action for the user input
export const getUserLocation = (location) => {
    return {
        type: ACTION_TYPES.userLocation,
        payload: {
            location,
        },
    }
}

// Action for the thunk location API request
export const fetchLocation = (location) => {
    return dispatch => {
        dispatch({ type: ACTION_TYPES.getLocationStart });
        return location.getCurrentPosition((position) => {
            dispatch({
                type: ACTION_TYPES.getLocationSuccess,
                payload: position.coords
            });
        });
    }
}

export const updatePinLocation = (latitude, longitude) => {
    return {
        type: ACTION_TYPES.updatePinLocation,
        payload: {
            pinLocation: { 
                latitude,
                longitude
            }
        }
    }
}

export const updateRating = (ratingValue) => {
  return {
    type: ACTION_TYPES.updateRating,
    payload: ratingValue
  }
}

export const handleSubmitReport = (e) => {
  e.preventDefault();
  console.log('start sending report...');
  return (dispatch, getState) => {
    const reportState = getState().rootReducer;
    const locationLat = reportState.locationReducer.browserLocation.latitude;
    const locationLon = reportState.locationReducer.browserLocation.longitude;
    const rating = reportState.ratingReducer.selectedRating;
    const report = {
      location: {
        lat: locationLat,
        lon: locationLon
      },
      rating
    }
    console.log(`report object is ${JSON.stringify(report)}`);
    dispatch({ type: ACTION_TYPES.handleSubmitReport });
  }
}
