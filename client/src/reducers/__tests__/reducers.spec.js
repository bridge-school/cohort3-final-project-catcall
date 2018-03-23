import * as reducers from '../index';
import { ACTION_TYPES } from '../../actions/index';


let defaultState;

describe('locationReducer', () => {
    beforeEach(() => {
        defaultState = {
            browserLocation: {
                latitude: '',
                longitude: '',
            },
            userInput: 'hello',
        };
    });

    test('should return default state when type doesn\'t match', () => {
        expect.assertions(1);

        expect(reducers.locationReducer(undefined, {})).toEqual(defaultState);
    });

    test('should handle USER_LOCATION type', () => {
        expect.assertions(1);
        const location = '18 York Street';

        expect(
            reducers.locationReducer(
                {},
                {
                    type: ACTION_TYPES.userLocation,
                    payload: {
                        location,
                    }
                }
            )
        ).toEqual({
            userInput: location,
        })
    });

    // async tests are hard
    // test.skip('should handle GET_LOCATION_SUCCESS after fetching location is done', () => {
    //     expect.assertions(1);

    //     expect(
    //         reducers.locationReducer(
    //             {},
    //             {
    //                 type: ACTION_TYPES.getLocationSuccess,
    //                 payload: {
    //                     position
    //                 }
    //             }
    //         )
    //     ).toEqual({
    //         browserLocation: {
    //             latitude: position.coords.latitude,
    //             longitude: position.coords.longitude,
    //         }
    //     })
    // });
})