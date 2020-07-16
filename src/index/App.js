import React from 'react'
import { connect } from 'react-redux'
import './App.css'

import Header from '../common/Header'
import { getDateAndDayStr } from '../common/util'
import CityList from './CityList'
import DateList from './DateList'
import {
  selectCityFor,
  setArriveCity,
  setDepartCity,
  toggleIsSelectDate,
  toggleIsSpeed,
} from './actions'

class App extends React.Component {
  hdlClickDepartCity = () => {
    const { dispatch } = this.props
    dispatch(selectCityFor('depart'))
  }

  hdlClickArriveCity = () => {
    const { dispatch } = this.props
    dispatch(selectCityFor('arrive'))
  }

  hdlSwpCity = () => {
    const { dispatch, arriveCity, departCity } = this.props
    dispatch(setArriveCity(departCity))
    dispatch(setDepartCity(arriveCity))
  }

  toggleSelectDate = () => {
    const { dispatch } = this.props
    dispatch(toggleIsSelectDate())
  }

  toggleSpeed = () => {
    const { dispatch } = this.props
    dispatch(toggleIsSpeed())
  }

  searchTicket = () => {
    const { departCity, arriveCity, departDate, isSpeed } = this.props
    window.location.reload(
      `/query.html?date=${departDate}&from=${departCity}&to=${arriveCity}&speed=${isSpeed}`
    )
  }

  setCity = (name) => {
    const { dispatch, selectCityFor: cityType } = this.props
    if (cityType == null) {
      return
    }
    if (cityType === 'depart') {
      dispatch(setDepartCity(name))
    } else {
      dispatch(setArriveCity(name))
    }
    dispatch(selectCityFor())
  }

  render() {
    const {
      departCity,
      cityList,
      arriveCity,
      isSpeed,
      departDate,
      isSelectDate,
      selectCityFor,
      dispatch,
    } = this.props

    return (
      <div className="index-page">
        <Header title="搜索车次" />
        <div className="city-from-to">
          <div className="from" onClick={this.hdlClickDepartCity}>
            {departCity}
          </div>
          <button onClick={this.hdlSwpCity}>到</button>
          <div className="to" onClick={this.hdlClickArriveCity}>
            {arriveCity}
          </div>
        </div>
        <div className="depart-date" onClick={this.toggleSelectDate}>
          {getDateAndDayStr(departDate)}
        </div>
        <div className="is-speed" onClick={this.toggleSpeed}>
          {isSpeed ? '是' : '非'}高速
        </div>
        <button className="search" onClick={this.searchTicket}>
          搜索
        </button>
        {selectCityFor && (
          <CityList
            lst={cityList}
            onSelectCity={this.setCity}
            dispatch={dispatch}
          />
        )}
        {isSelectDate && <DateList now={departDate} />}
      </div>
    )
  }
}

export default connect(
  function mapStateToProps(state) {
    return state
  },
  function mapDisPatchToProps(dispatch) {
    return { dispatch }
  }
)(App)
