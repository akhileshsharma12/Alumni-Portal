import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HomeMain from '../components/HomeMain';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className='flex justify-end'>
            <Sidebar />
            <HomeMain />
            </div>
        </div>
    )
}

export default Home;