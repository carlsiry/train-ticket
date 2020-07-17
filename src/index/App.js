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
  setDepartDate,
  toggleIsSelectDate,
  toggleIsSpeed,
  setCityList,
} from './actions'

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    fetch('/rest/cities?_' + Date.now())
      .then((res) => res.json())
      .then((data) => dispatch(setCityList(data.cityList)))
      .catch((err) => console.log(err))
  }

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

  setSelectDepartDate = (date) => {
    const { dispatch } = this.props
    dispatch(setDepartDate(date))
  }
  closeCityList = () => {
    const { dispatch } = this.props
    dispatch(selectCityFor())
  }
  closeDateList = () => {
    const { dispatch } = this.props
    dispatch(toggleIsSelectDate())
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
    } = this.props
    return (
      <div className="index-page">
        <Header title="搜索车次" onBack={() => window.history.back()} />
        <form className="search-form" action="query.html">
          <div className="city-from-to">
            <input
              className="from"
              name="from"
              readOnly
              type="text"
              value={departCity}
              onClick={this.hdlClickDepartCity}
            />
            <button type="button" onClick={this.hdlSwpCity}>
              到
            </button>
            <input
              className="to"
              name="to"
              readOnly
              type="text"
              value={arriveCity}
              onClick={this.hdlClickArriveCity}
            />
          </div>
          <div className="depart-date" onClick={this.toggleSelectDate}>
            {getDateAndDayStr(departDate)}
          </div>
          <input
            className="is-speed"
            type="checkbox"
            name="isSpped"
            value={isSpeed}
            id="is-speed"
            onClick={this.toggleSpeed}
          />
          高速
          <button type="submit" className="search">
            搜索
          </button>
        </form>
        <CityList
          isShow={selectCityFor ? true : false}
          lst={cityList}
          onSelectCity={this.setCity}
          onClose={this.closeCityList}
        />
        {isSelectDate && (
          <DateList
            now={new Date()}
            onSelectDate={this.setSelectDepartDate}
            onClose={this.closeDateList}
          />
        )}
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
