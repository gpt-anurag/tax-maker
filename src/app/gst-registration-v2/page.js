'use client'

import React, { useState } from 'react'
import SectionContainer from '../components/SectionContainer'
import Link from 'next/link'
import RequiredDocuments from '../components/RequiredDocuments'
import Accordion from '../components/Accordion'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import RequiredDocuments2 from '../components/RequiredDocuments2'
import { MdEditDocument } from 'react-icons/md'
import PriceTable from '../components/PriceTable'
import RenewalCard from '../components/RenewalCard'
import LicenseTypes from '../components/LicenseTypes'

const blog_data = [
  {
    slug: 'gst',
    title: 'GST Registration',
    intro:
      'Goods and Services Tax (GST) is a pivotal taxation system in India, unifying various indirect taxes under a single umbrella. Obtaining a GST registration certificate is a fundamental step for businesses to comply with the law. In this guide, we will delve into key aspects of GST registration, providing valuable insights and addressing specific queries related to the process.',
    headline:
      'Don’t Let GST Confuse You: Get Expert Guidance and Support from GST Registration Services',
    catchyIntro: `Imagine a world where taxes weren't a burden, but a <b>gateway to
      growth</b> and unlocking new opportunities. That's the power of GST
      registration, and in this post, we'll be your sensible guide,
      navigating you through the process with <b>clarity and confidence</b>`,
    hero_img: '/tax-icons/gst.png',
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
    documents: [
      {
        type: 'bank',
        docType: 'Bank account statement',
        icon: <MdEditDocument />,
      },
      {
        type: 'bank',
        docType: 'Cancelled Cheque Leaf',
        icon: <MdEditDocument />,
      },
      {
        type: 'govt',
        docType: 'Certificate of Incorporation (for companies)',
        icon: <MdEditDocument />,
      },
      {
        type: 'govt',
        docType: 'Partnership Deed(for partnerships)',
        icon: <MdEditDocument />,
      },
      {
        type: 'govt',
        docType: 'LLP Agreement (for LLPs)',
        icon: <MdEditDocument />,
      },
      {
        type: 'govt',
        docType: 'Shop and Establishment Certificate (if applicable)',
        icon: <MdEditDocument />,
      },
      {
        type: 'address',
        docType: 'Shop and Establishment Certificate (if applicable)',
        icon: <MdEditDocument />,
      },
    ],
    Benefits: [],
    renewal: [
      `Telangana Department of Labour offers online renewal for most licenses through their
    portal:`,
      `https://labour.telangana.gov.in/`,
      `https://labour.telangana.gov.in/`,
    ],
    price_2col: [
      {
        h1: 'Type of License',
        h2: 'Cost',
      },
      {
        h1: 'Shops & Establishment Act',
        h2: '₹100 - ₹5000',
      },
      {
        h1: 'Contract Labour',
        h2: '₹2000 - ₹5000',
      },
      {
        h1: 'Factory License',
        h2: '₹2000 - ₹10000',
      },
      {
        h1: 'BOCW License',
        h2: '₹2000 - ₹10000',
      },
    ],
    faq: [
      {
        question: 'What is GST and GSTIN?',
        answer:
          'Goods and Services Tax(GST) is a comprehensive tax levied on manufacture, trade and services across India. From 1st July, 2017 GST has replaced most of Centre and State imposed indirect taxes like VAT, Service Tax , Excise etc. Goods and Services Tax Identification Number (GSTIN) is a 15 digits state-wise PAN-based number to be used to identify businesses registered under GST. <a>Click here</a> to know your GSTIN.',
      },
      {
        question: 'What is GST and GSTIN?',
        answer:
          'Goods and Services Tax(GST) is a comprehensive tax levied on manufacture, trade and services across India. From 1st July, 2017 GST has replaced most of Centre and State imposed indirect taxes like VAT, Service Tax , Excise etc. Goods and Services Tax Identification Number (GSTIN) is a 15 digits state-wise PAN-based number to be used to identify businesses registered under GST. <a>Click here</a> to know your GSTIN.',
      },
      {
        question: 'What is GST and GSTIN?',
        answer:
          'Goods and Services Tax(GST) is a comprehensive tax levied on manufacture, trade and services across India. From 1st July, 2017 GST has replaced most of Centre and State imposed indirect taxes like VAT, Service Tax , Excise etc. Goods and Services Tax Identification Number (GSTIN) is a 15 digits state-wise PAN-based number to be used to identify businesses registered under GST. <a>Click here</a> to know your GSTIN.',
      },
      {
        question: 'What is GST and GSTIN?',
        answer:
          'Goods and Services Tax(GST) is a comprehensive tax levied on manufacture, trade and services across India. From 1st July, 2017 GST has replaced most of Centre and State imposed indirect taxes like VAT, Service Tax , Excise etc. Goods and Services Tax Identification Number (GSTIN) is a 15 digits state-wise PAN-based number to be used to identify businesses registered under GST. <a>Click here</a> to know your GSTIN.',
      },
    ],
    types: [
      {
        title: 'Regular',
        details: [
          'Businesses with an annual turnover exceeding Rs. 40 lakhs (Rs. 20 lakhs in special category states) for goods and Rs.20 lakhs (Rs.10 lakhs in special category states) for services.',
          'Inter-state suppliers, regardless of turnover.',
          'Suitable for small businesses with low turnover and simpler transactions.',
        ],
      },
      {
        title: 'Composition',
        details: [
          'Businesses with an annual turnover up to Rs. 1.5 crore (Rs. 75 lakhs in special category states) for goods and Rs. 50 lakhs for services.',
          'Manufacturers, traders, and restaurants (not serving alcoholic beverages).',
          'Suitable for larger businesses with complex transactions and significant ITC claims.',
        ],
      },
      {
        title: 'Non-Resident',
        details: [
          'Does not have a fixed place of business or residence in India.',
          'Foreign companies supplying goods or services in India.',
        ],
      },
    ],
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
    documents: [
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
    renewal: [
      `Telangana Department of Labour offers online renewal for most licenses through their
    portal:`,
      `https://labour.telangana.gov.in/`,
      `https://labour.telangana.gov.in/`,
    ],
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
  const data = blog_data[0]
  return (
    <>
      <SectionContainer>
        <div className='grid grid-cols-5'>
          <aside className='col-span-1 mr-10 pt-10 hidden basis-1/5 border-r-2 md:block'>
            <ul className='sticky top-0 flex flex-col pt-4 text-lg font-medium divide-y'>
              <li className='py-2 '>
                <Link
                  href='#intro'
                  className='hover:text-primary100 border-b border-b-primary100/0 hover:border-b-primary100/100'
                >
                  Intro
                </Link>
              </li>
              <li className='py-2 '>
                <Link
                  href='#req-documents'
                  className='hover:text-primary100 border-b border-b-primary100/0 hover:border-b-primary100/100'
                >
                  Required Documents
                </Link>
              </li>
              <li className='py-2 '>
                <Link
                  href='#price-table'
                  className='hover:text-primary100 border-b border-b-primary100/0 hover:border-b-primary100/100'
                >
                  Price Table
                </Link>
              </li>
              <li className='py-2 '>
                <Link
                  href='#renewal'
                  className='hover:text-primary100 border-b border-b-primary100/0 hover:border-b-primary100/100'
                >
                  Renewal
                </Link>
              </li>
              <li className='py-2 '>
                <Link
                  href='#faq'
                  className='hover:text-primary100 border-b border-b-primary100/0 hover:border-b-primary100/100'
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </aside>

          <div
            className='col-span-4 grid grid-cols-4 gap-4 items-center pt-20 pb-8 border-b-2'
            id='intro'
          >
            <h1 className='font-hanumanFont font-bold col-span-5 text-3xl'>
              {data.headline}
            </h1>
            <p
              className='col-span-5 text-xl mb-10'
              dangerouslySetInnerHTML={{ __html: data.catchyIntro }}
            ></p>
            <div className='col-span-1'>
              <Image
                src={data.hero_img}
                alt={data.title}
                width={'320'}
                height={'320'}
                className='mr-3 drop-shadow-lg'
              />
            </div>
            <div className='col-span-3 p-6 shadow-xl bg-blue-200 rounded-lg'>
              <h1 className='text-4xl font-bold mb-4'>{data.title}</h1>
              <p className='text-lg'>{data.intro}</p>
            </div>
            <RequiredDocuments2 documents={data.documents} id='req-documents' />
            <LicenseTypes license={data.types} />
            <PriceTable priceTableData={data.price_2col} id='price-table' />
            <RenewalCard renewal={data.renewal} id='renewal' />
            <div className='col-span-4' id='faq'>
              <h2 className='col-span-4 font-bold text-3xl mt-10'>FAQ</h2>
              <Accordion faq={data.faq} />
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  )
}

export default GSTRegistration
