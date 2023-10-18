"use client"

import React, { useState, useEffect, useReducer } from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs'

const savedEventsReducer = (state, {type, payload}) => {
  switch (type) {
    case 'push':
      return [...state, payload]
    case 'update':
      return state.map(event => event.id === payload.id ? payload : event )
    case 'delete':
      return state.filter(event => event.id !== payload.id)
    default:
      throw new Error()
  }
}

const initEvents = () => {}

export default function ContextWrapper(props) {

  const [monthIndex, setMonthIndex] = useState(dayjs().month())
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null)
  const [selectedDay, setSelectedDay] = useState(dayjs())
  const [showModal, setShowModal] = useState(false)
  const [savedEvents, dispatchEvents] = useReducer(savedEventsReducer, [], )

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth)
    }
  }, [smallCalendarMonth])
  

  return (
    <GlobalContext.Provider 
      value={{monthIndex, setMonthIndex, smallCalendarMonth, setSmallCalendarMonth, selectedDay, setSelectedDay, showModal,
      setShowModal}}>
      {props.children}
    </GlobalContext.Provider>
  )
}
