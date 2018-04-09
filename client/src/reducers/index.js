import { combineReducers } from 'redux';

import { ACTION_TYPES } from '../actions/index';

const DEFAULT_STATE = {
    loc: {
        lat: 43.653226,
        lng: -79.383184
    },
    userInput: "Current Location",
    reports: [],
    selectedRating: null,
}

const locationReducer = (state = DEFAULT_STATE, { type, payload }) => {
    switch (type) {
        case ACTION_TYPES.userLocation: // input updating location
            return {
                ...state,
                loc: {
                    lat: payload.latitude,
                    lng: payload.longitude,
                }
            }
        case ACTION_TYPES.getLocationSuccess: // browser location is updating
            return {
                ...state,
                loc: {
                    lat: payload.latitude,
                    lng: payload.longitude,
                }
            }
        case ACTION_TYPES.updatePinLocation:
            return {
                ...state,
                loc: {
                    lat: payload.latitude,
                    lng: payload.longitude,
                }
            }
        case ACTION_TYPES.getUserInput: // input updating location
            return {
                ...state,
                userInput: payload
            }
        case ACTION_TYPES.getUserReports:
            return {
                ...state,
                reports: payload
            }
        default:
            return state
    }
}

const ratingReducer = (state = DEFAULT_STATE, { type, payload }) => {
    switch (type) {
        case ACTION_TYPES.updateRating:
            return {
                ...state,
                selectedRating: payload
            }
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    locationReducer,
    ratingReducer
});

export default rootReducer;