import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'

const FoodLicenseLayout = ({ children }) => {
  return (
    <>
      <Contact />
      <Navbar />
      {children}
    </>
  )
}

export default FoodLicenseLayout
