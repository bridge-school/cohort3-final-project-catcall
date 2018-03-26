import { ACTION_TYPES } from '../actions/index';

const DEFAULT_STATE = {
    latitude: '',
    longitude: ''
}

const MapReducer = (state = DEFAULT_STATE, { type, payload }) => {
    switch (type) {
        case ACTION_TYPES.updatePinLocation:
            return payload.pinLocation; 
        default:
            return state;
    }
}

export default MapReducer;