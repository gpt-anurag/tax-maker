'use client'

import React, { useState } from 'react'
import SectionContainer from '../components/SectionContainer'
import Link from 'next/link'
import RequiredDocuments from '../components/RequiredDocuments'
import Accordion from '../components/Accordion'
import { usePathname } from 'next/navigation'

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
