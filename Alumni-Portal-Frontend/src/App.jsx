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
import Intro from './pages/Intro';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Login from './components/Login';
import Home from './pages/Home';
import AlumniDirectory from './pages/AlumniDirectory';
import Events from './pages/Events';
import JobBoard from './pages/JobBoard';
import SignIn from './components/SignIn';
import { RoleProvider, useRole } from './store/RoleProvider';

const ProtectedRoute = ({ children, roleList }) => {
  const { role } = useRole();

  if (!roleList.includes(role)) {
    return <Navigate to="/login" />
  }

  return children;
}

function App() {
  return (
    <>
      <RoleProvider>
        <div className='app h-screen'>
          <Router>
            <Routes>
              <Route path='/' element={<Intro />}></Route>
              <Route path='/about' element={<AboutUs />}></Route>
              <Route path='/contact' element={<ContactUs />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/sign_in' element={<SignIn />}></Route>

              <Route path='/admin'>
                <Route path='home' element={<ProtectedRoute roleList={['admin']}><Home /></ProtectedRoute>}></Route>
                <Route path='alumni_directory' element={<ProtectedRoute roleList={['admin']}><AlumniDirectory /></ProtectedRoute>}></Route>
                <Route path='events' element={<ProtectedRoute roleList={['admin']}><Events /></ProtectedRoute>}></Route>
                <Route path='jobBoard' element={<ProtectedRoute roleList={['admin']}><JobBoard /></ProtectedRoute>}></Route>
              </Route>

              <Route path='/student'>
                <Route path='home' element={<ProtectedRoute roleList={['student']}><Home /></ProtectedRoute>}></Route>
                <Route path='alumni_directory' element={<ProtectedRoute roleList={['student']}><AlumniDirectory /></ProtectedRoute>}></Route>
                <Route path='events' element={<ProtectedRoute roleList={['student']}><Events /></ProtectedRoute>}></Route>
                <Route path='jobBoard' element={<ProtectedRoute roleList={['student']}><JobBoard /></ProtectedRoute>}></Route>
              </Route>
            </Routes>
          </Router>
        </div>
      </RoleProvider>
    </>
  )
}

export default App;