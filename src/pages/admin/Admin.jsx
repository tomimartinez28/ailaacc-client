import React, { useState } from 'react'
import { AdminSidebar } from '../../components/ui/Sidebar'
import { TimeCounter } from './TimeCounter'
import { Tracing } from './Tracing'

export function Admin () {
  const [selectedSection, setSelectedSection] = useState('timecounter')

  const renderSection = () => {
    switch (selectedSection) {
      case 'timecounter':
        return (<TimeCounter />)
      case 'tracing':
        return (<Tracing />)
    }
  }
  return (
    <div className='h-screen w-full flex'>

      <AdminSidebar setSelectedSection={setSelectedSection} selectedSection={selectedSection} />
      <div className='w-full h-sceen flex flex-col items-center bg-[#f6f6f6] '>
        {
          renderSection()
        }
      </div>

    </div>

  )
}
