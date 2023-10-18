"use client"

import GlobalContext from '@/context/GlobalContext'
import dayjs from 'dayjs'
import React, { useContext } from 'react'

const Day = ({day, rowIndex}) => {

  const getCurrentDateClass = () => {
    return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ? 'bg-blue-600 text-white rounded-full w-7' : ''
  }

  const {setSelectedDay, setShowModal} = useContext(GlobalContext)

  return (
    <div className='border border-gray-500'>
      <header className='flex flex-col items-center'>
        {rowIndex === 0 &&
          <p className='text-sm mt-1 uppercase'>
            {day.format('ddd')}
          </p>
        }
        <p className={`text-sm p-1 my-1 text-center ${getCurrentDateClass()}`}>
          {day.format('DD')}
        </p>
      </header>
      <div 
        className="flex-1 cursor-pointer"
        onClick={() => {
          setSelectedDay(day);
          setShowModal(true);
        }}
      >
        {" "}
      </div>
    </div>
  )
}

export default Day