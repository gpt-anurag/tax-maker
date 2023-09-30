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

const ServicesSelection = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <a
        href='#'
        onMouseOver={() => setIsOpen(!isOpen)}
        // onMouseEnter={() => setIsOpen(true)}
        // onMouseLeave={() => setIsOpen(false)}
      >
        Services
      </a>
      {isOpen && (
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
        <ul className='absolute bg-white text-gray-700 p-4 rounded border top-14'>
          <li>Registration</li>
          <li>License</li>
          <li>IT Filing</li>
          <li>Insurance</li>
          <li>Home Loan</li>
          <li>All Services</li>
        </ul>
      )}
    </>
  )
}

export default ServicesSelection
