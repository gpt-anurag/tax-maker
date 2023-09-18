import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'

const FirmRegistrationLayout = ({ children }) => {
  return (
    <>
      <Contact />
      <Navbar />
      {children}
    </>
  )
}

export default FirmRegistrationLayout
