import React from 'react'
import { MdEditDocument } from 'react-icons/md'
import { v4 as uuidv4 } from 'uuid'

const documents_data = [
  {
    id: uuidv4(),
    category: 'cat1',
    icon: <MdEditDocument />,
    desc: 'PAN of the Applicant',
  },
  {
    id: uuidv4(),
    category: 'cat1',
    icon: <MdEditDocument />,
    desc: 'PAN of the Applicant',
  },
  {
    id: uuidv4(),
    category: 'cat1',
    icon: <MdEditDocument />,
    desc: 'PAN of the Applicant',
  },
  {
    id: uuidv4(),
    category: 'cat1',
    icon: <MdEditDocument />,
    desc: 'PAN of the Applicant',
  },
  {
    id: uuidv4(),
    category: 'cat2',
    icon: <MdEditDocument />,
    desc: 'PAN of the Applicant',
  },
  {
    id: uuidv4(),
    category: 'cat2',
    icon: <MdEditDocument />,
    desc: 'PAN of the Applicant',
  },
  {
    id: uuidv4(),
    category: 'cat2',
    icon: <MdEditDocument />,
    desc: 'PAN of the Applicant',
  },
  {
    id: uuidv4(),
    category: 'cat2',
    icon: <MdEditDocument />,
    desc: 'PAN of the Applicant',
  },
  {
    id: uuidv4(),
    category: 'cat3',
    icon: <MdEditDocument />,
    desc: 'PAN of the Applicant',
  },
]

const RequiredDocuments = () => {
  return (
    <div className='flex flex-col gap-8 p-4 lg:max-w-2xl'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md border-2 bg-teal-100 p-4'>
        {documents_data
          .filter((document) => document.category === 'cat1')
          .map((document) => {
            return (
              <div
                key={document.id}
                className='flex items-center justify-center gap-4 text-lg font-semibold'
              >
                <p className='rounded-full bg-orange-200 p-2 text-xl text-orange-400'>
                  {document.icon}
                </p>
                <p>{document.desc}</p>
              </div>
            )
          })}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md border-2 bg-cyan-100 p-4'>
        {documents_data
          .filter((document) => document.category === 'cat2')
          .map((document) => {
            return (
              <div
                key={document.id}
                className='flex items-center justify-center gap-4 text-lg font-semibold'
              >
                <p className='rounded-full bg-pink-200 p-2 text-xl text-pink-400'>
                  {document.icon}
                </p>
                <p>{document.desc}</p>
              </div>
            )
          })}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md border-2 bg-sky-100 p-4'>
        {documents_data
          .filter((document) => document.category === 'cat3')
          .map((document) => {
            return (
              <div
                key={document.id}
                className='flex items-center justify-center gap-4 text-lg font-semibold'
              >
                <p className='rounded-full bg-amber-200 p-2 text-xl text-amber-400'>
                  {document.icon}
                </p>
                <p>{document.desc}</p>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default RequiredDocuments
