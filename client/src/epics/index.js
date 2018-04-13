import 'rxjs/add/operator/mergeMap'; 
import { Observable } from 'rxjs';

import { ACTION_TYPES } from '../actions/index';

export const getLocationSuccessEpic = (action$, store) => 
    action$.ofType(ACTION_TYPES.getLocationSuccess)
    .mapTo({
        type: ACTION_TYPES.fetchGeoCode
    });

export const fetchGeoCodeEpic = (action$, store) =>
    action$.ofType(ACTION_TYPES.fetchGeoCode).mergeMap(action => 
        geocodeRequest(store.getState().rootReducer.locationReducer.loc)
            .map(result => ({
                type: ACTION_TYPES.getUserInput,
                payload: result,
            })
        )
    )

// not an epic but keeping it here for simplicity
export const geocodeRequest = (location) => { 
    return Observable.from(
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${'AIzaSyA06nlgcoEtxl0TMQeh0Sm4DQjZh6gV_mA'}`)
        .then(res => res.json())
        .then(res => res.results[0].formatted_address)
    );
  };
