'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { FaSearch } from 'react-icons/fa'
import { RiShoppingBag2Line } from 'react-icons/ri'
import { TbChartDonutFilled } from 'react-icons/tb'
import { RxHamburgerMenu } from 'react-icons/rx'
import SectionContainer from './SectionContainer'
import ServicesSelection from './ServicesSelection'
import Contact from './Contact'
import Sidebar from './Sidebar'
import { useState } from 'react'
import Image from 'next/image'

const Navbar = () => {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  const onMouseEnter = () => {
    if (window.innerWidth < 768) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }

  const onMouseLeave = () => {
    if (window.innerWidth < 768) {
      setDropdown(false)
    } else {
      setDropdown(false)
    }
  }

  return (
    <div className='relative z-30'>
      <Contact />
      <div
        className={`w-full border-b border-gray-500/50 bg-[#3d3d49] shadow-[0px_21px_25px_-19px_rgba(0,0,0,0.45)] text-white md:top-9 lg:top-10`}
      >
        {/* ${
          pathname === '/' ? 'bg-transparent absolute' : 'sticky'
        } */}
        <SectionContainer>
          <nav className={`flex items-center justify-between py-4`}>
            <Link href='/'>
              <div className='flex items-center gap-4 text-3xl font-bold md:text-4xl lg:text-5xl'>
                {/* <TbChartDonutFilled />
                <p>Financial</p> */}
                <Image
                  src='/main-logo.png'
                  height={60}
                  width={142}
                  alt='main logo'
                />
              </div>
            </Link>
            <fdiv className='hidden items-center justify-between gap-6 text-sm font-medium md:flex lg:text-xl'>
              <ul className='flex justify-between gap-6'>
                <li
                  className={`cursor-pointer border-b-2 border-transparent hover:border-white ${
                    pathname !== '/' && 'hover:border-gray-800'
                  } py-2`}
                >
                  <Link href='/'>Home</Link>
                </li>
                <li
                  className={`relative border-b-2 border-transparent hover:border-white ${
                    pathname !== '/' && 'hover:border-gray-800'
                  } py-2`}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  {/* <Link href='/services'>Services</Link> */}
                  <ServicesSelection
                    dropdown={dropdown}
                    setDropdown={setDropdown}
                  />
                </li>

                <li
                  className={`cursor-pointer border-b-2 border-transparent hover:border-white ${
                    pathname !== '/' && 'hover:border-gray-800'
                  } py-2`}
                >
                  <Link href={'/about'}>About</Link>
                </li>
                <li
                  className={`cursor-pointer border-b-2 border-transparent hover:border-white ${
                    pathname !== '/' && 'hover:border-gray-800'
                  } py-2`}
                >
                  Contacts
                </li>
              </ul>
              <FaSearch />
              <RiShoppingBag2Line />
            </fdiv>
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className='block text-3xl md:hidden'
            >
              <RxHamburgerMenu />
            </button>
          </nav>
        </SectionContainer>
      </div>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        pathname={pathname}
      />
    </div>
  )
}

export default Navbar
