import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Memories from './components/Memories';
import Collaborator from './components/Collaborator';
import Footer from './components/Footer';
import JobPositions from './components/JobPositions';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css'

// intro pages
import Intro from './pages/intro/Intro';
import ContactUs from './pages/intro/ContactUs';
import AboutUs from './pages/intro/AboutUs';



// login and register
import Login from './components/Login';
import SignIn from './components/SignIn';

// alumni pages
import Alumni_Home from './pages/alumni/Home';
import Alumni_AlumniDirectory from './pages/alumni/AlumniDirectory';
import Alumni_Events from './pages/alumni/Events';
import Alumni_JobBoard from './pages/alumni/JobBoard';
import Alumni_Memories from './pages/alumni/Gallery';
import Alumni_Community from './pages/alumni/Community';
import Alumni_JobBoard_PostJob from './pages/alumni/PostJob';
import Alumni_JobBoard_ManageJobs from './pages/alumni/ManageJobs';
import Alumni_donation from './pages/alumni/Donation';

// admin pages
import Admin_Home from './pages/admin/Home';
import Admin_AlumniManagement from './pages/admin/AlumniManagement';
import Admin_EventsManagement from './pages/admin/EventsManagement';
import Admin_JobBoard from './pages/admin/JobBoard';




//import { RoleProvider, useRole } from './store/RoleProvider';

// const ProtectedRoute = ({ children, roleList }) => {
//   const { role } = useRole();

//   if (!roleList.includes(role)) {
//     return <Navigate to="/login" />
//   }

//   return children;
// }

function App() {
  return (
    <>
      {/* <RoleProvider> */}
      <div className='app h-screen'>
        <Router>
          <Routes>
            <Route path='/' element={<Intro />}></Route>
            <Route path='/about' element={<AboutUs />}></Route>
            <Route path='/contact' element={<ContactUs />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/sign_in' element={<SignIn />}></Route>

            <Route path='/Alumni' >
              <Route path='home' element={<Alumni_Home />}></Route>
              <Route path='alumni_directory' element={<Alumni_AlumniDirectory />}></Route>
              <Route path='events' element={<Alumni_Events />}></Route>
              <Route path='jobBoard' element={<Alumni_JobBoard />}></Route>
              <Route path='memories' element={<Alumni_Memories />}></Route>
              <Route path='community' element={<Alumni_Community />}></Route>
              <Route path='jobBoard-postJob' element={<Alumni_JobBoard_PostJob />}></Route>
              <Route path='jobBoard-manageJobs' element={<Alumni_JobBoard_ManageJobs />}></Route>
              <Route path='donation' element={<Alumni_donation />}></Route>
  
            </Route>


            {/* <Route path='home' element={<ProtectedRoute roleList={['admin']}><Admin_Home /></ProtectedRoute>}></Route>
              <Route path='alumni_directory' element={<ProtectedRoute roleList={['admin']}><Admin_AlumniManagement /></ProtectedRoute>}></Route>
              <Route path='events' element={<ProtectedRoute roleList={['admin']}><Admin_EventsManagement /></ProtectedRoute>}></Route>
              <Route path='jobBoard' element={<ProtectedRoute roleList={['admin']}><Admin_JobBoard /></ProtectedRoute>}></Route>



              <Route path='home' element={<ProtectedRoute roleList={['alumni']}><Alumni_Home /></ProtectedRoute>}></Route>
              <Route path='alumni_directory' element={<ProtectedRoute roleList={['alumni']}><Alumni_AlumniDirectory /></ProtectedRoute>}></Route>
              <Route path='events' element={<ProtectedRoute roleList={['alumni']}><Alumni_Events /></ProtectedRoute>}></Route>
              <Route path='jobBoard' element={<ProtectedRoute roleList={['alumni']}><Alumni_JobBoard /></ProtectedRoute>}></Route> */}

          </Routes>
        </Router>
      </div>
      {/* </RoleProvider> */}
    </>
  )
}

export default App;