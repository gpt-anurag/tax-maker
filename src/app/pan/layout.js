import React from 'react'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'

const PanLayout = ({ children }) => {
  return (
    <>
      <Contact />
      <Navbar />
      {children}
    </>
  )
}

export default PanLayout
