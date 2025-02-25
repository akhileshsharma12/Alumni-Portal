import React from 'react'
import HomeMain2 from '../../components/HomeMain2'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'

const AlumniManagement = () => {
    return (
        <div>
            <Navbar />
            <div className='flex justify-end'>
                <Sidebar />
                <HomeMain2 />
            </div>
        </div>
    )
}

export default AlumniManagement