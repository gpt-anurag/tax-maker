import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const CardSection = ({ card_data }) => {
  return (
    <div>
      <h2 className='text-3xl font-semibold after:border-b-4 after:w-1/12 after:rounded-full flex gap-2 flex-col after:border after:border-red-900'>
        Services We provided
      </h2>
      <div className='grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-3 mt-8 items-stretch'>
        {card_data.map((item) => {
          return (
            <div
              key={item.id}
              className='h-52 rounded-xl bg-red-400 overflow-hidden relative group cursor-pointer'
            >
              <div className='absolute text-white p-4 text-xl font-semibold group-hover:hidden'>
                <h3>{item.card_title}</h3>
              </div>
              <div className='h-52 absolute bg-gray-600/80 w-full transition-all duration-300 group-hover:top-0 -top-full p-4  flex flex-col justify-between text-white'>
                <ul className='flex flex-col gap-1 text-lg'>
                  <li>
                    <Link
                      href='/gst-registration#intro'
                      className='hover:underline w-full block'
                    >
                      Intro
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/gst-registration#benefits'
                      className='hover:underline w-full block'
                    >
                      Benefits
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/gst-registration#documents'
                      className='hover:underline w-full block'
                    >
                      Documents
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/gst-registration#faq'
                      className='hover:underline w-full block'
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
                <button className='bg-slate-400 p-2 rounded-md hover:bg-slate-600'>
                  Apply
                </button>
              </div>

              <img
                src='https://images.unsplash.com/photo-1472803828399-39d4ac53c6e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjgwfHxkYXJrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
                alt=''
                className='h-full w-full object-cover'
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CardSection
