import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'

const ServicesLayout = ({ children }) => {
  return (
    <>
      <Contact />
      <Navbar />
      {children}
    </>
  )
}

export default ServicesLayout
