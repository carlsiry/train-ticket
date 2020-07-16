import React from 'react'
import { memo } from 'react'
import './Header.css'

// 城市列表组件
function Header(props) {
  const { title, onBack } = props
  return (
    <div className="header">
      <button className="back" onClick={() => onBack()}>
        &lt;
      </button>
      <span className="title">{title}</span>
      <span className="fill-space"></span>
    </div>
  )
}

export default memo(Header)
