import { ACTION_TYPES } from '../actions/index';

const DEFAULT_STATE = {
  selectedRating: null
}

export const ratingReducer = (state = DEFAULT_STATE, { type, payload }) => {
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
