import { combineReducers } from 'redux';
import { locationReducer } from './LocationReducer'
import { RatingReducer } from './RatingReducer'

export const rootReducer = combineReducers({
    locationReducer,
    RatingReducer
});

export default rootReducer;