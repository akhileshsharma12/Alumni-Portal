import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import HomeMainPostJob from '../../components/HomeMainPostJob'

const PostJob = () => {
    return (
        <div>
            <Navbar />
            <div className='memories flex justify-end'>
                <Sidebar />
                <HomeMainPostJob />
            </div>
        </div>
    )
}

export default PostJob