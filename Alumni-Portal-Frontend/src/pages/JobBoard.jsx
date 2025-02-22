import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HomeMain4 from '../components/HomeMain4';

const JobBoard = () => {
  return (
    <div>
          <Navbar />
            <div className='flex justify-end'>
                <Sidebar />
                <HomeMain4 />
            </div>
    </div>
  )
}

export default JobBoard;