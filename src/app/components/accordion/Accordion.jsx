'use client'

import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import SingleAccordionItem from './SingleAccordionItem'
import { GrAddCircle, GrSubtractCircle } from 'react-icons/gr'

const accordion_data = [
  {
    id: uuidv4(),
    question: 'What is GST and GSTIN?',
    answer: `Goods and Services Tax(GST) is a comprehensive tax levied on manufacture, trade and services across India. From 1st July, 2017 GST has replaced most of Centre and State imposed indirect taxes like VAT, Service Tax , Excise etc. Goods and Services Tax Identification Number (GSTIN) is a 15 digits state-wise PAN-based number to be used to identify businesses registered under GST. <a href="#">Click here</a> to know your GSTIN.`,
  },
  {
    id: uuidv4(),
    question: 'What is GST and GSTIN?',
    answer:
      'Goods and Services Tax(GST) is a comprehensive tax levied on manufacture, trade and services across India. From 1st July, 2017 GST has replaced most of Centre and State imposed indirect taxes like VAT, Service Tax , Excise etc. Goods and Services Tax Identification Number (GSTIN) is a 15 digits state-wise PAN-based number to be used to identify businesses registered under GST. <a >Click here</a> to know your GSTIN.',
  },
  {
    id: uuidv4(),
    question: 'What is GST and GSTIN?',
    answer:
      'Goods and Services Tax(GST) is a comprehensive tax levied on manufacture, trade and services across India. From 1st July, 2017 GST has replaced most of Centre and State imposed indirect taxes like VAT, Service Tax , Excise etc. Goods and Services Tax Identification Number (GSTIN) is a 15 digits state-wise PAN-based number to be used to identify businesses registered under GST. <a>Click here</a> to know your GSTIN.',
  },
  {
    id: uuidv4(),
    question: 'What is GST and GSTIN?',
    answer:
      'Goods and Services Tax(GST) is a comprehensive tax levied on manufacture, trade and services across India. From 1st July, 2017 GST has replaced most of Centre and State imposed indirect taxes like VAT, Service Tax , Excise etc. Goods and Services Tax Identification Number (GSTIN) is a 15 digits state-wise PAN-based number to be used to identify businesses registered under GST. <a>Click here</a> to know your GSTIN.',
  },
  {
    id: uuidv4(),
    question: 'What is GST and GSTIN?',
    answer:
      'Goods and Services Tax(GST) is a comprehensive tax levied on manufacture, trade and services across India. From 1st July, 2017 GST has replaced most of Centre and State imposed indirect taxes like VAT, Service Tax , Excise etc. Goods and Services Tax Identification Number (GSTIN) is a 15 digits state-wise PAN-based number to be used to identify businesses registered under GST. <a>Click here</a> to know your GSTIN.',
  },
]

const Accordion = () => {
  const [openItems, setOpenItems] = useState([])

  const toggleSelected = (id) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter((item) => item !== id))
    } else {
      setOpenItems([...openItems, id])
    }
  }

  return (
    <section className='flex flex-col p-4'>
      {accordion_data.map((item) => {
        const isOpen = openItems.includes(item.id)
        return (
          <div key={item.id} className='border-b rounded p-4'>
            <div
              onClick={() => toggleSelected(item.id)}
              className='flex justify-between items-center cursor-pointer pt-4'
            >
              <h3 className='text-xl font-semibold text-slate-900'>
                {item.question}
              </h3>
              {isOpen ? <GrSubtractCircle /> : <GrAddCircle />}
            </div>
            <p
              className={`transition-all duration-300 ease-in ${
                isOpen
                  ? 'max-h-96 opacity-100'
                  : 'max-h-0 opacity-0 overflow-hidden'
              } font-medium text-slate-600 pt-4`}
              dangerouslySetInnerHTML={{ __html: item.answer }}
            ></p>
          </div>
        )
      })}
    </section>
  )
}

export default Accordion
