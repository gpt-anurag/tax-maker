'use client'
import { usePathname } from 'next/navigation'
import Navbar from './Navbar'

const NavbarTesting = () => {
  const pathname = usePathname()
  return <div className='relative'>{pathname !== '/' && <Navbar />}</div>
}

export default NavbarTesting
