'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { FaSearch } from 'react-icons/fa'
import { RiShoppingBag2Line } from 'react-icons/ri'
import { TbChartDonutFilled } from 'react-icons/tb'
import SectionContainer from './SectionContainer'

const Navbar = () => {
  const pathname = usePathname()
  return (
    <div className='border-b border-gray-500/50'>
      <SectionContainer>
        <nav
          className={`flex justify-between py-4 items-center ${
            pathname !== '/' && 'text-gray-800'
          }`}
        >
          <div className='flex gap-4 text-5xl font-bold md:text-3xl'>
            <TbChartDonutFilled />
            <p>Financial</p>
          </div>
          <div className='flex justify-between text-xl font-medium gap-6 items-center md:text-base'>
            <ul className='flex justify-between gap-6'>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/services'>Services</Link>
              </li>
              <li>
                <Link href='pan'>Pan</Link>
              </li>
              <li>Insights</li>
              <li>About</li>
              <li>Contacts</li>
            </ul>
            <FaSearch />
            <RiShoppingBag2Line />
          </div>
        </nav>
      </SectionContainer>
    </div>
  )
}

export default Navbar
