import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const history = createHistory();
  const middlewares = routerMiddleware(history);
  const mockStore = configureMockStore(middlewares);
  const initialState = {
    rootReducer: {
      locationReducer: {
        userInput: {},
        browserLocation: {},
      }
    }
  }
  const store = mockStore(initialState)

  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>, div
  );
  ReactDOM.unmountComponentAtNode(div);
});
