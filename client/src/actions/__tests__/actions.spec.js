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
