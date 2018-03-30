import { ACTION_TYPES } from '../actions/index';

const DEFAULT_STATE = {
    loc: {
        lat: 43.653226,
        lng: -79.383184
    },
    userInput: {}
}

export const locationReducer = (state = DEFAULT_STATE, { type, payload }) => {
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
        default:
            return state
    }
}