import * as actions from '../index';

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

// async tests are hard
describe('fetchLocation', () => {
    test.skip('should store the browser location', () => {
        expect.assertions(1);

        const location = '43.654357 -79.4218942';
        const expected = [
            { type: actions.ACTION_TYPES.getLocationStart },
            {
                type: actions.ACTION_TYPES.getLocationSuccess,
                payload: location,
            }
        ]

        expect(actions.fetchLocation(location)).toEqual(expected);
    })
});
