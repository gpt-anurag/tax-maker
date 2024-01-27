import React from 'react'

const PriceTable = ({ priceTableData, id }) => {
  return (
    <>
      <h2 className='col-span-4 font-bold text-3xl pt-10' id={id}>
        Price Table
      </h2>
      <div className='col-span-2 col-start-2 border p-4 rounded-md shadow-md'>
        {priceTableData.map((item, i) => {
          return (
            <div
              key={i}
              className={`grid grid-cols-2 py-4 text-lg border-b last-of-type:border-0 ${
                i === 0 &&
                'font-bold text-xl border-b-4 text-black/80 -m-4 px-4 pt-4 mb-2 bg-green-300 '
              }`}
            >
              <p>{item.h1}</p>
              <p className='justify-self-end'>{item.h2}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default PriceTable
