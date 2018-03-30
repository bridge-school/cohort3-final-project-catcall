import { combineReducers } from 'redux';
import { locationReducer } from './LocationReducer'
import { ratingReducer } from './ratingReducer'


export const rootReducer = combineReducers({
    locationReducer,
    ratingReducer
});

export default rootReducer;
