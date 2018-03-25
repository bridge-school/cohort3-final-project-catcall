export const ACTION_TYPES = {
    userLocation: 'USER_LOCATION', // explicitly for the text input
    getLocationStart: 'GET_LOCATION_START', // detecting browser location
    getLocationSuccess: 'GET_LOCATION_SUCCESS',
    getLocationError: 'GET_LOCATION_ERROR',
    updateRating: 'UPDATE_RATING'
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

export const updateRating = (ratingValue) => {
  return {
    type: ACTION_TYPES.updateRating,
    payload: ratingValue
  }
}
