import React from 'react'

const ReviewCard = ({ imageUrl, userReview }) => {
  return (
    <div className='text-center w-3/5 mx-auto'>
      <div className='grid grid-cols-4 gap-4'>
        <div className='col-span-1'>
          <img
            src={imageUrl}
            alt='user image'
            className='h-full object-cover'
          />
        </div>
        <div className='flex flex-col col-span-3 ml-10 text-left gap-6'>
          <div className=''>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='blue'
              className='inline-block h-12 w-h-12 '
              viewBox='0 0 24 24'
            >
              <path d='M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z' />
            </svg>
          </div>
          <p className='text-xl'>{userReview.review}</p>
          <div>
            <h3 className='font-bold text-2xl'>{userReview.name}</h3>
            <p>{userReview.title}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
