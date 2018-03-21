import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/index';


import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares);
  const initialState = {
    locationReducer: {
      userInput: {},
      browserLocation: {},
    }
  }
  const store = mockStore(initialState)

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, div
  );
  ReactDOM.unmountComponentAtNode(div);
});
