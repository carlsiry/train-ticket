import React from 'react'
import { memo } from 'react'
import dayjs from 'dayjs'

import './DateList.css'

// 城市列表组件
function DateList(props) {
  const { now, onSelectDate } = props
  const nowYear = now.getFullYear()
  const nowMonth = now.getMonth()

  const firstDays = new Array(dayjs(now).daysInMonth())
    .fill(null)
    .map((_, i) => new Date(nowYear, nowMonth, i + 1))

  const firstDaysStart = firstDays[0]
  const firstDaysDay = firstDaysStart.getDay()
  const toFillFirstDayPre = firstDaysDay > 0 ? firstDaysDay - 1 : 6
  new Array(toFillFirstDayPre).fill(null).forEach((_, i) => {
    const year = firstDaysStart.getFullYear()
    const month = firstDaysStart.getMonth()
    const date = firstDaysStart.getDate()
    firstDays.unshift(new Date(year, month, date - i - 1))
  })

  const firstDaysEnd = firstDays[firstDays.length - 1]
  const firstDaysEndDay = firstDaysEnd.getDay()
  const toFillFirstDaysSuf = firstDaysEndDay > 0 ? 7 - firstDaysEndDay : 0
  new Array(toFillFirstDaysSuf).fill(null).forEach((_, i) => {
    const year = firstDaysStart.getFullYear()
    const month = firstDaysStart.getMonth()
    firstDays.push(new Date(year, month + 1, i + 1))
  })
  const firstWeeks = new Array(firstDays.length / 7)
    .fill(null)
    .map((_, i) => firstDays.slice(i * 7, i * 7 + 7))

  const secondDays = new Array(dayjs(now).add(1, 'month').daysInMonth())
    .fill(null)
    .map((_, i) => new Date(nowYear, nowMonth + 1, i + 1))

  const secondDaysStart = secondDays[0]
  const secondDaysDay = secondDaysStart.getDay()
  const toFillSecondDayPre = secondDaysDay > 0 ? secondDaysDay - 1 : 6
  new Array(toFillSecondDayPre).fill(null).forEach((_, i) => {
    const year = secondDaysStart.getFullYear()
    const month = secondDaysStart.getMonth()
    const date = secondDaysStart.getDate()
    secondDays.unshift(new Date(year, month, date - i - 1))
  })

  const secondDaysEnd = secondDays[secondDays.length - 1]
  const secondDaysEndDay = secondDaysEnd.getDay()
  const toFillSecondDaysSuf = secondDaysEndDay > 0 ? 7 - secondDaysEndDay : 0
  new Array(toFillSecondDaysSuf).fill(null).forEach((_, i) => {
    const year = secondDaysStart.getFullYear()
    const month = secondDaysStart.getMonth()
    secondDays.push(new Date(year, month + 1, i + 1))
  })
  const secondWeeks = new Array(secondDays.length / 7)
    .fill(null)
    .map((_, i) => secondDays.slice(i * 7, i * 7 + 7))

  return (
    <div className="date-list">
      <div className="title">
        <span>周一</span>
        <span>周二</span>
        <span>周三</span>
        <span>周四</span>
        <span>周五</span>
        <span>周六</span>
        <span>周日</span>
      </div>
      {firstWeeks.map((week, index) => (
        <div key={index} className="week">
          {week.map((day, index) => (
            <span key={index} className="day" onClick={() => onSelectDate(day)}>
              {day.getDate()}
            </span>
          ))}
        </div>
      ))}
      <div className="title">
        <span>周一</span>
        <span>周二</span>
        <span>周三</span>
        <span>周四</span>
        <span>周五</span>
        <span>周六</span>
        <span>周日</span>
      </div>
      {secondWeeks.map((week, index) => (
        <div key={index} className="week">
          {week.map((day, index) => (
            <span key={index} className="day" onClick={() => onSelectDate(day)}>
              {day.getDate()}
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}

export default memo(DateList)
