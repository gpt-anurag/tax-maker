import React from 'react'

const Benefits = ({ benefits, id }) => {
  return (
    <>
      <h2 className='col-span-4 font-bold text-3xl pt-10' id={id}>
        What Benefits you will possess?
      </h2>
      <div className='col-span-4 col-start-1 justify-self-center border p-4 rounded-md shadow-md'>
        {benefits.map((item, i) => {
          return (
            <div
              key={i}
              className={`py-4 text-lg border-b last-of-type:border-0 ${
                i === 0 &&
                'font-bold text-xl border-b-4 text-black/80 -m-4 px-4 pt-4 mb-2 bg-green-300 '
              }`}
            >
              <p className='font-bold self-center'>{item.title}</p>
              <p className='justify-self-end'>{item.description}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Benefits
