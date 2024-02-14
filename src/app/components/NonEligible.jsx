import React from 'react'

const NonEligible = ({nonEligible}) => {
    return (
        <>
            <h2 className='pt-10 col-span-4 text-3xl font-bold'>
                Who are not eligible for this service?
            </h2>
            <div className='col-span-4 col-start-1 p-4  text-lg'>
                {nonEligible.map((item, i) => {
                return (
                    <div className='mb-1' key={i}>
                    <span className='font-bold'>{item.title}: </span><span>{item.description}</span>
                    </div>
                )
                })}
            </div>
        </>
    )
}

export default NonEligible