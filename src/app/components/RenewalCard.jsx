import React from 'react'

const RenewalCard = ({ renewal }) => {
  return (
    <div
      className='col-span-4 mt-10 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'
      id='renewal'
    >
      <div className='mt-5 p-4    text-black/80 font-semibold'>
        <h2 className='font-bold text-3xl text-white mb-4'>Renewal Alert</h2>
        <div className='bg-white p-2 rounded'>
          {renewal.map((item, i) => {
            return (
              <div key={i} className='py-2 tracking-wide'>
                {item}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default RenewalCard
