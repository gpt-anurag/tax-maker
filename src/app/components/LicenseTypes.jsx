import React from 'react'
import { MdEditDocument } from 'react-icons/md'
import { v4 as uuidv4 } from 'uuid'

const LicenseTypes = ({ license, id }) => {
  return (
    <>
      <h2 className='pt-10 col-span-4 text-3xl font-bold' id={id}>
        License Types
      </h2>
      <div className='col-span-4 grid grid-cols-2 gap-4'>
        {license.map((doc, i) => {
          return (
            <div
              key={i}
              className={`grid grid-cols-1 content-start gap-4 justify-items-start rounded-md shadow-md border-2 p-4 
              ${i === 0 && 'bg-green-100'} 
              ${i === 1 && 'bg-orange-100'} 
              ${i === 2 && 'bg-fuchsia-100'} 
              ${i === 3 && 'bg-blue-100'}
              ${i === 4 && 'bg-red-100'}              `}
            >
              <h3 className='font-semibold text-2xl text-black/70 border-b-2 border-black/10'>
                {doc.title}
              </h3>
              <ul className='list-disc px-6 flex flex-col justify-center gap-4 text-lg font-semibold text-black/70'>
                {doc.details.map((document, i) => {
                  return <li key={i}>{document}</li>
                })}
              </ul>
            </div>
          )
        })}
        {/* {documents.find((doc) => doc.type === 'govt') && (
          <div className='grid grid-cols-1 content-start gap-4 justify-items-start rounded-md shadow-md border-2 bg-orange-100 p-4'>
            <h3 className='font-semibold text-2xl text-black/70 border-b-2 border-black/10'>
              Government
            </h3>
            {documents
              .filter((document) => document.type === 'govt')
              .map((document, i) => {
                return (
                  <div
                    key={i}
                    className='flex items-center justify-center gap-4 text-lg font-semibold text-black/70'
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
            <h3 className='font-semibold text-2xl text-black/70 border-b-2 border-black/10'>
              Address
            </h3>
            {documents
              .filter((document) => document.type === 'address')
              .map((document, i) => {
                return (
                  <div
                    key={i}
                    className='flex items-center justify-center gap-4 text-lg font-semibold text-black/70'
                  >
                    <p className='rounded-full bg-pink-200 p-2 text-xl text-pink-400'>
                      {document?.icon}
                    </p>
                    <p>{document.docType}</p>
                  </div>
                )
              })}
          </div>
        )} */}
      </div>
    </>
  )
}

export default LicenseTypes
