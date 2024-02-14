'use client'

import React from 'react'
import SectionContainer from './SectionContainer'
import Carousel from 'nuka-carousel'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { params } from './Header'

const ServicesCardsSection = () => {
  return (
    <section className=' py-24  text-neutral-900 py-10 border-gray-300/50 bg-gradient-to-b from-[#14322e] to-[#2c5e4a]' >
      <SectionContainer>
        <div className=' grid grid-cols-4 gap-8 '>
          <div class="max-w-sm rounded-xl overflow-hidden shadow-xl ">
            <img class="w-full h-[320px] object-cover" src="/tax-icons/gst-card.jpg" alt="Sunset in the mountains" />
            <div class="px-6 py-4 bg-white text-center">
              <div class="font-bold text-xl mb-2">GST</div>
            </div>
          </div>
          <div class="max-w-sm rounded-xl overflow-hidden shadow-xl ">
            <img class="w-full h-[320px] object-cover" src="/tax-icons/licenses.jpg" alt="Sunset in the mountains" />
            <div class="px-6 py-4 bg-white text-center">
              <div class="font-bold text-xl mb-2">Licence</div>
            </div>
          </div>
          <div class="max-w-sm rounded-xl overflow-hidden shadow-xl">
            <img class="w-full h-[320px] object-cover" src="/tax-icons/register.jpg" alt="Sunset in the mountains" />
            <div class="px-6 py-4 bg-white text-center">
              <div class="font-bold text-xl mb-2">Registration</div>
            </div>
          </div>
          <div class="max-w-sm rounded-xl overflow-hidden shadow-xl">
            <img class="w-full h-[320px] object-cover" src="/tax-icons/handshake.jpg" alt="Sunset in the mountains" />
            <div class="px-6 py-4 bg-white text-center">
              <div class="font-bold text-xl mb-2">Others</div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}

export default ServicesCardsSection
