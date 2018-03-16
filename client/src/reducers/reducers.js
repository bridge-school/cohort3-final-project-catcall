const defaultState = {
    location: {
        lattitude: '',
        longitude: ''
    },
    filter: ''
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return {
                ...state, filter: action.payload
            }
        default:
            return state
    }
}

export default reducer;