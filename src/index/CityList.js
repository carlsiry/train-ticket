import React from 'react'
import { memo } from 'react'
import './CityList.css'

const charactors = new Array(91 - 65)
  .fill(0)
  .map((_, index) => String.fromCharCode(65 + index))

// 城市列表组件
class CityList extends React.Component {
  render() {
    const { lst } = this.props
    return (
      <div className="city-list">
        <div className="list">
          {lst.map((it, index) => (
            <div key={index} className="city">
              {it.name}
            </div>
          ))}
        </div>

        <div className="charactor-index">
          {charactors.map((it, index) => (
            <div key={index} className="index">
              {it}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default memo(CityList)
