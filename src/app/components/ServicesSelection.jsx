import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const services_menu = [
  {
    id: uuidv4(),
    title: 'Heading',
    options: [
      'Single option',
      'Single option',
      'Single option',
      'Single option',
    ],
  },
  {
    id: uuidv4(),
    title: 'Heading',
    options: [
      'Single option',
      'Single option',
      'Single option',
      'Single option',
    ],
  },
  {
    id: uuidv4(),
    title: 'Heading',
    options: [
      'Single option',
      'Single option',
      'Single option',
      'Single option',
    ],
  },
  {
    id: uuidv4(),
    title: 'Heading',
    options: [
      'Single option',
      'Single option',
      'Single option',
      'Single option',
    ],
  },
]

const ServicesSelection = ({ dropdown, setDropdown }) => {
  return (
    <>
      <a
        href='#'
        onClick={() => setDropdown(!dropdown)}
        // onMouseEnter={() => setIsOpen(true)}
        // onMouseLeave={() => setIsOpen(false)}
      >
        Services
      </a>
      {dropdown && (
        // <div className='absolute top-16 hidden w-max gap-8 rounded bg-white border p-5 font-thin text-black md:-right-80 md:flex lg:-right-96'>
        //   {services_menu.map((item) => {
        //     return (
        //       <div key={item.id}>
        //         <h3>{item.title}</h3>
        //         <ul>
        //           {item.options.map((option, index) => (
        //             <li key={index}>{option}</li>
        //           ))}
        //         </ul>
        //       </div>
        //     )
        //   })}
        // </div>
        <ul className='absolute text-lg font-normal bg-white text-gray-700 pl-6 pr-10  py-4 rounded border top-10'>
          <li className='hover:text-primary100 hover:font-medium hover:underline'>
            Registration
          </li>
          <li className='hover:text-primary100 hover:font-medium hover:underline'>
            License
          </li>
          <li className='hover:text-primary100 hover:font-medium hover:underline'>
            IT Filing
          </li>
          <li className='hover:text-primary100 hover:font-medium hover:underline'>
            Insurance
          </li>
          <li className='hover:text-primary100 hover:font-medium hover:underline'>
            Home Loan
          </li>
          <li className='hover:text-primary100 hover:font-medium hover:underline'>
            All Services
          </li>
        </ul>
      )}
    </>
  )
}

export default ServicesSelection
