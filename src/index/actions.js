export function setDepartCity(name) {
  return {
    type: 'SET_DEPART_CITY',
    payload: name,
  }
}

export function setArriveCity(name) {
  return {
    type: 'SET_ARRIVE_CITY',
    payload: name,
  }
}
export function setDepartDate(date) {
  return {
    type: 'SET_DEPART_DATE',
    payload: date,
  }
}
export function toggleIsSpeed(isSpeed) {
  return {
    type: 'TOGGLE_IS_SPEED',
    payload: isSpeed,
  }
}

export function setCityList(lst) {
  return {
    type: 'SET_CITY_LIST',
    payload: lst,
  }
}
