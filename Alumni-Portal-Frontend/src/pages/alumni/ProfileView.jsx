import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import HomeMainProfileView from '../../components/HomeMainProfileView'

const ProfileView = () => {
    return (
        <div>
            <Navbar />
            <div className='memories flex justify-end'>
                <Sidebar />
                <HomeMainProfileView />
            </div>
        </div>
    )
}

export default ProfileView