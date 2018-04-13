import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { getLocationSuccessEpic, fetchGeoCodeEpic } from './epics/index';

const rootEpic = combineEpics(
    getLocationSuccessEpic,
    fetchGeoCodeEpic
);

export const epicMiddleware = createEpicMiddleware(rootEpic);
