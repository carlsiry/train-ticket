const { combineReducers } = require('redux')

function departCity(state = null, action) {
  const { type, payload } = action
  switch (type) {
    case 'SET_DEPART_CITY':
      return payload
    default:
      return state
  }
}

function arriveCity(state = null, action) {
  const { type, payload } = action
  switch (type) {
    case 'SET_ARRIVE_CITY':
      return payload
    default:
      return state
  }
}

function departDate(state = Date.now(), action) {
  const { type, payload } = action
  switch (type) {
    case 'SET_DEPART_DATE':
      return payload
    default:
      return state
  }
}

function isSpeed(state = false, action) {
  const { type } = action
  switch (type) {
    case 'TOGGLE_IS_SPEED':
      return !state
    default:
      return state
  }
}

function isSelectDate(state = false, action) {
  const { type } = action
  switch (type) {
    case 'TOGGLE_IS_SELECT_DATE':
      return !state
    default:
      return state
  }
}

function selectCityFor(state = null, action) {
  const { type, payload } = action
  switch (type) {
    case 'SELECT_CITY_FOR':
      if (state != null) {
        return null
      }
      return payload
    default:
      return state
  }
}

function cityList(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case 'SET_CITY_LIST':
      return payload
    default:
      return state
  }
}

export default combineReducers({
  departCity,
  arriveCity,
  departDate,
  isSpeed,
  cityList,
  isSelectDate,
  selectCityFor,
})
