import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'

const PrivateLtdLayout = ({ children }) => {
  return (
    <>
      <Contact />
      <Navbar />
      {children}
    </>
  )
}

export default PrivateLtdLayout
