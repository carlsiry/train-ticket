import { createStore } from 'redux'

import reducer from './reducers'

const initialState = {
  departCity: null,
  arriveCity: null,
  departDate: Date.now(),
  isSpeed: false,
  cityList: [],
}

const store = createStore(reducer, initialState)

export default store
