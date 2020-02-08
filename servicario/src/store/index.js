import { createStore, combineReducers } from 'redux'
import servicesReducer from 'reducers'

// actions | action creators
// dispatch
// reducers
// connect
const initStore = () => {
  const serviceApp = combineReducers({
    service: servicesReducer
  })

  // https://github.com/zalmoxisus/redux-devtools-extension#1-with-redux
  const browserSupport = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  const store = createStore(serviceApp, browserSupport)

  return store
}

export default initStore
