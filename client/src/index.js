import React from 'react';
import { connect, Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';

import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import './index.css';
import App from './App';
import { rootReducer } from './reducers/index';
import { createLogger } from 'redux-logger';

const history = createHistory();
const middleware = routerMiddleware(history);
const logger = createLogger();

const store = createStore(
    combineReducers({
      rootReducer,
      router: routerReducer
    }),
    compose(
        applyMiddleware(thunk, middleware, logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
