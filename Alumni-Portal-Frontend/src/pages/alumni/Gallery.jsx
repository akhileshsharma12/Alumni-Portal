import React from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import HomeMain5 from '../../components/HomeMain5';

const Gallery = () => {
    return (
        <div>
            <Navbar />
            <div className='memories flex justify-end'>
                <Sidebar />
                <HomeMain5 />
            </div>
        </div>
    )
}

export default Gallery;