import { createStore } from 'redux'

import reducer from './reducers'

const initialState = {
  departCity: '北京',
  arriveCity: '上海',
  departDate: new Date(),
  isSpeed: false,
  cityList: [],

  isSelectDate: false,
  selectCityFor: null,
}

const store = createStore(reducer, initialState)

export default store
