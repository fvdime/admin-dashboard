"use client"

import React, { useState, useContext, useEffect } from 'react'
import CalendarHeader from '@/components/CalendarProps/CalendarHeader'
import CalendarSidebar from '@/components/CalendarProps/CalendarSidebar'
import CalendarMonth from '@/components/CalendarProps/CalendarMonth'
import { getMonth } from '@/utils/getDate'
import GlobalContext from '@/context/GlobalContext'
import CreateModal from '@/components/Modals/CreateModal'

export default function CalendarPage() {

  const [currentMonth, setCurrentMonth] = useState(getMonth())
  const {monthIndex, showModal} = useContext(GlobalContext)
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex))
  }, [monthIndex])

  return (
    <>
    {showModal && <CreateModal/>}
      <div className='h-screen flex flex-col w-full'>
        <CalendarHeader/>
        <div className="flex flex-1">
          <CalendarSidebar/>
          <CalendarMonth month={currentMonth}/>
        </div>
      </div>
    </>
  )
}