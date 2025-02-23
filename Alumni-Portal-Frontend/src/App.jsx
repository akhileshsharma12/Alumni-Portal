import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Memories from './components/Memories';
import Collaborator from './components/Collaborator';
import Footer from './components/Footer';
import JobPositions from './components/JobPositions';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom';
import Intro from './pages/Intro';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Login from './components/Login';
import Home from './pages/Home';
import AlumniDirectory from './pages/AlumniDirectory';
import Events from './pages/Events';
import JobBoard from './pages/JobBoard';
import SignIn from './components/SignIn';


function App() {

  return (
    <>

    {/*  Main loading  */}
      <div className='app h-screen '>

        <Routes>
          <Route path='/' element={<Intro />}></Route>
          <Route path='/about' element={<AboutUs />}></Route>
          <Route path='/contact' element={<ContactUs />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/sign_in' element={<SignIn />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/alumni_directory' element={<AlumniDirectory />}></Route>
          <Route path='/events' element={<Events />}></Route>
          <Route path='/jobBoard' element={<JobBoard />}></Route>
        </Routes>

        {/* <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/home' element={<Intro />}></Route>
          <Route path='/about' element={<AboutUs />}></Route>
          <Route path='/contact' element={<ContactUs />}></Route>
        </Routes> */}
      </div>

    </>
  )
}

export default App;
