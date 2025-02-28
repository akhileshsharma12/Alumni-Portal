import React from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import HomeMainManageJobs from '../../components/HomeMainManageJobs';

const ManageJobs = () => {
    return (
        <div>
            <Navbar />
            <div className='memories flex justify-end'>
                <Sidebar />
                <HomeMainManageJobs />
            </div>
        </div>
    )
}

export default ManageJobs;