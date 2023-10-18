"use client"

import GlobalContext from '@/context/GlobalContext'
import React, { useContext } from 'react'

const CreateEventButton = () => {

  const {setShowModal} = useContext(GlobalContext)
  return (
    <button 
      onClick={() => setShowModal(true)}
      className="border p-2 rounded-full items-center shadow-md hover:shadow-lg transition-all ease-in duration-500">
        <span className="pl-2 font-bold">+</span>
        <span className='pl-1 pr-7 text-sm font-semibold'>Create</span>
    </button>
  )
}

export default CreateEventButton