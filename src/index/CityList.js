import React from 'react'
import { memo } from 'react'
import './CityList.css'
import classNames from 'classnames'
import Header from '../common/Header'

const charactors = new Array(91 - 65)
  .fill(0)
  .map((_, index) => String.fromCharCode(65 + index))

const indexTitle = (c) => document.querySelector(`.title-${c}`).scrollIntoView()

// 城市列表组件
function CityList(props) {
  const { lst, onSelectCity, isShow, onClose } = props
  return (
    <div className={classNames('city-list', { hidden: !isShow })}>
      <Header title="搜索车次" onBack={onClose} />
      <div className="content">
        <div className="list">
          {lst.map((it, index) => (
            <React.Fragment key={it.title}>
              <div key={it.title} className={`title-${it.title}`}>
                {it.title}
              </div>
              {it.citys &&
                it.citys.map((city) => (
                  <div
                    key={city.name}
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
            <div key={index} className="index" onClick={() => indexTitle(it)}>
              {it}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default memo(CityList)
