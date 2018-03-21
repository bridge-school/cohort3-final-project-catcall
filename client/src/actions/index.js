export const ACTION_TYPES = {
    userLocation: 'USER_LOCATION', // explicitly for the text input
    getLocationStart: 'GET_LOCATION_START', // detecting browser location
    getLocationSuccess: 'GET_LOCATION_SUCCESS',
    getLocationError: 'GET_LOCATION_ERROR',
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
    const API_URL = 'API HERE'
    return dispatch => {
        dispatch({ type: ACTION_TYPES.getLocationStart });
        return fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                dispatch({ type: ACTION_TYPES.getLocationSuccess, payload: { data } })
            })
            .catch(error => {
                dispatch({ type: ACTION_TYPES.getLocationError, payload: { data } })
            });
    }
}
