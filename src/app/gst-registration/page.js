'use client'

import React, { useState } from 'react'
import SectionContainer from '../components/SectionContainer'
import Link from 'next/link'
import RequiredDocuments from '../components/RequiredDocuments'
import Accordion from '../components/Accordion'
import { usePathname } from 'next/navigation'

const blog_data = [
  {
    slug: 'gst',
    intro:
      'Goods and Services Tax (GST) is a pivotal taxation system in India, unifying various indirect taxes under a single umbrella. Obtaining a GST registration certificate is a fundamental step for businesses to comply with the law. In this guide, we will delve into key aspects of GST registration, providing valuable insights and addressing specific queries related to the process.',
    hero_img: '',
    types: ['Regular', 'Composition', 'Non-Resident'],
    eligibile: [
      {
        type: 'h1',
        text: 'Businesses with turnover exceeding threshold limits:',
      },
      {
        type: 'list',
        text: 'Businesses with turnover exceeding threshold limits',
      },
    ],
    nonEligible: [],
    Documents: [
      {
        type: 'bank',
        docType: 'Bank account statement',
      },
      {
        type: 'bank',
        docType: 'Cancelled Cheque Leaf',
      },
      {
        type: 'govt',
        docType: 'Certificate of Incorporation (for companies)',
      },
      {
        type: 'govt',
        docType: 'Partnership Deed(for partnerships)',
      },
      {
        type: 'govt',
        docType: 'LLP Agreement (for LLPs)',
      },
      {
        type: 'govt',
        docType: 'Shop and Establishment Certificate (if applicable)',
      },
    ],
    Benefits: [],
    renewal: [],
    price_2col: [],
    faq: [],
    notes: [
      {
        title: '',
        description: '',
      },
    ],
  },
  {
    slug: 'labour',
    intro:
      'A labor license in Telangana is a legal document that authorizes an entity or individual to engage in labor-related activities within the state. This includes hiring, employing, or contracting labor for various industries. The process of obtaining a labor license is regulated by the    government to ensure fair and ethical employment practices.',
    hero_img: '',
    types: [
      'Shops & Establishments Act License',
      'Contract Labour License',
      'Factory License',
      'Building Other Construction Workers (BOCW) License',
    ],
    eligibile: [
      {
        type: 'h1',
        text: 'Businesses with turnover exceeding threshold limits:',
      },
      {
        type: 'list',
        text: 'Businesses with turnover exceeding threshold limits:',
      },
    ],
    nonEligible: [],
    Documents: [
      {
        type: 'address',
        docType: 'Aadhaar Card',
      },
      {
        type: 'identity',
        docType: 'Pan',
      },
      {
        type: 'address',
        docType: 'Business Premises Address',
      },
      {
        type: 'govt',
        docType: 'Business Registration',
      },
      {
        type: 'govt',
        docType: 'NOC from local municipality',
      },
    ],
    benefits: [],
    renewal: [],
    price_2col: [
      {
        h1: 'Type of License',
        h2: 'Cost',
      },
      {
        h1: 'Shops & Establishment Act',
        h2: '100 - 5000',
      },
      {
        h1: 'Contract Labour',
        h2: '2000 - 5000',
      },
      {
        h1: 'Factory License',
        h2: '2000 - 10000',
      },
      {
        h1: 'BOCW License',
        h2: '2000 - 10000',
      },
    ],
    faq: [],
  },
]

const GSTRegistration = () => {
  const [path, setPath] = useState('')

  return (
    <>
      <SectionContainer>
        <h1 className='my-10 text-center text-5xl font-semibold'>
          GST Registration
        </h1>
        <div className='flex'>
          <aside className='mr-10 hidden basis-1/5 border-r-2 md:block'>
            <ul className='sticky top-0 flex flex-col pt-4 text-lg font-medium divide-y'>
              <li className='py-2 '>
                <a
                  href='#intro'
                  className='hover:text-primary100 border-b border-b-primary100/0 hover:border-b-primary100/100'
                >
                  Intro
                </a>
              </li>
              <li className='py-2 '>
                <a
                  href='#benefits'
                  className='hover:text-primary100 border-b border-b-primary100/0 hover:border-b-primary100/100'
                >
                  Benefits
                </a>
              </li>
              <li className='py-2 '>
                <a
                  href='#documents'
                  className='hover:text-primary100 border-b border-b-primary100/0 hover:border-b-primary100/100'
                >
                  Documents
                </a>
              </li>
              <li className='py-2 '>
                <a
                  href='#faq'
                  className='hover:text-primary100 border-b border-b-primary100/0 hover:border-b-primary100/100'
                >
                  FAQs
                </a>
              </li>
            </ul>
          </aside>
          <main className='flex basis-4/5 flex-col gap-5 divide-y'>
            <div id='intro'>
              <h2 className='mt-5 mb-2 text-3xl font-semibold'>Intro</h2>
              <p className=' text-xl text-FontDark200 md:text-lg'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, obcaecati. Incidunt harum dolore iste ullam
                placeat, sequi inventore. Reprehenderit, non.
              </p>
            </div>
            <div id='benefits'>
              <h2 className='mt-5 mb-2 text-3xl font-semibold'>Benefits</h2>
              <p className=' text-xl text-FontDark200 md:text-lg'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, obcaecati. Incidunt harum dolore iste ullam
                placeat, sequi inventore. Reprehenderit, non.
              </p>
            </div>
            <div id='documents'>
              <h2 className='mt-5 mb-2 text-3xl font-semibold'>Documents</h2>
              <RequiredDocuments />
            </div>
            <div id='faq'>
              <h2 className='mt-5 mb-2 text-3xl font-semibold'>FAQs</h2>
              <Accordion />
            </div>
          </main>
        </div>
      </SectionContainer>
    </>
  )
}

export default GSTRegistration
