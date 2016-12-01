import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app';
import configureStore from './stores/configureStore';
import { getPatternList } from './actions/patternListActions'

const store = configureStore();
store.dispatch(getPatternList());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main')
);
