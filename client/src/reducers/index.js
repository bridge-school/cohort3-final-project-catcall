import { combineReducers } from 'redux';
import { ACTION_TYPES } from '../actions/index';

const DEFAULT_STATE = {
    browserLocation: {
        latitude: '',
        longitude: '',
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
                    latitude: payload.latitude,
                    longitude: payload.longitude,
                }
            }
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    locationReducer,
});
