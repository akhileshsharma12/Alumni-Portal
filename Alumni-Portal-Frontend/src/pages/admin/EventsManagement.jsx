import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import HomeMain2 from '../../components/HomeMain2'
import HomeMain3 from '../../components/HomeMain3'

const EventsManagement = () => {
  return (
    <div>
         <Navbar />
            <div className='flex justify-end'>
                <Sidebar />
                <HomeMain3 />
            </div>
    </div>
  )
}

export default EventsManagement