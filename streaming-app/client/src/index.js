import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'

import App from './components/App'
import reducers from './reducers'

// Redux Dev tool extention setup
const compEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// creating the Redux store
const store = createStore(
  reducers,
  compEnhancers(applyMiddleware(reduxThunk))
  )


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)