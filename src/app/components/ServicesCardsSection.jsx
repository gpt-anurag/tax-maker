'use client'

import React from 'react'
import SectionContainer from './SectionContainer'
import Carousel from 'nuka-carousel'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { params } from './Header'

const ServicesCardsSection = () => {
  return (
    <section className=' py-24  text-neutral-900 py-10 border-gray-300/50 bg-gradient-to-b from-[#14322e] to-[#2c5e4a]'>
      <SectionContainer>
        <div className=' grid grid-cols-3 gap-8 gap-y-12 text-white'>
          <div className='max-w-sm overflow-hidden cursor-pointer'>
            <img
              className='w-full h-[240px] object-cover shadow-xl  rounded-xl'
              src='/gst-logo.jpg'
              alt='Sunset in the mountains'
            />
            <div className='mt-4 px-6 py-4 text-center'>
              <div className='font-bold text-2xl mb-2'>
                GST Registration Types
              </div>
            </div>
          </div>
          <div className='max-w-sm overflow-hidden cursor-pointer'>
            <img
              className='w-full h-[240px] object-cover shadow-xl  rounded-xl'
              src='/private-limited-logo.jpg'
              alt='Sunset in the mountains'
            />
            <div className='mt-4 px-6 py-4 text-center'>
              <div className='font-bold text-2xl mb-2'>PVT Ltd.</div>
            </div>
          </div>
          <div className='max-w-sm overflow-hidden cursor-pointer'>
            <img
              className='w-full h-[240px] object-cover shadow-xl  rounded-xl'
              src='/firm-registration.jpeg'
              alt='Sunset in the mountains'
            />
            <div className='mt-4 px-6 py-4 text-center'>
              <div className='font-bold text-2xl mb-2'>Firm Registration</div>
            </div>
          </div>
          <div className='max-w-sm overflow-hidden cursor-pointer'>
            <img
              className='w-full h-[240px] object-cover shadow-xl  rounded-xl'
              src='/food-registration-logo.jpg'
              alt='Sunset in the mountains'
            />
            <div className='mt-4 px-6 py-4 text-center'>
              <div className='font-bold text-2xl mb-2'>Food License</div>
            </div>
          </div>
          <div className='max-w-sm overflow-hidden cursor-pointer'>
            <img
              className='w-full h-[240px] object-cover shadow-xl  rounded-xl'
              src='/income-tax-logo-1.jpg'
              alt='Sunset in the mountains'
            />
            <div className='mt-4 px-6 py-4 text-center'>
              <div className='font-bold text-2xl mb-2'>IT Returns</div>
            </div>
          </div>
          <div className='max-w-sm overflow-hidden cursor-pointer'>
            <img
              className='w-full h-[240px] object-cover shadow-xl  rounded-xl'
              src='/epfo-logo-2.jpg'
              alt='Sunset in the mountains'
            />
            <div className='mt-4 px-6 py-4 text-center'>
              <div className='font-bold text-2xl mb-2'>PF Registrations</div>
            </div>
          </div>
          {/* <div class="max-w-sm rounded-xl overflow-hidden shadow-xl">
            <img class="w-full h-[320px] object-cover" src="/tax-icons/handshake.jpg" alt="Sunset in the mountains" />
            <div class="px-6 py-4 bg-white text-center">
              <div class="font-bold text-xl mb-2">Others</div>
            </div>
          </div> */}
        </div>
      </SectionContainer>
    </section>
  )
}

export default ServicesCardsSection
