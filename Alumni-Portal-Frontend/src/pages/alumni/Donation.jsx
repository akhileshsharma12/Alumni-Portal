import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import HomeMain7 from '../../components/HomeMain7'

const Donation = () => {
  return (
    <div>
        <Navbar />
            <div className='flex justify-end'>
                <Sidebar />
                <HomeMain7 />
            </div>
    </div>
  )
}

export default Donation