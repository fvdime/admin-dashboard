import ContextWrapper from '@/context/ContextWrapper'
import React from 'react'

const DashboardLayout = ({children}) => {
  return (
    <div>
      <ContextWrapper>
        {children}
      </ContextWrapper>
    </div>
  )
}

export default DashboardLayout