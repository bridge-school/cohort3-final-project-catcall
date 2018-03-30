import { combineReducers } from 'redux';
import { locationReducer } from './LocationReducer'
import { ratingReducer } from './RatingReducer'


export const rootReducer = combineReducers({
    locationReducer,
    ratingReducer
});

export default rootReducer;
