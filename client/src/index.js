import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
// TODO What is this service worker and do we want to use it?
// import registerServiceWorker from './registerServiceWorker';
import { rootReducer } from './reducers/index';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
