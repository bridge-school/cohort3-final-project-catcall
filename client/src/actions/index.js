import ApiService from '../shared/services/api-service';

export const ACTION_TYPES = {
    userLocation: 'USER_LOCATION',
    getLocationStart: 'GET_LOCATION_START',
    getLocationSuccess: 'GET_LOCATION_SUCCESS',
    getLocationError: 'GET_LOCATION_ERROR',
    updatePinLocation: 'USER_LOCATION',
    updateRating: 'UPDATE_RATING',
    handleSubmitReport: 'HANDLE_SUBMIT_REPORT',
};

// Action for the user input
export const getUserLocation = (latitude, longitude) => {
    return {
        type: ACTION_TYPES.userLocation,
        payload: {
            latitude,
            longitude
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

// Action for the pin location
export const updatePinLocation = (latitude, longitude) => {
    return {
        type: ACTION_TYPES.updatePinLocation,
        payload: {
            latitude,
            longitude
        }
    }
}

// Action for the user rating
export const updateRating = (ratingValue) => {
    return {
        type: ACTION_TYPES.updateRating,
        payload: ratingValue
    }
}

// Action Thunk for submitting report
export const handleSubmitReport = () => {
    return (dispatch, getState) => {
        const reportState = getState().rootReducer;
        const locationLat = reportState.locationReducer.loc.lat;
        const locationLon = reportState.locationReducer.loc.lng;
        const rating = reportState.ratingReducer.selectedRating;
        const report = {
            loc: {
                lat: locationLat,
                lon: locationLon
            },
            rating
        }
        ApiService.post('/report', {
            emotion: rating,
            latitude: locationLat,
            longitude: locationLon,
        })
            .then(response => {
                console.log(response)
                dispatch({
                    type: ACTION_TYPES.handleSubmitReport,
                    payload: report,
                });
            })
            .catch(error => {
                console.log(error)
            })
    }
}
