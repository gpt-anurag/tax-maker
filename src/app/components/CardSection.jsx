import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const CardSection = ({ card_data }) => {
  return (
    <div>
      <h2 className='text-3xl font-semibold after:border-b-4 after:w-1/12 after:rounded-full flex gap-2 flex-col after:border after:border-red-900'>
        Services We provided
      </h2>
      <div className='grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-3 mt-8'>
        {card_data.map((item) => {
          return (
            <>
              {/* Version 1 */}
              {/* <div
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
                <h3 className='text-2xl block z-50'>Test Data</h3>
              </div> */}

              {/* Version two */}
              <div className='flex justify-center items-center'>
                <div className='group h-48 w-80 [perspective:1000px]'>
                  <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                    <div className='absolute inset-0'>
                      <img
                        className='h-full w-full rounded-xl object-cover shadow-xl shadow-black/40'
                        src='https://images.unsplash.com/photo-1472803828399-39d4ac53c6e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjgwfHxkYXJrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
                        alt=''
                      />
                    </div>
                    <div className='absolute inset-0 h-full w-full rounded-xl bg-black/80 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                      <div className='flex flex-col p-4 content-between justify-between h-full'>
                        <ul className='flex flex-col gap-1'>
                          <li className='hover:underline'>
                            <a href='/gst-registration#intro'>Intro</a>
                          </li>
                          <li className='hover:underline'>
                            <a href='/gst-registration#benefits'>Benefits</a>
                          </li>
                          <li className='hover:underline'>
                            <a href='/gst-registration#documents'>Documents</a>
                          </li>
                          <li className='hover:underline'>
                            <a href='/gst-registration#faq'>FAQ</a>
                          </li>
                        </ul>
                        <button className='py-1 rounded-md bg-neutral-200 text-lg hover:bg-neutral-700 hover:text-neutral-200 text-neutral-700 duration-300'>
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default CardSection
