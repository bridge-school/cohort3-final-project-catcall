import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = {};
const store = mockStore(initialState);

describe('getUserLocation', () => {
    test('should store the user inputted location', () => {
        expect.assertions(1);

        const location = '18 York Street';
        const expected = {
            type: actions.ACTION_TYPES.userLocation,
            payload: { location },
        };

        expect(actions.getUserLocation(location)).toEqual(expected);
    })
});

describe('fetchLocation', () => {
    test('should store the browser location', () => {
        expect.assertions(1);

        const position = '43.654357 -79.4218942';
        const mockGeolocation = {
            getCurrentPosition: jest.fn(() => position),
        };

        const expected = [{ type: actions.ACTION_TYPES.getLocationStart }];

        store.dispatch(actions.fetchLocation(mockGeolocation));

        expect(store.getActions()).toEqual(expected);
    })
});
