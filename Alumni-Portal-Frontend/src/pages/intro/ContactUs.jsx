import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Contact from '../../components/Contact'

const ContactUs = () => {
  return (
    <div>
      <Header />

      <div className='pt-16'>
        <Contact />
      </div>

      <Footer />
    </div>
  )
}

export default ContactUs