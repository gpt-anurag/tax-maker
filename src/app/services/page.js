import React from 'react'
import SectionContainer from '../components/SectionContainer'
import { v4 as uuidv4 } from 'uuid'
import CardSection from '../components/CardSection'

const card_data = [
  { id: uuidv4(), card_title: 'Service 1' },
  // { id: uuidv4(), card_title: 'Service 2' },
  // { id: uuidv4(), card_title: 'Service 3' },
  // { id: uuidv4(), card_title: 'Service 4' },
  // { id: uuidv4(), card_title: 'Service 5' },
  // { id: uuidv4(), card_title: 'Service 6' },
  // { id: uuidv4(), card_title: 'Service 7' },
  // { id: uuidv4(), card_title: 'Service 8' },
]

const Services = () => {
  return (
    <>
      <SectionContainer>
        {/* <div className='flex justify-center items-center my-20'>
          <div className='group h-96 w-80 [perspective:1000px]'>
            <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
              <div className='absolute inset-0'>
                <img
                  className='h-full w-full rounded-xl object-cover shadow-xl shadow-black/40'
                  src="https://images.unsplash.com/photo-1562583489-bf23ec64651d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')"
                  alt=''
                />
              </div>
              <div className='absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                <div className='flex min-h-full flex-col items-center justify-center text-lg'>
                  <p className='hover:border-b-2 mb-2'>
                    <a href='/gst-registration#intro'>Intro</a>
                  </p>
                  <p className='hover:border-b-2 mb-2'>
                    <a href='/gst-registration#benefits'>Benefits</a>
                  </p>
                  <p className='hover:border-b-2 mb-2'>
                    <a href='/gst-registration#documents'>Documents</a>
                  </p>
                  <p className='hover:border-b-2 mb-2'>
                    <a href='/gst-registration#faq'>FAQ</a>
                  </p>
                  <button className='my-2 mt-7 rounded-md bg-neutral-200 p-2 text-lg hover:bg-neutral-700 hover:text-neutral-200 text-neutral-700 duration-300'>
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <h1 className='text-center text-5xl font-semibold my-4'>
          All Services
        </h1>
        <div className='flex flex-col gap-8 mb-20'>
          <CardSection card_data={card_data} />
        </div>
      </SectionContainer>
    </>
  )
}

export default Services
