import React from 'react'
import SectionContainer from './SectionContainer'
import { FaXTwitter } from 'react-icons/fa6'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='bg-[#3d3d49] text-white/90 flex justify-center py-10 '>
      <SectionContainer>
        {/* <h2 className='font-bold font-hanumanFont text-4xl text-center pb-4'>
          TAX MAKER
        </h2> */}
        <div className='w-full flex justify-center'>
          <Image
            src={'/main-logo.png'}
            height={200}
            width={200}
            className='pb-8'
            alt='company logo'
          />
        </div>
        <ul className='flex gap-12 text-white/50 text-sm font-bold pb-8'>
          <li>About</li>
          <li>Contact</li>
          <li>Terms Of Service</li>
          <li>Services</li>
          <li>Privacy Policy</li>
        </ul>
        <ul className='flex gap-6 justify-center pb-8'>
          <li className=''>
            <FaXTwitter className='h-5 w-5' />
          </li>
          <li className=''>
            <FaInstagram className='h-5 w-5' />
          </li>
          <li className=''>
            <FaFacebook className='h-5 w-5' />
          </li>
        </ul>
        <p className='text-center text-white/50'>
          © 2024 Tax Maker Company. All rights reserved
        </p>
      </SectionContainer>
    </div>
  )
}

export default Footer
