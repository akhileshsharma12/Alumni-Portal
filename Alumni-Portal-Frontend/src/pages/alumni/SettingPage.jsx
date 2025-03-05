import React from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import HomeMainSetting from '../../components/HomeMainSetting';

const SettingPage = () => {
  return (
    <div>
          <Navbar />
            <div className='memories flex justify-end'>
                <Sidebar />
                <HomeMainSetting />
            </div>
    </div>
  )
}

export default SettingPage;