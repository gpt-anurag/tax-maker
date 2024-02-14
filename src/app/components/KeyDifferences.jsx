import React from 'react'

const KeyDifferences = ({differences}) => {
    return (
        <>
            <h2 className='pt-10 col-span-4 text-3xl font-bold'>
                Key Differences
            </h2>
            <div className='col-span-4 col-start-1 border p-4 rounded-md shadow-md text-lg'>
                {differences.map((item, i) => {
                return (
                    <>
                    <li className='mb-1'><span className='font-bold'>{item.title}: </span><span>{item.description}</span></li>
                    </>
                )
                })}
            </div>
        </>
    )
}

export default KeyDifferences