import React from 'react'
import { memo } from 'react'
import './CityList.css'
import { setCityList } from './actions'

const charactors = new Array(91 - 65)
  .fill(0)
  .map((_, index) => String.fromCharCode(65 + index))

// 城市列表组件
class CityList extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    fetch('/rest/cities?_' + Date.now())
      .then((res) => res.json())
      .then((data) => dispatch(setCityList(data.cityList)))
      .catch((err) => console.log(err))
  }

  indexTitle = (c) => document.querySelector(`.title-${c}`).scrollIntoView()

  render() {
    const { lst, onSelectCity } = this.props
    return (
      <div className="city-list">
        <div className="list">
          {lst.map((it, index) => (
            <React.Fragment>
              <div className={`title-${it.title}`}>{it.title}</div>
              {it.citys &&
                it.citys.map((city) => (
                  <div
                    key={index}
                    className="city"
                    onClick={() => onSelectCity(city.name)}
                  >
                    {city.name}
                  </div>
                ))}
            </React.Fragment>
          ))}
        </div>

        <div className="charactor-index">
          {charactors.map((it, index) => (
            <div
              key={index}
              className="index"
              onClick={() => this.indexTitle(it)}
            >
              {it}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default memo(CityList)
