import { combineReducers } from 'redux';
import { ACTION_TYPES } from '../actions/index';

const DEFAULT_STATE = {
    browserLocation: {
        lat: 43.653226,
        lng: -79.383184
    },
    userInput: 'hello',
}

export const locationReducer = (state = DEFAULT_STATE, { type, payload }) => {
    switch (type) {
        case ACTION_TYPES.userLocation:
            return {
                ...state,
                userInput: payload.location,
            }
        case ACTION_TYPES.getLocationSuccess:
            return {
                ...state,
                browserLocation: {
                    lat: payload.latitude,
                    lng: payload.longitude,
                }
            }
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    locationReducer,
});
