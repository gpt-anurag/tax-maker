import React from 'react'

const CallToAction = () => {
  return (
    <div className='col-span-4 grid grid-cols-3 my-4 px-8 py-16 rounded shadow-lg bg-sky-100'>
      <div className='col-span-2'>
        <p className='font-bold text-3xl'>
          For Personal Consultation, Contact Now!!!
        </p>
      </div>
      <div className='col-span-1 justify-self-end place-self-center'>
        <a
          href='#'
          className='p-4 bg-primaryBtn text-white rounded font-bold hover:bg-primary100'
        >
          Request A Demo
        </a>
      </div>
    </div>
  )
}

export default CallToAction
