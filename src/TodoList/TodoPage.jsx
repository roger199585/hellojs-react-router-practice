import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from 'TodoList/containers/App'
import AppReducers from 'TodoList/reducers/AppReducers'

let store = createStore(AppReducers, window.devToolsExtension && window.devToolsExtension());

let rootElement = document.getElementById('root');
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
