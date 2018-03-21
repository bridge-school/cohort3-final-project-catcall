const defaultState = {
    browserLocation: {
        lattitude: '',
        longitude: ''
    },
    userInput: ''
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_LOCATION':
            return {
                ...state, browserLocation:{
                    lattitude: action.payload.lattitude,
                    longitude: action.payload.longitude
                }
            }
        default:
            return state
    }
}

export default reducer;