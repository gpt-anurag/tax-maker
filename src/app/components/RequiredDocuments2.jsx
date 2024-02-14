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

const RequiredDocuments = ({ documents, id }) => {
  return (
    <>
      <h2 className='pt-10 col-span-4 text-3xl font-bold' id={id}>
        Required Documents
      </h2>
      <div className='col-span-4 grid grid-cols-2 gap-4'>
        {documents.find((doc) => doc.type === 'bank') && (
          <div className='grid grid-cols-1 content-start gap-4 justify-items-start rounded-md shadow-md border-2 bg-green-100 p-4'>
            <h3 className='font-semibold text-2xl text-black border-b-2 border-black/10'>
              Banking
            </h3>
            {documents
              .filter((document) => document.type === 'bank')
              .map((document, i) => {
                return (
                  <div
                    key={i}
                    className='flex items-center justify-center gap-4 text-lg font-semibold text-black'
                  >
                    <p className='rounded-full bg-pink-200 p-2 text-xl text-pink-400'>
                      {document?.icon}
                    </p>
                    <p>{document.docType}</p>
                  </div>
                )
              })}
          </div>
        )}
        {documents.find((doc) => doc.type === 'govt') && (
          <div className='grid grid-cols-1 content-start gap-4 justify-items-start rounded-md shadow-md border-2 bg-orange-100 p-4'>
            <h3 className='font-semibold text-2xl text-black border-b-2 border-black/10'>
              Government
            </h3>
            {documents
              .filter((document) => document.type === 'govt')
              .map((document, i) => {
                return (
                  <div
                    key={i}
                    className='flex items-center justify-center gap-4 text-lg font-semibold text-black'
                  >
                    <p className='rounded-full bg-pink-200 p-2 text-xl text-pink-400'>
                      {document?.icon}
                    </p>
                    <p>{document.docType}</p>
                  </div>
                )
              })}
          </div>
        )}
        {documents.find((doc) => doc.type === 'address') && (
          <div className='grid grid-cols-1 content-start gap-4 justify-items-start rounded-md shadow-md border-2 bg-blue-100 p-4'>
            <h3 className='font-semibold text-2xl text-black border-b-2 border-black/10'>
              Address
            </h3>
            {documents
              .filter((document) => document.type === 'address')
              .map((document, i) => {
                return (
                  <div
                    key={i}
                    className='flex items-center justify-center gap-4 text-lg font-semibold text-black'
                  >
                    <p className='rounded-full bg-pink-200 p-2 text-xl text-pink-400'>
                      {document?.icon}
                    </p>
                    <p>{document.docType}</p>
                  </div>
                )
              })}
          </div>
        )}
      </div>
    </>
  )
}

export default RequiredDocuments
