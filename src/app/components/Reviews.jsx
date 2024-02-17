'use client'

import React from 'react'
import SectionContainer from './SectionContainer'
import Carousel from 'nuka-carousel'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { params } from './Header'
import ReviewCard from './ReviewCard'

const Reviews = () => {
  return (
    <section className='border-t border-gray-300/50 text-neutral-900 py-10'>
      <SectionContainer>
        <div className='mx-auto text-center md:max-w-xl lg:max-w-3xl'>
          <h3 className='mb-6 text-3xl font-bold'>Testimonials</h3>
          <p className='mb-6 pb-2 md:mb-12 md:pb-0'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
        </div>

        <div className=''>
          <Carousel {...params}>
            {/* <!--First Testimonial--> */}
            {/* <div className='text-center max-w-max mx-auto'>
              <div className='block rounded-lg bg-white shadow-lg '>
                <div className='h-28 overflow-hidden rounded-t-lg bg-[#9d789b]'></div>
                <div className='mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white'>
                  <img src='https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp' />
                </div>
                <div className='p-6'>
                  <h4 className='mb-4 text-2xl font-semibold'>Maria Smantha</h4>
                  <hr />
                  <p className='mt-4'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      className='inline-block h-7 w-7 pr-2'
                      viewBox='0 0 24 24'
                    >
                      <path d='M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z' />
                    </svg>
                    Lorem ipsum dolor sit amet eos adipisci, consectetur
                    adipisicing elit.
                  </p>
                </div>
              </div>
            </div> */}
            <ReviewCard />

            {/* <!--Second Testimonial--> */}
            <div className='text-center max-w-max mx-auto'>
              <div className='block rounded-lg bg-white shadow-lg '>
                <div className='h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]'></div>
                <div className='mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white '>
                  <img src='https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp' />
                </div>
                <div className='p-6'>
                  <h4 className='mb-4 text-2xl font-semibold'>Lisa Cudrow</h4>
                  <hr />
                  <p className='mt-4'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      className='inline-block h-7 w-7 pr-2'
                      viewBox='0 0 24 24'
                    >
                      <path d='M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z' />
                    </svg>
                    Neque cupiditate assumenda in maiores repudi mollitia
                    architecto.
                  </p>
                </div>
              </div>
            </div>

            {/* <!--Third Testimonial--> */}
            <div className='text-center max-w-max mx-auto'>
              <div className='block rounded-lg bg-white shadow-lg '>
                <div className='h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]'></div>
                <div className='mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white '>
                  <img src='https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp' />
                </div>
                <div className='p-6'>
                  <h4 className='mb-4 text-2xl font-semibold'>John Smith</h4>
                  <hr />
                  <p className='mt-4'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      className='inline-block h-7 w-7 pr-2'
                      viewBox='0 0 24 24'
                    >
                      <path d='M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z' />
                    </svg>
                    Delectus impedit saepe officiis ab aliquam repellat rem unde
                    ducimus.
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </SectionContainer>
    </section>
  )
}

export default Reviews
