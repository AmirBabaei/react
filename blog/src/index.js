import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import App from './components/App'
import reducers from './reducers'

//second parameter is to apply middleware to redux store
const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
  //
  <Provider store={store} >
    <App />
  </Provider>,
  document.querySelector('#root')

)


