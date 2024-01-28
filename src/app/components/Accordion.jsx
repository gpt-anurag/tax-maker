'use client'

import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { GrAddCircle, GrSubtractCircle } from 'react-icons/gr'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'

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

const Accordion = ({ faq }) => {
  const [openItems, setOpenItems] = useState([])

  const toggleSelected = (id) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter((item) => item !== id))
    } else {
      setOpenItems([...openItems, id])
    }
  }

  return (
    <section className='flex flex-col'>
      {faq?.map((item, i) => {
        const isOpen = openItems.includes(i)
        return (
          <div key={i} className='border-b rounded p-2'>
            <div
              onClick={() => toggleSelected(i)}
              className='flex justify-between items-center cursor-pointer pt-4'
            >
              <h3 className='text-xl font-semibold text-slate-900'>
                {item.question}
              </h3>
              {isOpen ? (
                <BiChevronUp className='text-2xl' />
              ) : (
                <BiChevronDown className='text-2xl' />
              )}
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
