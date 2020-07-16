import React from 'react'
import { connect } from 'react-redux'
import './App.css'

import Header from '../common/Header'
import { getDateAndDayStr } from '../common/util'
import CityList from './CityList'
import DateList from './DateList'

function App(props) {
  const { departCity, arriveCity, isSpeed, departDate } = props
  console.log(props)
  return (
    <div className="index-page">
      <Header title="搜索车次" />
      <div className="city-from-to">
        <div className="from">{departCity || '北京'}</div>到
        <div className="to">{arriveCity || '上海'}</div>
      </div>
      <div className="depart-date">{getDateAndDayStr(departDate)}</div>
      <div className="is-speed">{isSpeed ? '是' : '非'}高速</div>
      <button className="search">搜索</button>
      <CityList />
      <DateList />
    </div>
  )
}

export default connect(
  function mapStateToProps(state) {
    return state
  },
  function mapDisPatchToProps(dispatch) {
    return { dispatch }
  }
)(App)
